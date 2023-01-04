import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class UsersRepository extends EntityRepository<User> {
  constructor(@InjectModel(User) private userModel: typeof User) {
    super(userModel);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }
}

// @Injectable()
// export class UsersRepository {
//   private createBaseQuery() {
//     return {
//       where: {},
//       include: [],
//       order: [],
//       limit: 0,
//       offset: 0,
//     };
//   }

//   private updateBaseQuery() {
//     return {
//       where: {},
//     };
//   }

//   constructor(@InjectModel(User) private userModel: typeof User) {}

//   async findByEmail(email: string): Promise<any> {
//     return this.userModel.findOne({
//       where: {
//         email,
//       },
//     });
//   }

//   findOne(id: string): Promise<User> {
//     return this.userModel.findOne({
//       where: {
//         id,
//       },
//     });
//   }

//   async findAll(): Promise<User[] | null> {
//     return this.userModel.findAll();
//   }

//   async findById(pk: string): Promise<User | null> {
//     return this.userModel.findByPk(pk);
//   }

//   async create(createEntityData: any): Promise<User> {
//     return this.userModel.create(createEntityData);
//   }

//   public async update(
//     updateEntityData: Record<string, any>,
//     entityQuery: Record<string, any>,
//   ): Promise<any> {
//     const updateQuery = this.updateBaseQuery();
//     updateQuery.where = entityQuery;
//     const res = await this.userModel.update(updateEntityData, updateQuery);
//     return {
//       ...entityQuery,
//       response: !!res[0],
//     };
//   }
// }
