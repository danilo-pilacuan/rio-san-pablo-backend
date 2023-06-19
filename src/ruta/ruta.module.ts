import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutaController } from './ruta.controller';
import { RutaService } from './ruta.service';
import { Ruta } from './ruta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruta])],
  controllers: [RutaController],
  providers: [RutaService]
})
export class RutaModule {}
