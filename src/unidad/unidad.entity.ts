import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  
}
