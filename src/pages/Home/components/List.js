import Item from "./item"

const arr = [1, 2, 3]

const List = () => {
  return <div>
    {
      arr.map((item)=><Item/>)
    }
  </div>
}
export default List