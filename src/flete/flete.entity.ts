import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Calendario } from '../calendario/calendario.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { Unidad } from 'src/unidad/unidad.entity';


@Entity()
export class Flete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  lugarInicio: string;

  @Column()
  lugarFin: string;

  // @Column()
  // horaInicio: string;

  // @Column()
  // horaFin: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  fechaInicio: Date;
  
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  fechaFin: Date;

  @Column()
  numHoras: number;

  @Column({ type: "boolean", default: true })
  activa: boolean;

  @ManyToOne(()=>Unidad,(unidad)=>unidad.fletes)
    unidad:Unidad;

//   @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.flete)
//     tarjetas: Tarjeta[]

//   @OneToMany(() => CalendarioFlete, (calendarioFlete) => calendarioFlete.flete)
//   fletesCalendario: CalendarioFlete[]
}
