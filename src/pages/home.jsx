import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ContactList from "../components/contactList";
import MessageList from "../components/messageList";

const url = import.meta.env.VITE_SERVER_URL;

const Home = () => {
  const [contactList, setContactList] = useState([]);
  const [messageList, setMessageList] = useState([]);

  //Get Contact List From Data Base
  const getContactList = async () => {
    try {
      const res = await axios.get(`${url}/getAllContact`);
      setContactList(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  //Get Message List From Data Base
  const getMessageList = async () => {
    try {
      const res = await axios.get(`${url}/getMessages`);
      setMessageList(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    getContactList();
    getMessageList();
  }, []);

  return (
    <div className="container-fluid  vh-100" style={{backgroundColor : "#F5EEC2"}}>
        <div className="d-flex align-items-center flex-column">
      <ContactList contactList={contactList} />
      <MessageList messageList={messageList} />
    </div>
    </div>
  );
};

export default Home;
