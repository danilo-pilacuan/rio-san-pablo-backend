import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { Ruta } from '../ruta/ruta.entity';

@Entity()
export class Calendario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column() 
  mes: string;

  @Column() 
  anio: string;

  @Column()
  observaciones: string;


  @ManyToMany(() => Ruta, (ruta) => ruta.calendarios)
    @JoinTable()
    rutas: Ruta[]
  

}
