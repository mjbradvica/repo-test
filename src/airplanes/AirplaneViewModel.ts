import Airplane from "./Airplane";

export default class AirplaneViewModel implements Airplane {
  manufacturer: string;
  model: string;
  id: string;

  constructor() {
    this.manufacturer = "";
    this.model = "";
    this.id = "";
  }
}
