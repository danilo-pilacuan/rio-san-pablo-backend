import { ApiProperty } from "@nestjs/swagger";

export class CreateRutaDTO {
  @ApiProperty()
    nombre: string;
    @ApiProperty()
    lugarInicio: string;
    @ApiProperty()
    lugarFin: string;
    @ApiProperty()
    horaInicio: string;
    @ApiProperty()
    horaFin: string;
    @ApiProperty()
    activa: boolean;
  }
  
  export class UpdateRutaDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre?: string;
    @ApiProperty()
    lugarInicio?: string;
    @ApiProperty()
    lugarFin?: string;
    @ApiProperty()
    horaInicio?: string;
    @ApiProperty()
    horaFin?: string;
    @ApiProperty()
    activa?: boolean;
  }
  