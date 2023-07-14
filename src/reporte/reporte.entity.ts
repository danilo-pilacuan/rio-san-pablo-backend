import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne } from 'typeorm';
import { Aporte } from '../aporte/aporte.entity';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';

@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha:Date;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0}) 
  ingresosAdministrativos: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  ingresosOtros: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  ingresosAdicionales: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  ingresosTotales: number;

  @Column()
  presidente: string;
  @Column()
  gerente: string;
  @Column()
  vigilancia: string;
  @Column()
  recaudadora: string;

  @OneToMany(() => Aporte, (aporte) => aporte.reporte)
    aportes: Aporte[]

  // @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.reporte)
  //   tarjetas: Tarjeta[]

  // @OneToMany(() => Aporte, aporte => aporte.reporte)
  // aportes: Aporte[];

  // @OneToMany( 
  //   () => Aporte, 
  //   (aporte: Aporte) => aporte.reporte, 
  // )
  // aportes: Aporte[];

  // @OneToMany(type => Aporte)
  // @JoinColumn({ name: "reporte_id",referencedColumnName: "id" })
  // aportes: Aporte[];

  

}

