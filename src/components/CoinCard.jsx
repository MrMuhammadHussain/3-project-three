import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ id, name, image, symbol, price, currencySymbol }) => {
    return (
        <div >
            <Link to={`/coin/${id}`}>
                <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{
                    "&:hover": { transform: "scale(1.1)" }
                }}>
                    <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={name} />
                    <Heading size={"md"} textTransform={"uppercase"} noOfLines={1} >{symbol}</Heading>
                    <Text textTransform={"capitalize"} noOfLines={1}>{name}</Text>
                    <Text noOfLines={1}>{price ? `${currencySymbol}${price}`:"NA"}</Text>

                </VStack>


            </Link>

        </div>
    )
}

export default CoinCard