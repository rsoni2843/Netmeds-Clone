import { Box, Flex, Hide, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from '../Styles/navbar.module.css' ; 

function LoginCart() {
  return (
    <>
        <Flex  fontSize={{base:'15px',sm:'12px',md:'16px'}} w={{ base: "95%", sm: "38%" }} className={styles.b3}>
            
            <Link to={"/cart"}>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <Icon as={FaShoppingCart} />
                <Hide below={'md'}>
                <Text>Cart</Text>
                </Hide>
              </Flex>
            </Link>
            <Link to={"/login"}>
              <Flex className={styles.b3} >
                <Icon as={FaUserCircle} />
                <Hide below={'md'}>
                    <Text>Sign In / Sign Up</Text>
                </Hide>
              </Flex>
            </Link>
        </Flex>
    </>
  )
}

export default LoginCart