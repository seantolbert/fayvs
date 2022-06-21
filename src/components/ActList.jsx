import ActCard2 from "./ActCard2";
import Timeline from "@mui/lab/Timeline";

export default function ActList() {
  const acts = [
    {
      title: "Firebase tutorial",
      completed: true,
      color: "success",
      date: "5/4/2022",
      notes:
        "backend paired with react with hosting capabilities, authentication, and realtime database",
      category: "course",
    },
    {
      title: "BlogoRoddy",
      completed: true,
      color: "primary",
      date: "4/15/2022",
      notes: "historical blog",
      category: "Website",
    },
    {
      title: "Achiever",
      completed: false,
      color: "secondary",
      date: "6/20/2022",
      notes: "recording achievments and resources",
      category: "Website",
    },
  ];

  return (
    <Timeline position="alternate">
      {acts.map((act) => (
        <ActCard2 key={act.title} act={act} />
      ))}
    </Timeline>
  );
}
