import { Box, Button, Container, Typography } from "@mui/material";
import { fontSize } from "@mui/system";

const Landing = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          borderRadius: "15px",
          p: 10,
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>
            Welcome to Fayvs
          </Typography>
          <Typography variant="h6">
            Keep track of your favorite milestones on the road to accomplishing
            your career goals
          </Typography>
        </Box>
        <Box
          sx={{
            padding: 5,
            display: "flex",
            justifyContent: "space-evenly",
            borderRadius: "20px",
          }}
        >
          <Button
            href="/login"
            sx={{
              width: "33%",
              background: "#e3e3e3",
              fontSize: 20,
              p: 5,
              boxShadow: "12px 12px 20px #e3e3e3",
              borderRadius: "20px",
            }}
          >
            Log In
          </Button>
          <Button
            href="/signup"
            sx={{
              width: "33%",
              background: "#e3e3e3",
              fontSize: 20,
              p: 5,
              boxShadow: "12px 12px 20px #e3e3e3",
              borderRadius: "20px",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Landing;
