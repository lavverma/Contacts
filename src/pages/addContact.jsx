import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CreateContact from "../components/createContact";
import Warning from "../components/warning";

const url = import.meta.env.VITE_SERVER_URL;

const AddContact = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    company: "",
  });
  const [show, setShow] = useState(true);

  //New Contact Data
  const data = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  //Create A New Contact
  const createContact = async () => {
    try {
      if (!details.fname) {
        return toast.error(`Enter First Name`);
      }
      if (!details.lname) {
        return toast.error(`Enter Last Name`);
      }
      if (!details.phone) {
        return toast.error(`Enter Phone Number`);
      }
      await axios.post(`${url}/createContact`, details);
      setShow(false);
      return toast.success(`Contact Successfully added`);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const back = () => {
    setShow(true);
    setDetails({
      fname: "",
      lname: "",
      phone: "",
      company: "",
    });
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="container-fluid pt-4  vh-100 "
      style={{ backgroundColor: "#F5EEC2" }}
    >
      <div className="d-flex align-items-center justify-content-center flex-column">
      {show ? (
        <CreateContact
          fname={details.fname}
          lname={details.lname}
          phone={details.phone}
          company={details.company}
          dataHandler={data}
          createContactHandler={createContact}
          backHomeHandler={backToHome}
        />
      ) : (
        <Warning backHandler={back} />
      )}
    </div>
    </div>
  );
};

export default AddContact;
