import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";

const analyticsLogger = getAnalyticsInstance("familie-ef-mikrofrontend-minside");

export const logEvent = async (lenketekst: string, destinasjon: string) => {
  await analyticsLogger("navigere", { lenketekst, destinasjon });
};
