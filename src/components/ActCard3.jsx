import { styled } from "@mui/system";

export default function ActCard3({ act }) {
  const Button = styled("button")({
    background: "linear-gradient(145deg, #0a9cf1, #0883cb);",
    padding: 8,
    borderRadius: "20px",
    boxShadow: "14px 14px 28px #065c8e, -14px -14px 28px #0cc8ff",
    border: "none",
    color: '#f7f7f7'
  });

  const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: "100px",
    
  });


  return (
    <>
      <Container>
        <Button>YOYO</Button>
        <Button>YOYO</Button>
        <Button>YOYO</Button>
        <Button>YOYO</Button>
        <Button>YOYO</Button>
      </Container>
    </>
  );
}
