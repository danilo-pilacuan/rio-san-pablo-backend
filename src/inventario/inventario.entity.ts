import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Socio } from '../socio/socio.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion:string;

  @Column()
  cantidad:number;

  @Column()
  observaciones:string;

// se definira una clase calendario que sera la que se relacione con ruta
//   @Column({ type: 'date' })
//   horaInicio: string;

//   @Column({ type: 'date' })
//   horaFin: string;

  @Column({ default: true })
  activa: boolean;
  
  @ManyToOne(() => Socio, (socio) => socio.inventarios)
  socio: Socio
}
