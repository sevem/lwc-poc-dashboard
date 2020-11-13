import { LightningElement, api } from "lwc";

export default class Arrow extends LightningElement {
  @api svgWidth = "50px";
  @api svgHeight = "50px";
  @api upColor = "#66B92E";
  @api noChangeColor = "#d9ffdf";
  @api downColor = "#bf0201";
  @api tendence = 0;
  @api rotation = 0;

  get color() {
    if (this.tendence > 0) {
      return this.upColor;
    } else if (this.tendence < 0) {
      return this.downColor;
    }

    return this.noChangeColor;
  }

  get rotate() {
    let rotate = this.rotation;

    if (this.tendence) {
      if (this.tendence > 0) {
        rotate = 360 + this.tendence * -1;
      } else {
        rotate = this.tendence * -1;
      }
    }

    return "rotate(" + rotate + " 10 10)";
  }
}
