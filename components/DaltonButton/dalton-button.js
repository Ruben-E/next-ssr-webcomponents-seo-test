import { html, LitElement } from "lit";
import { createComponent } from "@lit-labs/react";
import React from "react";

export class DaltonButton extends LitElement {
  render() {
    return html` <div style="background: red; font-size: 25px;">
      TEST
      <slot></slot>
    </div>`;
  }
}

window.customElements.define("dalton-button", DaltonButton);

export const DaltonButtonReact = createComponent(
  React,
  "dalton-button",
  DaltonButton,
  {}
);
