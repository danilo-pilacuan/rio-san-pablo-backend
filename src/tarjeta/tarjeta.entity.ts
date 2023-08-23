import { Aporte } from 'src/aporte/aporte.entity';
import { Parada } from 'src/parada/parada.entity';
import { Reporte } from 'src/reporte/reporte.entity';
import { Ruta } from 'src/ruta/ruta.entity';
import { Socio } from 'src/socio/socio.entity';
import { Unidad } from 'src/unidad/unidad.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // idUnidad:number;

  // @Column()
  // idRuta: number;

  // @Column()
  // idChofer:number;

  // @Column()
  // idControlador:number;
  
  @Column()
  fecha:Date;
  
  @Column()
  observaciones:string;

  @ManyToOne(() => Unidad, (unidad) => unidad.tarjetas)
  unidad: Unidad

  @ManyToOne(() => Ruta, (ruta) => ruta.tarjetas)
  ruta: Ruta

  // @ManyToOne(() => Socio, (chofer) => chofer.tarjetas)
  // chofer: Socio

  // @ManyToOne(() => Socio, (controlador) => controlador.tarjetas)
  // controlador: Socio

  @ManyToOne(() => Socio, socio => socio.id)
  @JoinColumn({ name: "socioId" })
  public chofer: Socio;

  @ManyToOne(() => Socio, socio => socio.id)
  @JoinColumn({ name: "controladorId" })
  public controlador: Socio;


  @OneToMany(() => Parada, (parada) => parada.tarjeta, { onDelete: "CASCADE" })
  paradas: Parada[]
  
  @OneToOne(() => Aporte, (aporte) => aporte.tarjeta, { onDelete: "CASCADE" })
  aporte: Aporte

  @ManyToOne(() => Reporte, (reporte) => reporte.tarjetas, { onDelete: "CASCADE" })
  reporte: Reporte
}
