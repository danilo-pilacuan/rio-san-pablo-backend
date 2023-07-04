import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Calendario } from '../calendario/calendario.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';

@Entity()
export class Ruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  lugarInicio: string;

  @Column()
  lugarFin: string;

  @Column({ type: 'date' })
  horaInicio: string;

  @Column({ type: 'date' })
  horaFin: string;

  @Column({ default: true })
  activa: boolean;

  @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.ruta)
    tarjetas: Tarjeta[]
  
  @ManyToMany(() => Calendario, (calendario) => calendario.rutas)
    calendarios: Calendario[]

}
