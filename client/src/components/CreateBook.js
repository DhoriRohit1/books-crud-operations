import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateBook() {
  const [userForm, setUserForm] = useState({
    bookname: "",
    price: "",
    auther: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/books/create-book", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          bookname: "",
          price: "",
          auther: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Bookname</label>
            <input
              type="text"
              className="form-control"
              name="bookname"
              id="bookname"
              value={userForm.bookname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="name"
              value={userForm.price}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Auther</label>
            <input
              type="text"
              className="form-control"
              name="auther"
              id="auther"
              value={userForm.auther}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
