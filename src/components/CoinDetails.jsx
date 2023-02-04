import { Badge, Box, Container, HStack, Image, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ErrorComponent from "./ErrorComponent";
import { server } from "../index"
import axios from "axios";
import { useParams } from "react-router-dom";


import Loader from './Loader'




const CoinDetails = () => {
  const [coin, setCoin] = useState({})
  const [Loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState("pkr")

  const currencySymbol = currency === "pkr" ? "Rs: " : currency === "eur" ? "€: " : "$: "

  const param = useParams()

  useEffect(() => {

    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${param.id}`)
        console.log(data)
        setCoin(data)
        setLoading(false)
        // console.log(data);

      } catch (error) {
        setError(true)
        setLoading(false)


      }
    }
    fetchCoin()

  }, [param.id])
  if (error) { return <ErrorComponent /> }


  return (
    <div>

      <Container maxW={"container.xl"}>
        {
          Loading ? <Loader /> : <>
            <Box w={"full"} borderWidth={1}>

            </Box>


            <RadioGroup value={currency} onChange={setCurrency} p={"5"}>
              <HStack spacing={"4"} justifyContent={"flex-start"}>
                <Radio value="pkr">PKR</Radio>
                <Radio value="eur">EUR</Radio>
                <Radio value="usd">USD</Radio>
              </HStack>
            </RadioGroup>
            <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
              <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
                Last Update at {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>
              <Image src={coin.image.large} w={"14"} h={"14"} objectFit={"contain"} />
              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>

                <StatHelpText>
               
                  <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                  {coin.market_data.price_change_percentage_24h}
                </StatHelpText>
              </Stat>


              <Badge fontSize={"1xl"}>
                {`#${coin.market_data.market_cap_rank}`}
              </Badge>
              {/* 5h:50m */}
            </VStack>

          </>
        }

      </Container>

    </div>
  )
}

export default CoinDetails