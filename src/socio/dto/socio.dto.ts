import { ApiProperty } from "@nestjs/swagger";

export class CreateSocioDTO{
  @ApiProperty()
  cedula: string;
  @ApiProperty()
  nombres: string;
  @ApiProperty()
  apellidos: string;
  @ApiProperty()
  direccion: string;
  @ApiProperty()
  telefono: string;
  @ApiProperty()
  urlFotoSocio: string;
  @ApiProperty()
  tipoSocio: number;
  @ApiProperty()
  activo: boolean;
}

export class UpdateSocioDTO{
  @ApiProperty()
    id: number;
    @ApiProperty()
  cedula: string;
  @ApiProperty()
  nombres: string;
  @ApiProperty()
  apellidos: string;
  @ApiProperty()
  direccion: string;
  @ApiProperty()
  telefono: string;
  @ApiProperty()
  urlFotoSocio: string;
  @ApiProperty()
  tipoSocio: number;
  @ApiProperty()
  activo: boolean;
}