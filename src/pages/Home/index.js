import { useState } from 'react'

import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

const Home = () => {
  const [data,setData] = useState(['測試1','測試2','測試3'])

  return <div className="app">
    <Edit />
    <List listData = { data }/>
  </div>
}
export default Home