import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'shipments',
  timestamps: false, // Disable timestamps
})
export class Shipment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' }) // Use field option to specify the actual column name
  id: number;

  @Column
  shipmentAddress: string;

  @Column
  postalCode: number;

  @Column
  recipientName: string;

  @Column
  senderName: string;
  
  @Column
  weight: number;

  @Column
  packageTypeID: number;

  @Column
  ShipmentPrice: number;

  @Column
  transportID: number;

  @Column
  creationDate: number;

  @Column
  userOwner: number;
}