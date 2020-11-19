import React from "react";
import {
  TextField,
  InputAdornment,
  Popover,
  Container,
} from "@material-ui/core/";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox: React.FC = React.memo(() => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleChange = (event: any) => {
    setAnchorEl(event.currentTarget);
    console.log("-=-======", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Container maxWidth="sm" className={classes.container}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        label=""
        fullWidth={true}
        placeholder="Search..."
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>Hello</div>
      </Popover>
    </Container>
  );
});
export default SearchBox;
