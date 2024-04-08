import i18n from "@/locales";
import { useAppSelector } from "./useRedux";

export function useLocalization() {
  const language = useAppSelector((state) => state.language.language);
  const t = (key: string, values?: Record<string, any>) => {
    return i18n.t(key, { lng: language, ...values }) as string;
  };
  return { t };
}
