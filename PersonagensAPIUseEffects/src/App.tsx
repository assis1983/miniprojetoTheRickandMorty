import {useState, useEffect} from "react"
import './assets/styles.css'
import { locationApi } from './services/location-api'
import { LocationType, MetaData} from './types/location-types'


function App() {
  const [locations, setLocation] = useState<LocationType[]>([])
  const [meta, setMetaData] = useState<Partial<MetaData>>({})
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)

  const loadContent = async (filter: string, page: number) => {
    const response = await locationApi(filter, page)
    setMetaData(response.info)
    setLocation(response.results)
  }

  useEffect(() => {
    loadContent(filter, page)
  }, [filter, page])


  return (
    <>
      <select onChange={event => setFilter(event.target.value)}>
        <option value="">All</option>
        <option value="Planet">Planet</option>
        <option value="Cluster">Cluster</option>
        <option value="Space station">Space station</option>
        <option value="Microverse">Microverse</option>
        <option value="TV">TV</option>
        <option value="Resort">Resort</option>
        <option value="Fantasy town">Fantasy town</option>
      </select>

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Dimensão</th>
            <th>Número de Habitantes</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(location => (
            <tr key={location.id}>
              <td>{location.id}</td>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
              <td>{location.residents.length}</td>
            </tr>
          )) }
        </tbody>
      </table>
      
      {!!meta.prev && <button onClick={() => setPage(page - 1)}>Anterior</button>}
      {!!meta.next && <button onClick={() => setPage(page + 1)}>Próximo</button>}

      <br/><br/><br/>
    </>
  )
}

export default App
