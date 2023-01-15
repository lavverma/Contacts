const MessageList = ({ messageList }) => {
  return (
    <div className="card mt-5 w-50 shadow-lg">
      <div
        className="card-header fw-bolder"
        style={{ backgroundColor: "#A9C26D" }}
      >
        <b>Messages</b>
      </div>
      <ol
        className="list-group list-group-flush overflow-scroll"
        style={{ maxHeight: "200px" }}
      >
        {messageList.map((i) => (
          <li className="list-group-item" key={i._id}>
            <p className="card-text">
              <i>
                <b>{`${i.name}`}</b>
              </i>
            </p>
            OTP sent :- <i>{`${i.otp}`}</i>
            <i className="float-end" style={{ fontSize: "12px" }}>
              {i.date} - {i.time}
            </i>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MessageList;
