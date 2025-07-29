import React from "react";
import { App } from "./App";
import { LanguageProvider } from "./language/LanguageProvider";

export const Mikrofrontend = () =>
    <LanguageProvider>
      <App />
    </LanguageProvider>
