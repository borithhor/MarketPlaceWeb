import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@material-ui/core/";

interface Props {
  items: any;
}
const ShopListItems: React.FC<Props> = React.memo((props: Props) => {
  const country = "Canada";
  const state = "Otawa";

  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary="Store Name"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    {country}, {state}
                  </Typography>
                </React.Fragment>
              }
            />
            <Button variant="outlined" size="small" color="primary" href="#">
              View
            </Button>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
});
export default ShopListItems;
