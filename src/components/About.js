import React from 'react'
import UserClass from './UserClass'
import UseContext from '../utils/userContext'

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
          <UseContext.Consumer>
            {({loggedInUser})=>(
              <h1 className='text-xl font-bold'>{loggedInUser}</h1>
            )}
          </UseContext.Consumer>
          <p>This is the About page.</p>

          <UserClass name="abhi" location="hyderabd" contact= {2434234}/>
        </div>
      )
  }
  
}

export default About