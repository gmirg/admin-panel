import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'transports',
  timestamps: false,
})
export class Transport extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' }) // Use field option to specify the actual column name
  id: number;

  @Column
  companyName: string;
}