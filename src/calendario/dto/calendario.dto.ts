import { ApiProperty } from "@nestjs/swagger";

export class CreateCalendarioDTO {
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    mes: number;
    @ApiProperty()
    anio: number;
    @ApiProperty()
    observaciones: string;
  }
  
  export class UpdateCalendarioDTO {
    @ApiProperty()
    id:number;
    @ApiProperty()
    descripcion?: string;
    @ApiProperty()
    mes?: number;
    @ApiProperty()
    anio?: number;
    @ApiProperty()
    observaciones?: string;
  }
  