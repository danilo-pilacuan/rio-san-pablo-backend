import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarioController } from './calendario.controller';
import { CalendarioService } from './calendario.service';
import { Calendario } from './calendario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calendario])],
  controllers: [CalendarioController],
  providers: [CalendarioService],
})
export class CalendarioModule {}
