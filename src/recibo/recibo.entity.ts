import { Aporte } from 'src/aporte/aporte.entity';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, OneToOne } from 'typeorm';

@Entity()
export class Recibo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numRecibo: string;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  valor: number;

  @Column()
  idSocio: number;

  @OneToOne(() => Aporte, (aporte) => aporte.recibo)
  aporte: Aporte

}
