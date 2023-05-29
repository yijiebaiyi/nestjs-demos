import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
@Table({
  tableName:"user"
})
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}