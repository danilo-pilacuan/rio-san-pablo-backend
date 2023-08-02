import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarioController } from './calendario.controller';
import { CalendarioService } from './calendario.service';
import { Calendario } from './calendario.entity';
import { CalendarioRuta } from 'src/calendario-ruta/calendario-ruta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calendario,CalendarioRuta])],
  controllers: [CalendarioController],
  providers: [CalendarioService,CalendarioRuta],
})
export class CalendarioModule {}
