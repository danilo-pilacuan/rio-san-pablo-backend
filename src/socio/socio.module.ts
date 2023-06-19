import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioController } from './socio.controller';
import { SocioService } from './socio.service';
import { Socio } from './socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Socio])],
  controllers: [SocioController],
  providers: [SocioService]
})
export class SocioModule {}
