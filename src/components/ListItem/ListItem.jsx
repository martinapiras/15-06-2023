import "./index.css";

const ListItem = ({ data }) => {
  const isCompleted = data.completed;
  const isUserIdEven = !!(data.userId % 2 === 0);

  const onHandleClick = (e) => {
    e.target.classList.toggle("completed");
  };

  return (
    <p
      className={`listItem ${isUserIdEven ? "evenUser" : "oddUser"} ${
        isCompleted ? "completed" : ""
      }`}
      onClick={onHandleClick}
    >
      {`${isCompleted ? "✅" : "❌"} ${data.title}`}
    </p>
  );
};

export default ListItem;
