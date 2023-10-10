import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  role: string;
}