export interface MPP1 {
  Planta:                       Planta;
  Equipo:                       string;
  CentroConstos:                number;
  Codigo:                       string;
  HorometroActual:              number;
  CodigoActividad:              string;
  Descripcion:                  string;
  FecProgramacionMantenimiento: Date;
  FecMantenimientoTerminado:    string;
  Dias:                         number | string;
  Estado:                       Estado;
  Encargado:                    string;
  Comentarios:                  string;
}

export enum Estado {
  EnDiagnostico = "EN DIAGNOSTICO",
  EnEjecucion = "EN EJECUCION",
  EnProcesoCompra = "EN PROCESO COMPRA",
  Programado = "PROGRAMADO",
  Terminado = "TERMINADO",
}

export enum Planta {
  Catarina = "CATARINA",
  Corinto = "CORINTO",
  Portobello = "PORTOBELLO",
  Riofrio = "RIOFRIO",
  TallerCartago = "TALLER CARTAGO",
  Zabaleta = "ZABALETA",
}
