import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Socio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  urlFotoSocio: string;

  @Column()
  tipoSocio: number;

  @Column({ default: true })
  activo: boolean;

}
