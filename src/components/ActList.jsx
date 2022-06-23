import ActCard2 from "./ActCard2";
import Timeline from "@mui/lab/Timeline";

export default function ActList({acts}) {

  return (
    <Timeline position="alternate">
      {acts.map((act) => (
        <ActCard2 key={act.id} act={act} />
      ))}
    </Timeline>
  );
}
