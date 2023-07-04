import { ApiProperty } from "@nestjs/swagger";

export class CreateReporteDTO {
  @ApiProperty()
    fecha: Date;
    @ApiProperty()
    ingresosAdministrativos: number;
    @ApiProperty()
    ingresosOtros: number;
    @ApiProperty()
    ingresosAdicionales: number;
    @ApiProperty()
    ingresosTotales: number;
    @ApiProperty()
    presidente: string;
    @ApiProperty()
    gerente: string;
    @ApiProperty()
    vigilancia: string;
    @ApiProperty()
    recaudadora: string;
  }
  
  export class UpdateReporteDTO {
    @ApiProperty()
    id:number;
    @ApiProperty()
    fecha?: Date;
    @ApiProperty()
    ingresosAdministrativos?: number;
    @ApiProperty()
    ingresosOtros?: number;
    @ApiProperty()
    ingresosAdicionales?: number;
    @ApiProperty()
    ingresosTotales?: number;
    @ApiProperty()
    presidente?: string;
    @ApiProperty()
    gerente?: string;
    @ApiProperty()
    vigilancia?: string;
    @ApiProperty()
    recaudadora?: string;
  }
  