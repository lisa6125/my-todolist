import { useState,useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);
  // useEffect 外的 function 是每次執行會做的事情，內的是在渲染完成後，在下一次渲染前會做的事情
  useEffect(() => {
    return () => {
      
    }
  },[data])
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deletData={setData}/>
    </div>
  );
};
export default Home;
