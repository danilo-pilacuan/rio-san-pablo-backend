import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarioRuta } from './calendario-ruta.entity';
import { CalendarioRutaService } from './calendario-ruta.service';
import { CalendarioRutaController } from './calendario-ruta.controller';
import { Calendario } from 'src/calendario/calendario.entity';
import { CalendarioService } from 'src/calendario/calendario.service';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarioRuta,Calendario])],
    providers: [CalendarioRutaService,CalendarioService],
    controllers: [CalendarioRutaController]
})
export class CalendarioRutaModule {}
