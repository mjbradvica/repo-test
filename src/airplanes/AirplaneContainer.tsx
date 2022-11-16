import useRepository from "../use-repo/UseRepository";
import Airplane from "./Airplane";
import AirplaneIndex from "./AirplaneIndex";

const AirplaneContainer: React.FC = () => {
  const repo = useRepository<Airplane>({ id: "", manufacturer: "", model: "" });

  return <AirplaneIndex entities={repo.entities} addEntity={repo.addEntity} />;
};

export default AirplaneContainer;
