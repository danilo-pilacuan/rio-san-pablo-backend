import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  

}
