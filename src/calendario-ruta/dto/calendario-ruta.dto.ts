import { ApiProperty } from "@nestjs/swagger";

export class CreateCalendarioRutaDTO {
    @ApiProperty()
    dia: number;
    @ApiProperty()
    valor: number;
    @ApiProperty()
    calendarioId: number;
    @ApiProperty()
    rutaId: number;
  }
  
  export class UpdateCalendarioRutaDTO {
    @ApiProperty()
    id:number;
    @ApiProperty()
    dia: number;
    @ApiProperty()
    valor: number;
    @ApiProperty()
    calendarioId: number;
    @ApiProperty()
    rutaId: number;
  }
  