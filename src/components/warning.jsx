const Warning = ({ backHandler }) => {
  return (
    <div className="card w-50 shadow-lg">
      <div className="card-body">
        <p className="card-text">
          <h5 className="text-danger text-center">Warning.....</h5>
          You can't send otp to that number <b>If The number is unverified.</b> Trial
          accounts cannot send messages to unverified numbers; verify at
          twilio.com/user/account/phone-numbers/verified, or purchase a Twilio
          number to send messages to unverified numbers.
        </p>
        <h6>Already done?.. then ignore</h6>
        <button
          type="button"
          className="btn btn-info btn-sm"
          onClick={() => backHandler()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Warning;
