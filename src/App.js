import React from 'react';
import PostList from './PostList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Seattle', 
      submittedPlace: 'Seattle', 
      code: 0,
    };
  }


  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submittedPlace: this.state.place });
  };

  handleConditionText = conditionText => {
    this.setState({ conditionText });
    console.log(conditionText);
  };


  render() {
    const { place, submittedPlace, code } = this.state;


    return (

      <div>

        <PostList place={submittedPlace} onConditionTextChange={this.handleConditionText} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={place} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}



export default App;
