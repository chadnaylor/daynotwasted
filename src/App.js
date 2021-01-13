import fire from './fire'
import "firebase/auth"
import React from 'react'
import HomePage from './Comp/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }


  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <HomePage user={this.state.user} />
    );
  }
}

export default App;
