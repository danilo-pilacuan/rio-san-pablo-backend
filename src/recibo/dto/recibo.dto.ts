import { ApiProperty } from "@nestjs/swagger";

export class CreateReciboDTO {
  @ApiProperty()
    numRecibo: string;
    @ApiProperty()
    valor: number;
    @ApiProperty()
    idSocio: number;
  }
  
  export class UpdateReciboDTO {
    @ApiProperty()
    id: number;
    @ApiProperty()
    numRecibo: string;
    @ApiProperty()
    valor: number;
    @ApiProperty()
    idSocio: number;
  }