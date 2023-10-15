import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: false, // Disable timestamps
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'userID' }) // Use field option to specify the actual column name
  userId: number;
  
  @Column
  name: string;

  @Column
  email: string;

  @Column
  isAdmin: boolean;

  @Column
  password: string;
}