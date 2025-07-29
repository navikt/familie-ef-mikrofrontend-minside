import useTranslate from "./language/useTranslate.jsx";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  return (
    <section>
      <Komponent undertittel={useTranslate("microfrontendSubtitle")} tittel={useTranslate("microfrontendTitle")} />
    </section>
  );
}

export default App;
