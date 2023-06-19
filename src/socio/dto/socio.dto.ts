
export class CreateSocioDTO{

  cedula: string;

  nombres: string;

  apellidos: string;

  direccion: string;
  telefono: string;

  urlFotoSocio: string;

  tipoSocio: number;

  activo: boolean;
}

export class UpdateSocioDTO{
    id: number;

  cedula: string;

  nombres: string;

  apellidos: string;

  direccion: string;
  telefono: string;

  urlFotoSocio: string;

  tipoSocio: number;

  activo: boolean;
}