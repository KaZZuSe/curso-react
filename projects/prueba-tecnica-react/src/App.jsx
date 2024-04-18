import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export default function App() {

  const [fact, setFact] = useState()

  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        setFact(data.fact)
      })

  }, [])
  useEffect(() => {
    const threeFirstWords = fact
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(data => {
        const {_id} = data
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })

  }, {fact})
  return (
    <main>
      <h1>Api de un facto de gatito junto a una imagen</h1>

      {fact && <p>{fact}</p>}

      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={fact} />}
    </main>
  )
}


