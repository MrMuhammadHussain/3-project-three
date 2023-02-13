import { Box, Image, Text } from '@chakra-ui/react'
import imgSrc from '../assets/btc.png'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div>
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>

        <motion.div style={{
          height: "80vh"
        }}
          animate={{
            translateY: "12px"
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Image w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={imgSrc}
            filter={"grayscale(1)"} />
        </motion.div>
        <Text color={"whiteAlpha.800"}
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          mt={"-14"}>CryptoApp</Text>
      </Box>


    </div>
  )
}

export default Home