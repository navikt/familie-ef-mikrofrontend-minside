const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const API_URL: EnvUrl = {
  local: "http://localhost:3000/familie/alene-med-barn/minside",
  development: "https://familie.ekstern.dev.nav.no/familie/alene-med-barn/minside",
  production: "https://www.nav.no/familie/alene-med-barn/minside",
};

export const innsynEnsligForsørgerUrl = API_URL[getEnvironment()];
