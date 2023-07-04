import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty()  
  nombres: string;
    @ApiProperty()
    apellidos: string;
    @ApiProperty()
    correo: string;
    @ApiProperty()
    clave: string;
    @ApiProperty()
    activo?: boolean;
    @ApiProperty()
    tipo: number;
  }
  
  export class UpdateUserDTO {
    @ApiProperty()
    id:number;
    @ApiProperty()
    nombres?: string;
    @ApiProperty()
    apellidos?: string;
    @ApiProperty()
    correo?: string;
    @ApiProperty()
    clave?: string;
    @ApiProperty()
    activo?: boolean;
    @ApiProperty()
    tipo?: number;
  }
  