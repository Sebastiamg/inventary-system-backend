import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssetActive } from '../constants/assetActive';
import { AssetType } from '../constants/assetType';
import { AssetUbication } from '../constants/assetUbi';

@Entity()
class assetDetails {
  @Column({
    enum: AssetType,
    nullable: false,
  })
  assetType: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  brand: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  color: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  responsible: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  model: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  serialNumber: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  supplier: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  value: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  depreciationTime: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  residualValue: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  annualDepreciation: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  monthlyDepreciation: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  valueBooks: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  observation: string;
  @Column({
    type: 'decimal',
    nullable: false,
  })
  insured: number;

  @Column({
    enum: AssetActive,
    nullable: false,
  })
  active: AssetActive;

  @Column({
    enum: AssetUbication,
    nullable: false,
  })
  ubication: AssetUbication;
}

@Entity({ name: 'hsbasset' })
export class HsbAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'json',
    nullable: false,
  })
  details: assetDetails;

  @Column({
    type: 'date',
    nullable: false,
  })
  purchaseDate: Date;

  @BeforeInsert()
  @BeforeUpdate()
  changeName() {
    this.name = this.name && formatName(this.name);
  }
}

function formatName(name: string) {
  return name.charAt(0).toLocaleUpperCase().concat(name.slice(1, name.length));
}
