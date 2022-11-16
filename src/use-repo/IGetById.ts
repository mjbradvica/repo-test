export default interface IGetById<T> {
  getById: (id: string) => T;
}
