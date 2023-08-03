import { Module } from '@nestjs/common';
import { FleteService } from './flete.service';
import { FleteController } from './flete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flete } from './flete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flete])],
  providers: [FleteService],
  controllers: [FleteController]
})
export class FleteModule {}
