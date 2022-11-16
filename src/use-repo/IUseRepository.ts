import IAddEntity from "./IAddEntity";
import IGetAllEntities from "./IGetAllEntities";
import IGetById from "./IGetById";

export default interface IUseRepository<T> extends IAddEntity<T>, IGetAllEntities<T>, IGetById<T> {}
