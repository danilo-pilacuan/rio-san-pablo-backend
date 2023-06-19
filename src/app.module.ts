import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadModule } from './unidad/unidad.module';
import { RutaModule } from './ruta/ruta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { Socio } from './socio/socio.entity';
import { UsersModule } from './users/users.module';
import { SocioModule } from './socio/socio.module';
import { ReporteModule } from './reporte/reporte.module';
import { AporteModule } from './aporte/aporte.module';
import { Unidad } from './unidad/unidad.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dbTransporte',
      entities: [User,Socio,Unidad],
      synchronize: false,
    }), UnidadModule, RutaModule, UsersModule, SocioModule, ReporteModule,AporteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


