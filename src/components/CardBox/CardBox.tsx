import React from "react";
import { Card, Box, Typography } from "@material-ui/core/";
import useStyles from "./styles";
import ProductImg from "./../../images/product-img.jpg";
import ShopImg from "./../../images/shop-img.jpg";
import { useHistory } from "react-router-dom";

interface Props {
  index: number;
}
const CardBox: React.FC<Props> = React.memo((props: Props) => {
  const classes = useStyles();
  let history = useHistory();
  const { index } = props;
  const handleSelect = () => {
    if (index === 0) {
      history.push("/shops");
    }
    if (index === 1) {
      history.push("/products");
    }
  };
  return (
    <Card
      elevation={0}
      className={classes.cardWrapper}
      onClick={() => handleSelect()}
    >
      <img
        className={classes.CardImg}
        src={index === 0 ? ShopImg : ProductImg}
        alt="Product"
      />
      <Box py={2} px={2} className={classes.boxContent}>
        <Typography variant="h4" className={classes.cardTitle}>
          {index === 0 ? "Shops" : "Products"}
        </Typography>
        <Typography variant="subtitle1" className={classes.cardSubtitle}>
          Discover {index === 0 ? "brands" : "products"} that are physically
          local to you.
        </Typography>
      </Box>
    </Card>
  );
});
export default CardBox;
