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
import { clearTimeout } from "timers";

const SearchBox: React.FC = React.memo(() => {
  const classes = useStyles();
  const searchOption = ["Shops", "Products"];
  const [option, setOption] = React.useState("Shops");
  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState("");
  const handleChangeOption = (option: string) => {
    setOption(option);
  };
  const validCheck = () => true;
  const handleChange = (e: any) => {
    let timeout: any;
    clearTimeout(timeout);
    const v = e.target.value;
    setValue(v);
    timeout = setTimeout(() => {
      if (validCheck()) {
        setIsVisible(true);
      }
    }, 1000);
  };
  const handleClear = () => {
    setValue("");
    setIsVisible(false);
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
        value={value}
        fullWidth={true}
        placeholder="Search..."
        onChange={(e: any) => handleChange(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <ClearIcon
                className={classes.clearIcon}
                onClick={() => handleClear()}
              />
            </InputAdornment>
          ),
        }}
      />
      {isVisible && (
        <div className={classes.searchWrapper}>
          <div className={classes.searchContent}>
            <div className={classes.searchNoFound}>No results found!</div>
          </div>
        </div>
      )}
    </Container>
  );
});
export default SearchBox;
