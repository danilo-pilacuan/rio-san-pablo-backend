import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { Ruta } from '../ruta/ruta.entity';
import { CalendarioRuta } from 'src/calendario-ruta/calendario-ruta.entity';

@Entity()
export class Calendario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column() 
  mes: number;

  @Column() 
  anio: number;

  @Column()
  observaciones: string;


  // @ManyToMany(() => Ruta, (ruta) => ruta.calendarios)
  //   @JoinTable()
  //   rutas: Ruta[]
  
  @OneToMany(() => CalendarioRuta, (calendarioRuta) => calendarioRuta.calendario)
  rutasCalendario: CalendarioRuta[]

}
