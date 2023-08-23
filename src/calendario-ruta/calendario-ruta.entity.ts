import { Ruta } from 'src/ruta/ruta.entity';
import { Calendario } from 'src/calendario/calendario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class CalendarioRuta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia:number;
  
  @Column()
  valor:number;

  @ManyToOne(() => Calendario, (calendario) => calendario.rutasCalendario, { onDelete: "CASCADE" })
  calendario: Calendario

  @ManyToOne(() => Ruta, (ruta) => ruta.rutasCalendario, { onDelete: "CASCADE" })
  ruta: Ruta

}