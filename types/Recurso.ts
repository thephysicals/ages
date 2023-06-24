interface Recurso {
  id: number;
  nome: string;
  descricao: string;
  tipoRecurso: TipoRecurso;
  tipoEquimento: TipoEquipamento;
}

enum TipoRecurso {
  SALA_ESPECIFICA = 'SALA_ESPECIFICA',
  SALA_MULTIUSO = 'SALA_MULTIUSO',
  EQUIPAMENTO_PORTATIL = 'EQUIPAMENTO_PORTATIL',
}

enum TipoEquipamento {
  BIOMECANICA = 'BIOMECANICA',
  CARDIORESPIRATORIA = 'CARDIORESPIRATORIA',
  MUSCULOESQUELETICA = 'MUSCULOESQUELETICA',
  MULTISETORIAL_EXPERIMENTAL = 'MULTISETORIAL_EXPERIMENTAL',
}

export type {Recurso};
export {TipoRecurso, TipoEquipamento};
