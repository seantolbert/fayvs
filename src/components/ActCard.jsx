import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

export default function ActCard() {
  return (
    <Grid item xs={4}>
      <Paper elevation={16} square>
        <img
          className="img"
          src="https://img.youtube.com/vi/jCY6DH8F4oc/hqdefault.jpg"
          alt=""
        />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            React + Firebase course
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              size="small"
              value={4.5}
              readOnly
              precision={0.5}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1}>
              (655 Views)
            </Typography>
          </Box>
          <Typography variant="h6" component="h3" marginTop={0}>
            From C $147
          </Typography>
          <Box></Box>
        </Box>
      </Paper>
    </Grid>
  );
}
