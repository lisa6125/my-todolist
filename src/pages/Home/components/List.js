import Item from "./item";

const List = ({ listData,deletData,submittingSatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item; //note = "預設" 解構寫法可以給定預設值，避免undefind的錯誤
        return <Item id={id} note={note} date={date} time={time} key={id} deletData={deletData} submittingSatus={submittingSatus}/>;
      })}
    </div>
  );
};
export default List;
