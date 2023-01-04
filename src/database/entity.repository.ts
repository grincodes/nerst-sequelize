import { Model } from 'sequelize-typescript';
import { ModelStatic } from 'sequelize/types/model';

export abstract class EntityRepository<T extends Model> {
  constructor(protected readonly entityModel: ModelStatic<T>) {}

  private createBaseQuery() {
    return {
      where: {},
      include: [],
      order: [],
      limit: 0,
      offset: 0,
    };
  }

  private updateBaseQuery() {
    return {
      where: {},
    };
  }

  async findById(pk: string): Promise<T | null> {
    return this.entityModel.findByPk(pk);
  }

  public async exists(id: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { id };
    const exists = await this.entityModel.findOne(baseQuery);
    return !!exists === true;
  }

  async findAll(): Promise<T[] | null> {
    return this.entityModel.findAll();
  }

  async create(createEntityData: any): Promise<T> {
    return this.entityModel.create(createEntityData);
  }

  public async update(
    updateEntityData: Record<string, any>,
    entityQuery: Record<string, any>,
  ): Promise<any> {
    const updateQuery = this.updateBaseQuery();
    updateQuery.where = entityQuery;
    const res = await this.entityModel.update(updateEntityData, updateQuery);
    return {
      ...entityQuery,
      response: !!res[0],
    };
  }

  //   async findOneAndUpdate(
  //     entityFilterQuery: FilterQuery<T>,
  //     updateEntityData: UpdateQuery<unknown>,
  //   ): Promise<T | null> {
  //     return this.entityModel.findOneAndUpdate(
  //       entityFilterQuery,
  //       updateEntityData,
  //       {
  //         new: true,
  //       },
  //     );
  //   }

  //   async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
  //     const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
  //     return deleteResult.deletedCount >= 1;
  //   }
}
