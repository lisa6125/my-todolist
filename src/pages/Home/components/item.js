const Item = ({ id,note, date, time, deletData }) => {
  function deleteItem() {
    deletData(function (pre) {
      return pre.filter(item => item.id !== id)
    })
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
