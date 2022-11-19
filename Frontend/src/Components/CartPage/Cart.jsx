import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import React from "react";
import { useSelector } from "react-redux";

const data = {
  productId: 22736,
  ucode: "183157",
  name: "Volini Pain Relief Gel Tube Of 75 G",
  slug: "volini-pain-relief-gel-tube-of-75-g-22736",
  manufacturer: "VOLINI",
  productType: 2,
  measurementUnit: "75g Cream in Tube",
  category: {
    id: null,
    name: null,
  },
  packform: null,
  isRxRequired: 0,
  availabilityLevel: 1,
  flagId: 1,
  isRefrigerated: false,
  listPrice: "245",
  listPriceDecimal: "245.00",
  mrpDecimal: "245.00",
  salePrice: "208.25",
  salePriceDecimal: "208.25",
  discount: "36.75",
  discountDecimal: "36.75",
  discountPercent: "15",
  medicineStatusFlags: {
    isLive: true,
    isBanned: false,
    isDiscontinued: false,
    isUndeliverable: false,
  },
  sellerId: null,
  swappedBy: null,
  availableQuantity: "1000",
  isAvailable: true,
  variantValues: [
    {
      key: "Quantity",
      header: "Quantity",
    },
  ],
  variants: [
    {
      id: 22736,
      productId: 22736,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 75 G",
      ucode: "183157",
      measurementUnit: "75g Cream in Tube",
      mrpDecimal: "245.00",
      salePriceDecimal: "208.25",
      discountDecimal: "36.75",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-75-g-22736",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "75 G",
      isActive: true,
      isRefrigerated: false,
    },
    {
      id: 22730,
      productId: 22730,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 30 G",
      ucode: "183150",
      measurementUnit: "30g Cream in Tube",
      mrpDecimal: "130.00",
      salePriceDecimal: "110.50",
      discountDecimal: "19.50",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-30-g-22730",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "30 G",
      isActive: false,
      isRefrigerated: false,
    },
    {
      id: 22812,
      productId: 22812,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 15 G",
      ucode: "193648",
      measurementUnit: "15g Cream in Tube",
      mrpDecimal: "70.00",
      salePriceDecimal: "59.50",
      discountDecimal: "10.50",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-15-g-22812",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "15 G",
      isActive: false,
      isRefrigerated: false,
    },
    {
      id: 23023,
      productId: 23023,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 10 G",
      ucode: "254835",
      measurementUnit: "10g Cream in Tube",
      mrpDecimal: "37.00",
      salePriceDecimal: "31.45",
      discountDecimal: "5.55",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-10-g-23023",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "10 G",
      isActive: false,
      isRefrigerated: false,
    },
    {
      id: 23114,
      productId: 23114,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 100 G",
      ucode: "I00392",
      measurementUnit: "100g Cream in Tube",
      mrpDecimal: "310.00",
      salePriceDecimal: "263.50",
      discountDecimal: "46.50",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-100-g-23114",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "100 G",
      isActive: false,
      isRefrigerated: false,
    },
    {
      id: 22731,
      productId: 22731,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 50 G",
      ucode: "183151",
      measurementUnit: "50g Cream in Tube",
      mrpDecimal: "190.00",
      salePriceDecimal: "161.50",
      discountDecimal: "28.50",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-50-g-22731",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 5,
        text: "Guaranteed Delivery",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: true,
        showVariantsInBottomSheet: false,
        notifyMe: false,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "50 G",
      isActive: false,
      isRefrigerated: false,
    },
    {
      id: 230744,
      productId: 230744,
      productType: 2,
      name: "Volini Pain Relief Gel Tube Of 4 G",
      ucode: "Q40892",
      measurementUnit: "4g Cream in Tube",
      mrpDecimal: "10.00",
      salePriceDecimal: "8.50",
      discountDecimal: "1.50",
      discountPercent: "15",
      slug: "volini-pain-relief-gel-tube-of-4-g-230744",
      isRxRequired: 0,
      packform: "TUBE",
      productTierAttributes: {
        type: 2,
        text: "Out of Stock",
      },
      productSubstitutionAttributes: null,
      productAvailabilityFlags: {
        isAvailable: false,
        showVariantsInBottomSheet: true,
        notifyMe: true,
      },
      maxQuantity: 20,
      productVolume: 0,
      similarProductsAttributes: null,
      Quantity: "4 G",
      isActive: false,
      isRefrigerated: false,
    },
  ],
  returnDays: 0,
  isChronic: false,
  damImages: [
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-2-1661846580.jpg",
      face: "front",
      sequence: "2",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.1-1661846530.jpg",
      face: "side",
      sequence: "6.1",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.2-1661846731.jpg",
      face: "side",
      sequence: "6.2",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.3-1661846734.jpg",
      face: "side",
      sequence: "6.3",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.4-1661846657.jpg",
      face: "side",
      sequence: "6.4",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.5-1661846730.jpg",
      face: "side",
      sequence: "6.5",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.6-1661846482.jpg",
      face: "side",
      sequence: "6.6",
    },
    {
      url: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-7-1661846654.jpg",
      face: "back",
      sequence: "7",
    },
  ],
  shippingText: "Avail upto 60% discount on Healthcare Items",
  substituteGroupId: null,
  salesTrendCategory: "super_fast",
  procurementChannel: "MEDICINE",
  therapies: [
    {
      therapy_id: 356,
      therapy_name: "ANALGESIC AND ANTIBIOTIC",
    },
  ],
  labelDetails: {
    label: null,
    code: 0,
  },
  ratingDetails: {
    value: 4.477019,
    count: 805,
  },
  isHMSProduct: false,
  listingId: null,
  vertical: 2,
  productTierAttributes: {
    type: 5,
    text: "Guaranteed Delivery",
  },
  productSubstitutionAttributes: null,
  productAvailabilityFlags: {
    isAvailable: true,
    showVariantsInBottomSheet: false,
    notifyMe: false,
  },
  maxQuantity: 20,
  productVolume: 96.13,
  similarProductsAttributes: null,
  images: null,
  consumerBrandId: 1195,
  consumerBrandName: "VOLINI",
};

const Cart = () => {
  const { cartCount } = useSelector((store) => store.listData);
  console.log(cartCount);
  return (
    <>
      <Box
        textAlign={"left"}
        w={{ base: "96%", md: "70%" }}
        m={"auto"}
        mt={4}
        p={4}
        bg={"white"}
      >
        <Text className={styles.leftHeading}>Order Summary</Text>
        <Stack m={"auto"} mt={4} direction={{ base: "column", md: "row" }}>
          <Flex w={{ base: "98%", md: "70%" }} gap={4} border={"1px"}>
            <Box w={"20%"} border={"1px"}>
              <Image w={80} src={data?.damImages[0]?.url} />
            </Box>
            <Box
              fontStyle={"italic"}
              fontWeight={400}
              color={"#6f7284"}
              fontSize={12}
              w={"80%"}
              border={"1px"}
            >
              <Text fontStyle={"normal"} color={"black"} fontSize={"md"}>
                {data?.name}
              </Text>
              <Text mt={2}>{data?.measurementUnit}</Text>
              <Text>{data?.consumerBrandName}</Text>
              <Text
                mt={3}
                fontStyle={"normal"}
                fontSize={16}
                fontWeight={600}
                color={"#ef4281"}
              >
                Rs.{data?.salePriceDecimal}
              </Text>
            </Box>
          </Flex>
          <Box p={3} w={{ base: "98%", md: "30%" }} border={"1px"}>
            <Text>Payment Details</Text>
            <Flex mt={4} justifyContent={"space-between"}>
              <Text>MRP Total: </Text>
              <Text>{data?.salePriceDecimal}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>MRP Total: </Text>
              <Text>{data?.salePriceDecimal}</Text>
            </Flex>
            <Box mt={4} align={"center"}>
              <Button
                color={"white"}
                _hover={{ bg: "teal.400" }}
                w={"100%"}
                bg={"#24aeb1"}
                fontSize={12}
              >
                Proceed
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
