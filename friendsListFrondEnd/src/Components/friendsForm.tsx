import React, { FormEvent, useState } from "react";
import "./FriendForm.css";
import axios from "axios";
import { Friend } from "../interfaces/Types";

const FriendForm = () => {
  const [currentFirstNameInput, SetFirstNameInput] = useState("");
  const [currentIDInput, SetIDInput] = useState("");
  const [currentLastNameInput, SetLastNameInput] = useState("");

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const newFriend: Friend = {
      firstName: currentFirstNameInput,
      lastName: currentLastNameInput,
      id: currentIDInput,
    };

    try {
      await axios.post("http://127.0.0.1:3000/friends/", newFriend);
      // Request successful, do something here (e.g., show success message, update state)
      console.log("Friend added successfully");
    } catch (error) {
      // Request failed, handle the error (e.g., show error message)
      console.error(error);
    }
  };

  const clearAllInputs = () => {
    SetFirstNameInput("");
    SetIDInput("");
    SetLastNameInput("");
  };

  return (
    <div>
      <div className="friends-form">
        <h1> Add Friends</h1>
        <form onSubmit={submitHandler}>
          <p>Enter Friends ID:</p>
          <input
            value={currentIDInput}
            type="text"
            onChange={(event) => SetIDInput(event.target.value)}
          />
          <p>Enter Friends First Name:</p>
          <input
            value={currentFirstNameInput}
            type="text"
            onChange={(event) => SetFirstNameInput(event.target.value)}
          />
          <p>Enter Friends LastName:</p>
          <input
            value={currentLastNameInput}
            type="text"
            onChange={(event) => SetLastNameInput(event.target.value)}
          />
          <button type="submit" className="friends-form-submit">
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FriendForm;
