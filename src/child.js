import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api color = "purple";
  @api value;
  @api title;
  @api footer;
  @api tendence;

  renderedCallback() {
    let box = this.template.querySelector("div .box");

    if (box) {
      box.style.display = "block";
      box.style.opacity = "1";
      box.style.transform = "translateY(0px)";
      box.style.transition = "all 250ms ease";
      box.classList.add(this.color);
    }
  }
}
