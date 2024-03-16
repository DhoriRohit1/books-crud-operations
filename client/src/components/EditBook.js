import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



function EditBook() {
  const [userForm, setUserForm] = useState({
    bookname: "",
    price: "",
    auther: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,

    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/books/update-book/" + params.id, {
        bookname: userForm.bookname,
        price: userForm.price,
        auther: userForm.auther,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/book-list");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/books/get-book/" + params.id)
      .then((res) => {
        setUserForm({
          bookname: res.data.data.bookname,
          price: res.data.data.price,
          auther: res.data.data.auther,
        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">bookname</label>
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
            <label className="form-label">price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBook;
