import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import ContactDetail from "../components/contactDetail";
import SentOtp from "../components/sentOtp";

const url = import.meta.env.VITE_SERVER_URL;

const SendMessage = () => {
  const { contactId } = useParams();

  const [contact, setContact] = useState({});
  const [show, setShow] = useState(true);
  const [otp, setOtp] = useState("");
  const contactDetail = async (contactId) => {
    try {
      const res = await axios.get(`${url}/getContactById/${contactId}`);
      setContact(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const getOtp = async () => {
    try {
      const res = await axios.get(`${url}/getOtp`);
      setOtp(res.data.data);
      setShow(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const cancel = () => {
    setShow(true);
  };

  useEffect(() => {
    contactDetail(contactId);
  }, []);

  return (
    <div
      className="container-fluid vh-100 pt-4"
      style={{ backgroundColor: "#F5EEC2" }}
    >
      <div className="d-flex justify-content-center align-items-center">
      {show ? (
        <ContactDetail
          fname={contact.fname}
          lname={contact.lname}
          phone={contact.phone}
          company={contact.company}
          optHandler={getOtp}
        />
      ) : (
        <SentOtp
          otp={otp}
          cancelHandler={cancel}
          contactId={contactId}
          phone={contact.phone}
        />
      )}
    </div>
    </div>
  );
};

export default SendMessage;
