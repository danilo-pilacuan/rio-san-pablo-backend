import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarjeta } from './tarjeta.entity';
import { TarjetaController } from './tarjeta.controller';
import { TarjetaService } from './tarjeta.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tarjeta])],
  controllers: [TarjetaController],
  providers: [TarjetaService],
})
export class TarjetaModule {}
