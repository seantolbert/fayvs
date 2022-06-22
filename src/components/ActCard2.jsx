import { formatDistanceToNow } from "date-fns";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { styled } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LinkIcon from "@mui/icons-material/Link";

export default function ActCard2({ act }) {
  const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 7,
    color: "#f7f7f7",
  });

  const DateContainer = styled("div")({
    fontSize: "0.7rem",
    color: ''
  });

  const Title = styled("div")({
    fontSize: "2rem",
  });

  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {act.category === "Course" ? (
              <AccountBalanceIcon />
            ) : act.category === "App" ? (
              <LanguageIcon />
            ) : act.category === "Repo" ? (
              <GitHubIcon />
            ) : act.category === "Post" ? (
              <AccessibilityIcon />
            ) : act.category === "Resource" ? (
              <BuildIcon />
            ) : (
              ""
            )}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Content>
            {/* <CompletionContainer>
              {act.completed ? <TaskIcon /> : <AssignmentLateIcon />}
            </CompletionContainer> */}
            <div>
              <Title>{act.title}</Title>
              <DateContainer>
                {formatDistanceToNow(new Date(act.selectedDate), { addSuffix: true })}
              </DateContainer>
            </div>
            <div>{act.notes}</div>
            <div>
              <a rel="noreferrer" target="_blank" href={act.hyplink}>
                <LinkIcon />
              </a>
            </div>
          </Content>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}
