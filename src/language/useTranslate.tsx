import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  microfrontendTitle: {
    nb: "Stønad til enslig mor eller far",
    nn: "Stønad til enslig mor eller far",
    en: "Benefit for single mother or father",
  },
  microfrontendSubtitle: {
    nb: "Oversikt over saken din",
    nn: "Oversikt over saken din",
    en: "Your case overview",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
