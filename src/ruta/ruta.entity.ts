import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Calendario } from '../calendario/calendario.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { CalendarioRuta } from 'src/calendario-ruta/calendario-ruta.entity';

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

  @Column()
  horaInicio: string;

  @Column()
  horaFin: string;

  @Column({ default: true })
  activa: boolean;

  @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.ruta)
    tarjetas: Tarjeta[]
  
  // @ManyToMany(() => Calendario, (calendario) => calendario.rutas)
  //   calendarios: Calendario[]

  @OneToMany(() => CalendarioRuta, (calendarioRuta) => calendarioRuta.ruta)
  rutasCalendario: CalendarioRuta[]
}
