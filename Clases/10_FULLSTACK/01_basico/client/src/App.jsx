import { useEffect, useState } from "react"
import { getPersonas } from "./api/personasServices"

const App = () => {

  const [datos, setDatos] = useState('')

  useEffect(() => {
    const fetchData = async () => {
        const response = await getPersonas()
        console.log(response)
        setDatos(response.ok)
    }
    fetchData()
  }, [])

  return (
    <div className="container mt-4">
      <h1>{datos}</h1>
    </div>
  )
}

export default App