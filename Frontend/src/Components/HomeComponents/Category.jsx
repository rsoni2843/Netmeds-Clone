import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Hide, Image, Text } from "@chakra-ui/react";
import { getHome } from "../../API/api";

import styles from "../Styles/navbar.module.css";

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getHome().then((res) => {
      // console.log(res)
      setCategory(res.data.data.details.list);
    });
  }, []);

  return (
    <Box>
      {/* #5ba41c */}
      <Hide below={"md"}>
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
            lg: "repeat(5,1fr)",
          }}
        >
          {category.map((item, i) => {
            return (
              <GridItem
                minH={"100%"}
                p={{ base: 0, sm: 2.5 }}
                rounded={"md"}
                boxShadow="base"
                key={i}
              >
                <Flex className={styles.categoryContainerBox}>
                  <Image h={{ base: 12, sm: 16 }} src={item.icon} />
                  <Box>
                    <Text
                      fontSize={{ base: "9px", sm: "14px" }}
                      className={styles.categoryContainerBoxItem1}
                    >
                      {item.subtext}
                    </Text>
                    <Text
                      fontSize={{ base: "9px", sm: "12px" }}
                      className={styles.categoryContainerBoxItem2}
                    >
                      {item.title}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Hide>
    </Box>
  );
}

export default Category;
