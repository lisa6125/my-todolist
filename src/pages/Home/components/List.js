import Item from "./item"

const List = ({ listData }) => {
  return <div className="list">
    {
      listData.map(item => <Item key={item}/>)
    }
  </div>
}
export default List