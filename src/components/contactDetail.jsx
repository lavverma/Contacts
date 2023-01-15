import { useNavigate } from "react-router-dom";

const ContactDetail = ({ fname, lname, phone, company, optHandler }) => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="card w-50 shadow-lg">
      <div className="card-body">
        <h2 className="text-center">
         Contact Info
        </h2>
        <h5 className="card-title">
          <i>Name :- </i>
          {`${fname} ${lname}`}
        </h5>
        <p className="card-text">
          <i>Contact Number :- </i> <b>{`${phone}`}</b>
        </p>
        <p className="card-text">
          <i>Company Name :- </i> {company == undefined ? "" : `${company}`}
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm m-2"
          onClick={() => optHandler()}
        >
          Send Message
        </button>
        <button
          type="button"
          className="btn btn-sm btn-info"
          onClick={() => backToHome()}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
