// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const filterList = ["All", "Repo", "App", "Post", "Course", "Resource"];

export default function ActFilter({ changeFilter }) {

  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <>
      <Box>
          {filterList.map((f) => (
            <Button sx={{ mx: 0 }} key={f} onClick={() => handleClick(f)}>
              {f}
            </Button>
          ))}
      </Box>
    </>
  );
}
