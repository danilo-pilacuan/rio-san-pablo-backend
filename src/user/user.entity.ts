import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  correo: string;

  @Column()
  clave: string;

  @Column({ default: true })
  activo: boolean;

  @Column()
  tipo: number;
}