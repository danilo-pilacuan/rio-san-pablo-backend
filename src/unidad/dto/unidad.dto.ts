import { ApiProperty } from "@nestjs/swagger";

export class CreateUnidadDTO{

  @ApiProperty()
  placa: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  observaciones: string;

  @ApiProperty()
  urlFotoUnidad: string;

  @ApiProperty()
  activo: boolean;
  }
  
  export class UpdateUnidadDTO{
    @ApiProperty()
      id: number;
      @ApiProperty()
      placa: string;

      @ApiProperty()
      descripcion: string;
    
      @ApiProperty()
      observaciones: string;
    
      @ApiProperty()
      urlFotoUnidad: string;
    
      @ApiProperty()
      activo: boolean;
  }