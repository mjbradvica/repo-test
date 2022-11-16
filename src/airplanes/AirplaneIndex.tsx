import { useEffect } from "react";
import IAddEntity from "../use-repo/IAddEntity";
import IGetAllEntities from "../use-repo/IGetAllEntities";
import Airplane from "./Airplane";

const AirplaneIndex: React.FC<AirplaneIndexProperties> = ({ entities, addEntity }) => {
  const handleAddAirplane = (): void => {
    addEntity({ id: Math.random().toString(), manufacturer: "Boeing", model: "737-8" });
  };

  const meh = entities.map((plane) => plane.model);

  useEffect(() => {
    const bleh = entities.map((x) => x.id);
  }, [entities]);

  return (
    <>
      <div>
        {entities.map((plane) => {
          return (
            <p key={plane.id}>
              {plane.manufacturer} - {plane.model}
            </p>
          );
        })}
      </div>
      <div>
        <button onClick={handleAddAirplane}>Add Airplane</button>
      </div>
    </>
  );
};

interface AirplaneIndexProperties extends IGetAllEntities<Airplane>, IAddEntity<Airplane> {}

export default AirplaneIndex;
