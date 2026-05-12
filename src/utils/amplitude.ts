import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAnalyticsInstance("familie-ef-mikrofrontend-minside");

export const logNavigereEvent = (destinasjon: string) =>
  logger("navigere", { lenketekst: "familie-ef-mikrofrontend-minside", destinasjon });
