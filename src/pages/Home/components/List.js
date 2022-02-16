import Item from "./item"

const arr = ["吃飯", "睡覺", "打咚咚"]

const List = () => {
  return <div>
    {
      arr.map((item) => <div>{item}</div>)
    }
  </div>
}
export default List