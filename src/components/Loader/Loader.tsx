import React from "react";
import SyncIcon from "@material-ui/icons/Sync";
import useStyles from "./styles";
export const LoaderRotate = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderRotate}>
      <span>
        <SyncIcon />
      </span>
      Loading footage…
    </div>
  );
};
