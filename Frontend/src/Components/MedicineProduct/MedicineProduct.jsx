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
  const dispatch = useDispatch();
  const params = useParams();
  const { medProd, prodImg } = useSelector((store) => store.listData);

  React.useEffect(() => {
    dispatch(getProductMedicine(params.id));
  }, [params.id]);
  const image = { ...medProd.damImages };
  console.log(medProd);

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
            src={image[0]?.url}
          />
        </Box>
        <Box w={{ md: "55%", base: "100%" }}>
          <Box mt={12} lineHeight={{ lg: "7" }}>
            <Text mt={2} fontWeight={300} fontSize={{ md: "2xl", base: "md" }}>
              {medProd.name}
            </Text>
            <Hide below={"md"}>
              <Stack mt={4} direction="row">
                <Badge colorScheme="green">
                  {{ ...medProd?.therapies }[0]?.therapy_name}
                </Badge>
                <Badge colorScheme="purple">{medProd.packform}</Badge>
              </Stack>
            </Hide>
            <Text fontSize={13} mt={2} mb={4}>
              {medProd?.productTierAttributes?.text}
            </Text>
            <hr />
            <Flex mt={4}>
              <Text fontSize={18} fontWeight={600} color={"#6f7284"}>
                Best price*
              </Text>
              <Text color={"#ef4281"} ml={1} fontWeight={600} fontSize={20}>
                ₹ {medProd?.salePriceDecimal}
              </Text>
            </Flex>
            <Flex mt={4} fontSize={14} color={"#6f7284"} fontWeight={400}>
              <Text>MRP </Text>
              <Text ml={2} textDecoration={"line-through"}>
                {" "}
                ₹{medProd?.mrpDecimal}
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
              <Text>Mkt: {medProd?.manufacturer}</Text>
              <Text>Country of Origin: India</Text>
              <Text>
                Delivery charges if applicable will be applied at checkout
              </Text>
            </Box>
            <Text>{medProd.measurementUnit}</Text>
            <Box mt={{ base: "10px", md: "40px" }}>
              <Button
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
