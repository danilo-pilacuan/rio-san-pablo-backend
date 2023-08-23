import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, OneToOne} from 'typeorm';
import { Reporte } from '../reporte/reporte.entity';
import { Recibo } from 'src/recibo/recibo.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { Socio } from 'src/socio/socio.entity';

@Entity()
export class Aporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numDisco: string;

  // @Column() //relacionar a socio
  // nombreSocio: string;

  // @Column() //autogenerar o crear tabla recibo
  // numRecibo: string;

  @Column()
  cantidad: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0}) 
  tarjetaActual: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  adicional: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  otros: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  mcAct: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  mcAnt: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  multas: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  total: number;

  @ManyToOne(() => Reporte, (reporte) => reporte.aportes, { onDelete: "CASCADE" })
    reporte: Reporte

  @ManyToOne(() => Socio, (socio) => socio.aportes, { onDelete: "CASCADE" })
  socio: Socio
  
  @ManyToOne(() => Recibo, (recibo) => recibo.aporte, { onDelete: "CASCADE" })
  recibo: Recibo
  
  @ManyToOne(() => Tarjeta, (tarjeta) => tarjeta.aporte, { onDelete: "CASCADE" })
  tarjeta: Tarjeta

  //socio, recibo, tarjeta
  

  //adicionar relacion a reporte
}
