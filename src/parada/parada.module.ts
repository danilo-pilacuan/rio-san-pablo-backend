import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parada } from './parada.entity';
import { ParadaService } from './parada.service';
import { ParadaController } from './parada.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Parada])],
  providers: [ParadaService],
  controllers: [ParadaController],
})
export class ParadaModule {}
