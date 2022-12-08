import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductMedicine } from "../../Redux/MedicineData/medicine.action";
import {
  Badge,
  Box,
  Button,
  Flex,
  Hide,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const MedicineProduct = () => {
  const item = JSON.parse(localStorage.getItem("seeProduct"));
  console.log(item);
  const dispatch = useDispatch();
  const params = useParams();

  console.log(params);

  return (
    <>
      <Stack
        py={10}
        m={"auto"}
        textAlign={"left"}
        direction={{ base: "column", md: "row" }}
        w={"96%"}
        justifyContent={"space-between"}
        mt={4}
        bg="white"
      >
        <Box w={{ md: "40%", base: "90%" }}>
          <Image
            w={"70%"}
            maxH={{ md: "600px" }}
            m={"auto"}
            src={`https://res.sastasundar.com/incom/images/product/thumb/${item[11]}`}
          />
        </Box>
        <Box w={{ md: "55%", base: "100%" }}>
          <Box mt={12} lineHeight={{ lg: "7" }}>
            <Text mt={2} fontWeight={300} fontSize={{ md: "2xl", base: "md" }}>
              {item[9]}
            </Text>
            <Hide below={"md"}>
              <Stack mt={4} direction="row">
                {/* <Badge colorScheme="green">
                  {{ ...medProd?.therapies }[0]?.therapy_name}
                </Badge> */}
                <Badge colorScheme="purple">{item[3]}</Badge>
              </Stack>
            </Hide>
            <Text textTransform="capitalize" fontSize={13} mt={2} mb={4}>
              {item[31]}
            </Text>
            <hr />
            <Flex mt={4}>
              <Text fontSize={18} fontWeight={600} color={"#6f7284"}>
                Best price*
              </Text>
              <Text color={"#ef4281"} ml={1} fontWeight={600} fontSize={20}>
                ₹ {item[63]}
              </Text>
            </Flex>
            <Flex mt={4} fontSize={14} color={"#6f7284"} fontWeight={400}>
              <Text>MRP </Text>
              <Text ml={2} textDecoration={"line-through"}>
                {" "}
                ₹{item[68]}
              </Text>
            </Flex>
            <Box
              fontStyle={"italic"}
              fontWeight={400}
              color={"#6f7284"}
              fontSize={12}
              mt={4}
            >
              <Text>
                Get the best price on this product on orders above Rs 1499
              </Text>
              <Text>Mkt: {item[1]}</Text>
              <Text>Country of Origin: India</Text>
              <Text>
                Delivery charges if applicable will be applied at checkout
              </Text>
            </Box>
            <Text>{item[32]}</Text>
            <Box mt={{ base: "10px", md: "40px" }}>
              <Button
                onClick={() =>
                  localStorage.setItem("cartCount", JSON.stringify(item))
                }
                m={"auto"}
                color={"white"}
                _hover={{ bg: "teal.400" }}
                w={"100%"}
                bg={"#24aeb1"}
                size={{ base: "sm", md: "md" }}
              >
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default MedicineProduct;
