import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "Houses",
})
export class Houses extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  address: number;

  @Column({
    type: DataType.FLOAT,

  })
  currentValue: number;

  @Column({
    type: DataType.FLOAT,

  })
  loanAmount: number;

  @Column({
    type: DataType.FLOAT,

  })
  risk: number;
}



