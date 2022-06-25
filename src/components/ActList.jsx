// components
import ActCard2 from "./ActCard2";

// mui
import Timeline from "@mui/lab/Timeline";

export default function ActList({ acts, showDelete }) {
  return (
    <Timeline position="alternate">
      {acts
        .sort((a, b) => {
          return (
            new Date(b.selectedDate).getTime() -
            new Date(a.selectedDate).getTime()
          );
        })
        .map((act) => (
          <ActCard2 key={act.id} act={act} showDelete={showDelete} />
        ))}
    </Timeline>
  );
}
