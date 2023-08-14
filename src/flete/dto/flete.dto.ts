import { ApiProperty } from "@nestjs/swagger";

export class CreateFleteDTO {
  @ApiProperty()
    descripcion: string;
    @ApiProperty()
    lugarInicio: string;
    @ApiProperty()
    lugarFin: string;
    // @ApiProperty()
    // horaInicio: string;
    // @ApiProperty()
    // horaFin: string;
    @ApiProperty()
    fechaInicio: Date;
    
    @ApiProperty()
    fechaFin: Date;

    @ApiProperty()
    numHoras: number;
    @ApiProperty()
    activa: boolean;
    
    @ApiProperty()
    unidadId: number;
  }
  
  export class UpdateFleteDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    descripcion?: string;
    @ApiProperty()
    lugarInicio?: string;
    @ApiProperty()
    lugarFin?: string;
    // @ApiProperty()
    // horaInicio?: string;
    // @ApiProperty()
    // horaFin?: string;
    @ApiProperty()
    fechaInicio?: string;
    
    @ApiProperty()
    fechaFin?: string;

    @ApiProperty()
    numHoras?: number;
    @ApiProperty()
    activa: boolean;
    @ApiProperty()
    unidadId: number;
  }
  