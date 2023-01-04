import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { UserRole } from './relationships/user-role.schema';

@Table({ timestamps: true })
export class User extends Model {
  @Column({ primaryKey: true })
  user_id: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  // @HasMany(() => UserRole)
  // roles: UserRole[];

  @Column({ defaultValue: false })
  isVerified: boolean;
}
