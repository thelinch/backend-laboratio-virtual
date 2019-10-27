import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import { TypeDispositive } from "./TypeDispositive";
import { MaestroDispositive } from "./Maestro_dispositive";

@Entity()
export class Dispositive {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @ManyToOne(
    type => TypeDispositive,
    typeDispositive => typeDispositive.dispositives,
    {
      cascade: true
    }
  )
  typeDispositive!: TypeDispositive;
  @OneToMany(
    type => MaestroDispositive,
    maestroDispositive => maestroDispositive.dispositive,
    { cascade: true }
  )
  maestroDispositive!: MaestroDispositive[];
}
