import { Container, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from "../index"
import ExchangeCard from './ExchangeCard'
import Loader from "./Loader"


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchExchange = async () => {
      const { data } = await axios.get(`${server}/exchanges`)
      console.log(data);

      setExchanges(data)
      setLoading(false)
    }
    fetchExchange()

  }, [])



  return (
    <div>
      <Container maxW={"container.xl"}>
        {
          Loading ? <Loader /> : <>
            <HStack wrap={"wrap"}>

              {
                exchanges.map((i) =>
                <ExchangeCard  name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank} key={i.id} />
                )
              }
            </HStack>

          </>

        }
      </Container>



    </div>
  )
}

export default Exchanges