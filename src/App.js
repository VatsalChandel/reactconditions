import React from 'react';
import PostList from './PostList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Seattle', 
      submittedPlace: 'Seattle', 
    };
  }

  handleChange = event => {
    this.setState({ place: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submittedPlace: this.state.place });
  };

  render() {
    const { place, submittedPlace } = this.state;

    return (
      <div>

        <PostList place={submittedPlace} />

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={place} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default App;
