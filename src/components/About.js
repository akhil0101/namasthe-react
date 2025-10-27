import React from 'react'
import UserClass from './UserClass'
class About extends React.Component {
  constructor(props){
    super(props)
    console.log("Parent constructor")
  }
  componentDidMount(){
    console.log("Parent component didmount")
  }
  render(){
    console.log("parent render")
    return (
        <div>
          <h1>About</h1>
          <p>This is the About page.</p>
          <UserClass name="abhi" location="hyderabd" contact= {2434234}/>
        </div>
      )
  }
  
}

export default About