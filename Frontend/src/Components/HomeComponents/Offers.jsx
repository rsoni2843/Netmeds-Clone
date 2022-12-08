import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import styles from "../Styles/navbar.module.css";
import { paymentOfferAPI } from "./data";
function Offers() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  return (
    <Box className={styles.newComponent}>
      <Text className={styles.leftHeading}>Payment Partner Offers</Text>
      <Grid
        gap={3}
        className={styles.categoryContainer}
        templateRows={{
          base: "repeat(1,1fr)",
          sm: "repeat(auto)",
          lg: "repeat(auto)",
        }}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
      >
        {paymentOfferAPI.map((item, i) => {
          return (
            <GridItem key={i}>
              <Image src={item.src} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Offers;
