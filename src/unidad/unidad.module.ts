import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadService } from './unidad.service';
import { UnidadController } from './unidad.controller';
import { Unidad } from './unidad.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Unidad])],
    providers: [UnidadService],
    controllers: [UnidadController],
})
export class UnidadModule {}
