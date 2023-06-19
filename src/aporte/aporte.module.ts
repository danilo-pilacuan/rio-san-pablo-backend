import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AporteController } from './aporte.controller';
import { AporteService } from './aporte.service';
import { Aporte } from './aporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aporte])],
  controllers: [AporteController],
  providers: [AporteService]
})
export class AporteModule {}
