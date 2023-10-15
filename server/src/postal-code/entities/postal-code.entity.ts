import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'PostalCode',
  timestamps: false,
})
export class PostalCode extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'postalCodeID' }) // Use field option to specify the actual column name
  postalCodeID: number;

  @Column
  transportID: string;

  @Column
  postalCodeStart: string;

  @Column
  postalCodeEnd: string;
}