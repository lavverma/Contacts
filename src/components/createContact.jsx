const CreateContact = ({
  fname,
  lname,
  phone,
  company,
  dataHandler,
  createContactHandler,
  backHomeHandler,
}) => {
  return (
    <div className="row centered-form">
      <div className="panel panel-default bg-white shadow-lg p-3">
        <div className="panel-heading mb-3">
          <h3 className="panel-title ">Create New contact</h3>
        </div>
        <div className="panel-body">
          <form role="form">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 mb-2">
                <div className="form-group">
                  <input
                    type="text"
                    name="fname"
                    className="form-control input-sm"
                    value={fname}
                    placeholder="First Name"
                    onChange={(e) => dataHandler(e)}
                    required
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 mb-2">
                <div className="form-group">
                  <input
                    type="text"
                    name="lname"
                    className="form-control input-sm"
                    value={lname}
                    placeholder="Last Name"
                    onChange={(e) => dataHandler(e)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                name="phone"
                className="form-control input-sm"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => dataHandler(e)}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                name="company"
                className="form-control input-sm"
                placeholder="Company Name"
                value={company}
                onChange={(e) => dataHandler(e)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm m-2"
              onClick={() => createContactHandler()}
            >
              Create Contact
            </button>
            <button
              type="button"
              className="btn btn-sm btn-info"
              onClick={() => backHomeHandler()}
            >
              Back to Home
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
