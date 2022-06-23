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
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ActCard2({ act }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 7,
    color: "#f7f7f7",
  });

  const DateContainer = styled("div")({
    fontSize: "0.7rem",
    color: "",
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
        <TimelineContent
        // sx={{ borderLeft: "2px solid lightgrey", transform: "translateX(16px)" }}
        >
          <Content>
            <div>
              <Title>{act.title}</Title>
              <DateContainer>{act.selectedDate}</DateContainer>
            </div>
            <div>{act.notes}</div>
            <div>
              <IconButton
                color="primary"
                rel="noreferrer"
                target="_blank"
                href={act.hyplink}
                sx={{ p: 0 }}
              >
                <LinkIcon />
              </IconButton>
            </div>
          </Content>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}
