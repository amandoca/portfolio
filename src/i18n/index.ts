import en from "./en.json";
import pt from "./pt.json";

export const messages = {
  pt,
  en,
};

export const languageOptions = Object.keys(messages).map((code) => ({
  code,
  label: code.toUpperCase(),
}));
