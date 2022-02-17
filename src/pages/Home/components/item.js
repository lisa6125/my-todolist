const Item = ({ id,note, date, time, deletData,submittingSatus }) => {
  function deleteItem() {
    deletData(function (pre) {
      return pre.filter(item => item.id !== id)
    })
    submittingSatus.current = true
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
  );
};
export default Item;
