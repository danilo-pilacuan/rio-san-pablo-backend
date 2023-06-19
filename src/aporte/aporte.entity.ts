import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numDisco: string;

  @Column()
  nombreSocio: string;

  @Column()
  numRecibo: string;

  @Column()
  cantidad: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  tarjetaActual: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  adicional: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  otros: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  mcAct: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  mcAnt: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  multas: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  total: number;

}
