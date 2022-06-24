import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      sx={{ textDecoration: "none", textAlign: "center", mt: "5%" }}
      color="primary"
    >
      <Link
        href="https://tolbert.me/"
        rel="noopener"
        target="_blank"
        underline="none"
      >
        Tolbert & Co
      </Link>{" "}
      &#169; All Rights Reserved
    </Box>
  );
}
