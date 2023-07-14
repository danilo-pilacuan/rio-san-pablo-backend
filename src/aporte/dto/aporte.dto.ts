import { ApiProperty } from "@nestjs/swagger";

export class CreateAporteDTO {
  @ApiProperty()  
  numDisco: string;
  @ApiProperty()

    nombreSocio: string;
    @ApiProperty()

    numRecibo: string;
    @ApiProperty()

    cantidad: number;
    @ApiProperty()

    tarjetaActual: number;
    @ApiProperty()

    adicional: number;
    @ApiProperty()

    otros: number;
    @ApiProperty()

    mcAct: number;
    @ApiProperty()

    mcAnt: number;
    @ApiProperty()

    multas: number;
    @ApiProperty()

    total: number;
    @ApiProperty()
    reporteId:number
    @ApiProperty()
    socioId:number
    @ApiProperty()
    reciboId:number
    @ApiProperty()
    tarjetaId:number

  }
  
  export class UpdateAporteDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    numDisco: string;
    @ApiProperty()
    nombreSocio: string;
    @ApiProperty()
    numRecibo: string;
    @ApiProperty()
    cantidad: number;
    @ApiProperty()
    tarjetaActual: number;
    @ApiProperty()
    adicional: number;
    @ApiProperty()
    otros: number;
    @ApiProperty()
    mcAct: number;
    @ApiProperty()
    mcAnt: number;
    @ApiProperty()
    multas: number;
    @ApiProperty()
    total: number;
  }
  