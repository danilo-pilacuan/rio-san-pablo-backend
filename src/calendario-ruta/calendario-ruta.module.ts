import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarioRuta } from './calendario-ruta.entity';
import { CalendarioRutaService } from './calendario-ruta.service';
import { CalendarioRutaController } from './calendario-ruta.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarioRuta])],
    providers: [CalendarioRutaService],
    controllers: [CalendarioRutaController]
})
export class CalendarioRutaModule {}
