import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne } from 'typeorm';

@Entity()
export class Parada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  horaLlegada: string;

  @Column()
  horaSalida: string;

  @Column()
  idTarjeta: number;

  @ManyToOne(() => Tarjeta, (tarjeta) => tarjeta.paradas)
  tarjeta: Tarjeta

}
