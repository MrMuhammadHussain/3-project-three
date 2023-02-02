import { Box,  Spinner, VStack } from '@chakra-ui/react'
import React from 'react'
// import gif from "../assets/coin.gif"

const Loader = () => {
  return (
    <div>
      {/* 1st loader */}
      {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "19%" }}> <Image src={gif} w={"300px"} h={"300px"} objectFit={"contain"} />
      </div> */}
      {/* ChakraUI Loader */}
      <VStack h={"90vh"} justifyContent={"center"} >
        <Box transform={"scale(3.9)"}>
          <Spinner size={"xl"} />
        </Box>
      
      </VStack>




    </div>
  )
}

export default Loader