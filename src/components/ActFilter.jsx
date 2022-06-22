import { Button } from "@mui/material";

const filterList = ["All", "Repo", "App", "Post", "Course", "Resource"];

export default function ActFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div>
      <nav>
        {filterList.map((f) => (
          <Button key={f} onClick={() => handleClick(f)}>
            {f}
          </Button>
        ))}
      </nav>
    </div>
  );
}
