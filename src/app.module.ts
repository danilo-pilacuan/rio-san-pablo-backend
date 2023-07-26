import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadModule } from './unidad/unidad.module';
import { RutaModule } from './ruta/ruta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { UserModule } from './user/user.module';
import { SocioModule } from './socio/socio.module';
import { ReporteModule } from './reporte/reporte.module';
import { AporteModule } from './aporte/aporte.module';

import { InventarioModule } from './inventario/inventario.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { ReciboModule } from './recibo/recibo.module';
import { ParadaModule } from './parada/parada.module';

// import { Aporte } from './Aporte/Aporte.entity';
// import { Inventario } from './Inventario/Inventario.entity';
// import { Parada } from './Parada/Parada.entity';
// import { Recibo } from './Recibo/Recibo.entity';
// import { Reporte } from './Reporte/Reporte.entity';
// import { Ruta } from './Ruta/Ruta.entity';
// import { Socio } from './Socio/Socio.entity';
// import { Tarjeta } from './Tarjeta/Tarjeta.entity';
// import { Unidad } from './Unidad/Unidad.entity';
// import { User } from './User/User.entity';
import { CalendarioModule } from './calendario/calendario.module';
import { CalendarioRutaModule } from './calendario-ruta/calendario-ruta.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot:"/assets"
    })
    ,TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dbTransporte',
      autoLoadEntities: true,
      synchronize: false,
    }), UnidadModule, RutaModule, UserModule, SocioModule, ReporteModule,AporteModule, InventarioModule, TarjetaModule, ReciboModule, ParadaModule, CalendarioModule, CalendarioRutaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


