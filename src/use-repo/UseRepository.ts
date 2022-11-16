import { useState } from "react";
import Entity from "./Entity";
import IUseRepository from "./IUseRepository";

export default function useRepository<T extends Entity>(defaultEntity: T): IUseRepository<T> {
  const [entities, setEntities] = useState<Array<T>>([]);

  const addEntity = (entity: T): void => {
    setEntities([...entities, entity]);
  };

  const getById = (id: string): T => {
    return entities.find((entity) => entity.id === id) ?? defaultEntity;
  };

  return {
    addEntity,
    entities,
    getById,
  };
}
