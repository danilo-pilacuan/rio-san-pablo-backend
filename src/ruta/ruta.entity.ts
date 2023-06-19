import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  

}
