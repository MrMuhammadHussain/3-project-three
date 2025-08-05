import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import founderSrc from '../assets/Founder.jpg'


const Footer = () => {
    return (
        <div>
            <Box bgColor={"blackAlpha.800"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16", "8"]}>
                <Stack direction={["column", "row"]}
                    h={"full"}
                    alignItems={"center"}>
                    <VStack w={"full"}
                        alignItems={["center", "flex-start"]}>
                        <Text fontWeight={"bold"}>About Us</Text>
                        <Text fontSize={"sm"}
                            letterSpacing={"widest"}
                            textAlign={["center", "left"]}>I made This React CryptoApp as a Learing Project.</Text>
                    </VStack>
                    <VStack>
                        <Avatar boxSize={"28"}
                            mt={["4", "0"]}
                            src={founderSrc} />
                        <Text>Founder</Text>
                    </VStack>
                </Stack>
            </Box>

        </div>
    )
}

export default Footer