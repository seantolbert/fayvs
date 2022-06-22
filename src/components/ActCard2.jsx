import { formatDistanceToNow } from "date-fns";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { flexbox, styled, width } from "@mui/system";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

export default function ActCard2({ act }) {
  const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 7,
    color: "#f7f7f7",
  });

  const DateContainer = styled('div')({
    fontSize: '0.7rem'
  })

  const Title = styled("div")({
    fontSize: "2rem",
  });

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          <CardMedia
            component="img"
            image="https://img.youtube.com/vi/jCY6DH8F4oc/hqdefault.jpg"
            sx={{
              maxHeight: "200px",
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={act.color} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Content>
            <div>
              <Title>{act.title}</Title>
              <DateContainer>
                {formatDistanceToNow(new Date(act.date), { addSuffix: true })}
              </DateContainer>
            </div>
            <div>{act.notes}</div>
            <div>{act.completed ? <TaskIcon /> : <AssignmentLateIcon />}</div>
          </Content>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}
