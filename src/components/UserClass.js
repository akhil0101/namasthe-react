import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      count: 0,
      userInfo: {},
    };
  }
  async componentDidMount() {
    console.log("Child component did mount ", new Date());
    let data = await fetch("https://api.github.com/users/akhil0101");
    let json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will umount");
  }

  render() {
    console.log("Child Renderer");
    let { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name} </h2>
        <h2>Location: {location} </h2>
      </div>
    );
  }
}

export default UserClass;
