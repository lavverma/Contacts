import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_SERVER_URL;

const SentOtp = ({ otp, contactId, phone, cancelHandler }) => {
  const navigate = useNavigate();

  //Send OTP To Contact
  const send = async () => {
    try {
      await axios.post(`${url}/sendSMS`, { phone, otp, contactId });
      toast.success("SMS Successfully Sent");
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="card w-50 shadow-lg">
      <div className="card-body">
        <p className="card-text">
          <i>Hi, Your otp is : </i> <b>{`${otp}`}</b>
        </p>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => send()}
        >
          Send
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => cancelHandler()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SentOtp;
