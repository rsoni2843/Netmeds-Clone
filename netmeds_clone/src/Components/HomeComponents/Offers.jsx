import React, { useEffect, useState } from "react";
import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { getOffer } from "../../API/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../Styles/navbar.module.css";
function Offers() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    getOffer().then((res) => {
      setOffer(res.data.data.banners);
    });
  }, []);
  // console.log(offer)

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
        {offer.slice(0, 6).map((item) => {
          return (
            <GridItem key={item.id}>
              <Image src={item.image} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Offers;
