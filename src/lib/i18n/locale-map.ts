import { es } from "./es";
import { ptBR } from "./pt-BR";
import { fr } from "./fr";
import { de } from "./de";
import { ja } from "./ja";
import { ko } from "./ko";
import { zhCN } from "./zh-CN";
import { enToolClient } from "./en";
import type { LocaleSEO, ToolClientCopy } from "./types";

const map: Record<string, LocaleSEO> = {
  es,
  "pt-BR": ptBR,
  fr,
  de,
  ja,
  ko,
  "zh-CN": zhCN,
};

export function getLocaleSEO(locale: string): LocaleSEO | undefined {
  return map[locale];
}

export type ToolKey = "restore" | "colorize" | "enhance";

// Returns tool-client copy for a given locale + tool, falling back to the
// English defaults when the locale is EN or when a locale file has not yet
// provided `toolClient`. Always returns a fully populated object.
export function getToolClientCopy(locale: string, tool: ToolKey): ToolClientCopy {
  const localeCopy = map[locale]?.toolClient?.[tool];
  return localeCopy ?? enToolClient[tool];
}
