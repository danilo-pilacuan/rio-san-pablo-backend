import { Flete } from 'src/flete/flete.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Unidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column()
  descripcion: string;

  @Column()
  observaciones: string;

  @Column()
  urlFotoUnidad: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.unidad)
    tarjetas: Tarjeta[]

  @OneToMany(() => Flete, (flete) => flete.unidad)
    fletes: Flete[]
  
}
