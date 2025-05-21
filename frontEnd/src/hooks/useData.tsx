import { useEffect, useState } from 'react'
import { useAxios } from './useAxios'

const useData = () => {
  const axios = useAxios()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/project/projects').then((p) => setData(p.data?.data))
  }, [axios])

  return data
}

export default useData
