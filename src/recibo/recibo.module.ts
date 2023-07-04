import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recibo } from './recibo.entity';
import { ReciboService } from './recibo.service';
import { ReciboController } from './recibo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recibo])],
  providers: [ReciboService],
  controllers: [ReciboController],
})
export class ReciboModule {}
