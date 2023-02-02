import { Container, HStack } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from "../index"
import ErrorComponent from './ErrorComponent'
import ExchangeCard from './ExchangeCard'
import Loader from "./Loader"


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [Loading, setLoading] = useState(true)
  const [error , setError] = useState(false)

  useEffect(() => {

    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoading(false)

      } catch (error) {
        setError(true)
        setLoading(false)
        

      }
    }
    fetchExchanges()

  }, [])
  if(error){
    return <ErrorComponent />
  }



  return (
    <div >
      <Container maxW={"container.xl"}>
        {
          Loading ? <Loader /> : <>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

              {
                exchanges.map((i) =>
                  <ExchangeCard name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank} key={i.id} />
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