import { ApiProperty } from "@nestjs/swagger";

export class CreateTarjetaDTO {
  @ApiProperty()  
  idUnidad: number;
    @ApiProperty()
    idRuta: number;
    @ApiProperty()
    idChofer: number;
    @ApiProperty()
    idControlador: number;
    @ApiProperty()
    fecha: Date;
  }
  
  export class UpdateTarjetaDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    idUnidad: number;
    @ApiProperty()
    idRuta: number;
    @ApiProperty()
    idChofer: number;
    @ApiProperty()
    idControlador: number;
    @ApiProperty()
    fecha: Date;
  }
  