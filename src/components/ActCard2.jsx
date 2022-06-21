import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Check } from "@mui/icons-material";

export default function ActCard2({ act }) {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {act.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={act.color} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card elevation={20}>
            <CardHeader title={act.title} />
            <CardContent>{act.notes}</CardContent>
            {act.completed ? <CheckIcon/> : <NewReleasesIcon />}
            {act.category}
          </Card>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}
