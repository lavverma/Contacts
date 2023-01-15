import { Link, useNavigate } from "react-router-dom";

const ContactList = ({ contactList }) => {
  const navigate = useNavigate();
  const addContact = () => {
    navigate("/addContact");
  };
  return (
    <div className="card mt-2 w-50 shadow-lg">
      <div
        className="card-header fw-bolder"
        style={{ backgroundColor: "#A9C26D" }}
      >
        <b>Contacts</b>
        <button
          className="btn btn-primary btn-sm float-end"
          onClick={() => addContact()}
        >
          Create Contact
        </button>
      </div>
      <ol
        className="list-group list-group-flush overflow-scroll "
        style={{ maxHeight: "150px" }}
      >
        {contactList.map((i, index) => (
          <Link
            className="text-decoration-none fw-bold"
            to={`/sendMessage/${i._id}`}
            key={i._id}
          >
            <li className="list-group-item ">
              {`${index + 1}. ${i.fname} ${i.lname}`}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default ContactList;
