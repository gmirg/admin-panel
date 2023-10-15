import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'packages',
  timestamps: false,
})
export class Package extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' }) // Use field option to specify the actual column name
  id: number;

  @Column
  type: string;

  @Column
  weightInterval: string;

  @Column
  priceCalculation: string;
}