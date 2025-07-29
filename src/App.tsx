import { useTranslate } from "./language/useTranslate.jsx";
import { Komponent } from "./components/Komponent";
import "@navikt/ds-css";

export const App = () =>
    <section>
      <Komponent undertittel={useTranslate("microfrontendSubtitle")} tittel={useTranslate("microfrontendTitle")} />
    </section>
