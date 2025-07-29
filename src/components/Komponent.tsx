import React from "react";
import styles from "./Komponent.module.css";
import { innsynEnsligForsørgerUrl } from "../api/urls";
import { logNavigereEvent } from "../utils/amplitude";
import { EnsligForsørgerIcon } from "../icons/EnsligForsørgerIcon";
import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";

interface Props {
  tittel: string;
  undertittel: string;
}

const Komponent = ({ tittel, undertittel }: Props) => {
  return (
    <a className={styles.container} href={innsynEnsligForsørgerUrl} onClick={logNavigereEvent}>
      <div className={styles.ikonOgTekstContainer}>
        <div aria-hidden>
          <EnsligForsørgerIcon />
        </div>
        <div>
          <Heading size="small" level="2">
            {tittel}
          </Heading>
          <BodyLong size="medium">{undertittel}</BodyLong>
        </div>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Komponent;
