import Entity from "../use-repo/Entity";

export default interface Airplane extends Entity {
  manufacturer: string;
  model: string;
}
