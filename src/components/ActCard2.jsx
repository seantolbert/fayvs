// hooks
import { useState } from "react";

// date fns formatter
import { formatDistanceToNow } from "date-fns";

// firebase functions
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// local components
import UpdateForm from "./UpdateForm";

// mui
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "@mui/system/styled";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import Box from "@mui/material/Box";

export default function ActCard2({ act, showDelete }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 7,
  });

  const DateContainer = styled("div")({
    fontSize: "0.7rem",
  });

  const Title = styled("div")({
    fontSize: "2rem",
  });

  const handleDelete = async (id) => {
    const docRef = doc(db, "acts", id);
    await deleteDoc(docRef);
  };

  const handleUpdate = async (id) => {
    setShowUpdateForm(true);
  };

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          {/* showing the delete and update functionality */}
          {showDelete && (
            <Box>
              <IconButton
                label="Delete"
                onClick={() => handleDelete(act.id)}
                color="error"
              >
                <ClearIcon />
              </IconButton>
              <br />
              <IconButton onClick={() => handleUpdate(act.id)} color="success">
                <ChangeHistoryIcon />
              </IconButton>
            </Box>
          )}
        </TimelineOppositeContent>
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
            <div>
              <Title>{act.title}</Title>
              <DateContainer>
                {formatDistanceToNow(new Date(act.selectedDate), {
                  addSuffix: true,
                })}
              </DateContainer>
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

      {/* only when show delete AND update form are clicked will the update form show up */}
      {showDelete && showUpdateForm && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>

          <UpdateForm
            showUpdateForm={showUpdateForm}
            setShowUpdateForm={setShowUpdateForm}
            act={act}
          />
        </Box>
      )}
    </>
  );
}
