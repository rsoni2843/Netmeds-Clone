import { Box, Flex, Hide, Image, Link, Show, Text } from '@chakra-ui/react'
import React from 'react'

const logo =
  "https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg";

const company = [
  {
    page:"About Netmeds"
  },
  {
    page:"Customer Speak"
  },
  {
    page:"In the News"
  },
  {
    page:"Career"
  },
  {
    page:"Terms and Condition"
  },
  {
    page:"Privacy Policy"
  },
  {
    page:"Fees and Payment Page"
  },
  {
    page:"Shipping and Delivery Policy"
  },
  {
    page:"Return, Refund and Cancellation Policy"
  },
  {
    page:"Contact"
  },
]
const shopping = [
  {
    page:"Browsing by A-Z"
  },
  {
    page:"Browse by Manufacturers"
  },
  {
    page:"Health Articles"
  },
  {
    page:"Offers/Coupons"
  },
  {
    page:"FAQ's"
  },
]
const social = [
  {
    page:"Patients Alike"
  },
  {
    page:"Facebook"
  },
  {
    page:"Twitter"
  },
  {
    page:"LinkedIn"
  },
  {
    page:"YouTube"
  },
  {
    page:"Refer & Earn"
  },
]

function Footer() {
  return (
    <Box bg={'#fff'}>
    <Box w={'80%'} m={'auto'} p={6} mt={3} borderBottom={'2px solid rgba(11,18,25,.1)'}>
        <Flex>
            <Box w={{md:'16%',sm:'30%'}}>
              <Image src={logo}/>
            </Box>
            <Hide below='sm'>
            <Box textAlign={'left'} ml={10} w={'65%'}>
              <Text color={'grey'} fontWeight={400}>Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.</Text>
            </Box>
            </Hide>
        </Flex>
        
    </Box>
    
    <Flex borderBottom={'1px solid rgba(11,18,25,.1)'} w={'100%'} gap={5} textAlign='left' justifyContent={'center'} m={'auto'} mt={5}>
          <Hide below='sm'>
          <Box  w={'20%'}>
            <Text mb={2} fontWeight={'600'}>COMPANY</Text>
            {company.map((item,i)=>{
              return <Text fontWeight={400} fontSize={12} lineHeight={8} key={i}>{item.page}</Text>
            })}
          </Box>
          </Hide>
          <Hide below='md'>
          <Box  w={'20%'}>
            <Text mb={2} fontWeight={'600'}>SHOPPING</Text>
            {shopping.map((item,i)=>{
              return <Text fontSize={12} lineHeight={8} key={i}>{item.page}</Text>
            })}
          </Box>
          <Box  w={'20%'} >
            <Text mb={2} fontWeight={'600'}>SOCIAL</Text>
            {social.map((item,i)=>{
              return <Text fontSize={12} lineHeight={8} key={i}>{item.page}</Text>
            })}
          </Box>
          </Hide>
          <Box  w={{md:'20%',base:'60%'}}>
            <Text mb={2} fontWeight={'600'}>SUBSCRIBE TO OUR NEWSLETTER</Text>
            <Text fontSize={12}>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</Text>
            <Flex mt={3} w={'100%'} justifyContent={'space-around'}>
              <Link w={'40%'} href='https://play.google.com/store/apps/details?id=com.NetmedsMarketplace.Netmeds&hl=en'>
                <Image  src={'https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png'}/>
              </Link>
              <Link w={'40%'} href='https://apps.apple.com/in/app/netmeds-india-ki-pharmacy/id1011070011'>
                <Image src={'https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png'}/>
              </Link>
              
            </Flex>
          </Box>

          
    </Flex>
      <Hide below='sm'>
      <Flex fontSize={14} w={'84%'} m={'auto'} mt={3} textAlign='left' justifyContent={'space-between'}>
          <Text color={'grey'}>Medicine</Text>              
          <Text color={'grey'}>Wellness</Text>              
          <Text color={'grey'}>Lab Tests</Text>              
          <Text color={'grey'}>Beauty</Text>              
          <Text color={'grey'}>Copyright© 2022. All Rights Reserved.</Text>              
      </Flex>
      </Hide>
      <Show below='sm'>
      <Text p={4} fontSize={10} color={'grey'}>Copyright© 2022. All Rights Reserved.</Text>              
      </Show>
    </Box>
  )
}

export default Footer