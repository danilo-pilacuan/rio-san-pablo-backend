import { ApiProperty } from "@nestjs/swagger";

export class CreateParadaDTO {
  @ApiProperty()
    nombre: string;
    @ApiProperty()
    horaLlegada: string;
    @ApiProperty()
    horaSalida: string;
    @ApiProperty()
    idTarjeta: number;
  }
  
  export class UpdateParadaDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre: string;
    @ApiProperty()
    horaLlegada: string;
    @ApiProperty()
    horaSalida: string;
    @ApiProperty()
    idTarjeta: number;
  }
  