import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Item extends LightningElement {
  @api color = "purple";
  @api value;
  @api title;
  @api footer;

  get itemClass() {
    return "card " + this.color;
  }
}
