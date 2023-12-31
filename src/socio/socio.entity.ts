import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Inventario } from '../inventario/inventario.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { Aporte } from 'src/aporte/aporte.entity';


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

  @Column({  type: "boolean",default: true })
  activo: boolean;

  @OneToMany(() => Inventario, (inventario) => inventario.socio, { onDelete: "CASCADE" })
  inventarios: Inventario[]

  @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.id, { onDelete: "CASCADE" })
  tarjetas: Tarjeta[]

  @OneToMany(() => Aporte, (aporte) => aporte.socio, { onDelete: "CASCADE" })
  aportes: Aporte[]


}
