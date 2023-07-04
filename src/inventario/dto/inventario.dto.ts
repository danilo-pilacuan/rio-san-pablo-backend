import { ApiProperty } from "@nestjs/swagger";

export class CreateInventarioDTO {
  @ApiProperty()
    nombre: string;
    @ApiProperty()
    cantidad:number;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    observaciones: string;
    @ApiProperty()
    activa: boolean;


  }
  
  export class UpdateInventarioDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre: string;
    @ApiProperty()
    cantidad:number;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    observaciones: string;
    @ApiProperty()
    activa: boolean;
  }
  