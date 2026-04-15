import { es } from "./es";
import { ptBR } from "./pt-BR";
import { fr } from "./fr";
import { de } from "./de";
import { ja } from "./ja";
import { ko } from "./ko";
import type { LocaleSEO } from "./types";

const map: Record<string, LocaleSEO> = {
  es,
  "pt-BR": ptBR,
  fr,
  de,
  ja,
  ko,
};

export function getLocaleSEO(locale: string): LocaleSEO | undefined {
  return map[locale];
}
