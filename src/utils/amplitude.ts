import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAnalyticsInstance("dekoratoren");

export const logNavigereEvent = () =>
  logger("navigere", { lenketekst: "familie-ef-mikrofrontend-minside", destinasjon: window.location.href });
