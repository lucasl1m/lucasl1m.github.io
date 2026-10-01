export type Locale = 'pt-BR' | 'en-US';

/** Ano e mês no formato ISO, por exemplo "2026-06". */
export type YearMonth = `${number}-${number}`;

export type ContextId =
  | 'lifters'
  | 'blockfy'
  | 'beeteller'
  | 'educbank'
  | 'pagoParcelado'
  | 'harpia'
  | 'devroast';

export type ProjectId = 'pagoParcelado' | 'harpia' | 'devroast';

export interface Shot {
  id: string;
  src: string;
  srcSmall: string;
  width: number;
  height: number;
}
