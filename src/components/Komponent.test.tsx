import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Komponent from "./Komponent";

describe("Simple working test for Komponent", () => {
  it("has a text", () => {
    render(<Komponent undertittel="" tittel="tekst" />);
    expect(screen.getByText(/tekst/)).toBeDefined();
  });
});
