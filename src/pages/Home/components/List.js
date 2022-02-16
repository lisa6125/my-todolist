import Item from "./item"

const List = ({ listData }) => {
  return <div className="list">
    {
      listData.map((item) => { 
        const { note, date, time } = item //note = "預設" 解構寫法可以給定預設值，避免undefind的錯誤
        return <Item note={note} date={date} time={time} />
      })
    }
  </div>
}
export default List