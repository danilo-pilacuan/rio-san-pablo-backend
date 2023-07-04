import { ApiProperty } from "@nestjs/swagger";

export class CreateCalendarioDTO {
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    mes: string;
    @ApiProperty()
    anio: string;
    @ApiProperty()
    observaciones: string;
  }
  
  export class UpdateCalendarioDTO {
    @ApiProperty()
    id:number;
    @ApiProperty()
    descripcion?: string;
    @ApiProperty()
    mes?: string;
    @ApiProperty()
    anio?: string;
    @ApiProperty()
    observaciones?: string;
  }
  