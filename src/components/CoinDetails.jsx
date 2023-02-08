import { Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ErrorComponent from "./ErrorComponent";
import { server } from "../index"
import axios from "axios";
import { useParams } from "react-router-dom";


import Loader from './Loader'
import CoinChart from "./CoinChart";




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
        const {  } = await axios.get(`${server}/coins/${param.id}`)

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
            <Box w={"full"}  borderWidth={1} p={"8"}>
              <CoinChart currency={currency} />
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
              <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />

              <Box w={"full"} p={"4"} >
                <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                <Item title={"Circulate Supply"} value={coin.market_data.circulating_supply} />
                <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />

              </Box>
            </VStack>

          </>
        }

      </Container>

    </div>
  )
}

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"} opacity={"0.7"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
)
const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
)

export default CoinDetails