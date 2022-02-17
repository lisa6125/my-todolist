import { useState,useEffect,useRef } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import {API_GET_DATA} from "../../global/constants"

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const {data} = await res.json()
  setData(data)
}
async function fetchSetData(data) {
  const res = await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({data})
  })
}
const Home = () => {
  const [data, setData] = useState([]);
  const submittingSatus = useRef(false); //狀態基準值
  useEffect(() => {
    fetchData(setData)
  }, [])
  
  // 在初始階段，執行渲染會執行，而data在初始階段是[]，故會將資料清空，因而要判斷是否在點擊時執行。
  useEffect(() => {
    if (!submittingSatus.current) {
      return
    }
    fetchSetData(data)
      .then(() => {
      submittingSatus.current = false
    })
  }, [data])

  return (
    <div className="app">
      <Edit add={setData} submittingSatus={submittingSatus}/>
      <List listData={data} deletData={setData} submittingSatus={submittingSatus}/>
    </div>
  );
};
export default Home;
