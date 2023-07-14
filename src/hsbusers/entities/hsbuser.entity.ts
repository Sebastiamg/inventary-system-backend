import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Details {
  @Column({
    type: 'varchar',
  })
  lastname: string;

  @Column({
    type: 'int',
  })
  phone: number;

  @Column({
    nullable: true,
  })
  admissionDate?: Date;

  @Column({
    nullable: true,
  })
  remainingDays?: number;

  @Column({
    nullable: true,
  })
  vacations?: any[];

  @Column({
    nullable: true,
  })
  addedDays?: number;

  @Column({
    nullable: true,
  })
  takenDays?: number;

  @Column({
    nullable: true,
  })
  permissions?: any[];
}

@Entity({ name: 'hsbuser' })
export class Hsbuser {
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
    unique: true,
    nullable: false,
  })
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  password: string;

  @Column({
    nullable: true,
    type: 'json',
  })
  details?: Details;

  @Column({
    nullable: false,
    type: 'boolean',
    default: true,
  })
  active?: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  changeName() {
    this.name = this.name && formatName(this.name);
    this.details.lastname =
      this.details.lastname && formatName(this.details.lastname);
  }
}

function formatName(name: string) {
  return name.charAt(0).toLocaleUpperCase().concat(name.slice(1, name.length));
}
