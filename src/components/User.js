import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  let { name, location, contact } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contacts: {contact} </h2>
    </div>
  );
};

export default User;
