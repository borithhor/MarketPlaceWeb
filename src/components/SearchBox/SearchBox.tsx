import React from "react";
import {
  TextField,
  InputAdornment,
  Container,
  Typography,
  Box,
} from "@material-ui/core/";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const SearchBox: React.FC = React.memo(() => {
  const classes = useStyles();
  const searchOption = ["Shops", "Products"];
  const [option, setOption] = React.useState("Shops");
  const handleChangeOption = (option: string) => {
    setOption(option);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.searchOptionWrapper}>
        {searchOption.map((text, index) => (
          <Box
            key={index}
            mx={index === 1 ? 2 : 0}
            onClick={() => handleChangeOption(text)}
            borderBottom={text === option ? 2 : 0}
            className={
              text === option ? classes.optionBorderActive : classes.boxOption
            }
          >
            <Typography>{text}</Typography>
          </Box>
        ))}
      </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        label=""
        fullWidth={true}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <ClearIcon className={classes.clearIcon} />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.searchWrapper}>
        <div className={classes.searchContent}>
          <div className={classes.searchNoFound}>No results found!</div>
        </div>
      </div>
    </Container>
  );
});
export default SearchBox;
