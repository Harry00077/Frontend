import React from "react";

function signUp() {
  return (
    <div style={{ marginTop: "10%" }}>
      <form className="bg-white shadow-lg w-25 mx-auto">
        <h3 className="text-center my-3">SIGN UP FORM</h3>
        <div style={{ width: "350px", height: "400px" }} className="mt-3 ms-4">
          <label for="inputFullName" className="form-label my-3">
            Full Name
          </label>
          <input
            type="name"
            className="form-control"
            id="inputFullName"
            aria-describedby="nameHelp"
          />
          <label for="exampleInputEmail1" className="form-label my-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <div
            style={{
              width: "350px",
            }}
            className="mt-3"
          >
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default signUp;
