import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { User } from '../user.schema';

@Table({ timestamps: true })
export class UserRole extends Model {
  @Column({ primaryKey: true })
  roleId: string;

  @Column(DataType.ENUM('user', 'admin'))
  role: string;

  @Column
  @ForeignKey(() => User)
  userId: number;
}
