import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateAge, updateDetails } from "../reducers/userReducer";
const Profile = () => {
  const dispatch = useDispatch();
  const { name, age, status } = useSelector((state) => {
    return state;
  });
  // eslint-disable-next-line
  const changeName = (name) => {
    dispatch(updateName(name));
  }; // eslint-disable-next-line
  const changeAge = (age) => {
    dispatch(updateAge(age));
  };
  const changeDetails = async () => {
    const res = await fetch(`http://localhost:9090/employees`);
    const res2 = await res.json();
    const details = {
      name: res2[0].name,
      age: res2[0].age,
      status: res2[0].ID,
    };
    console.log("D", details);
    dispatch(updateDetails(details));
  };

  return (
    <div>
      <h6>{name}</h6>
      <h6>{age}</h6>
      <h6>{status}</h6>
      {/* <button onClick={() => changeName("akshay v doizode")}>
        UPDATE NAME
      </button>
      <button onClick={() => changeAge("89")}>UPDATE AGE</button> */}
      <button onClick={() => changeDetails()}>UPDATE DETAILS</button>
    </div>
  );
};

export default Profile;
