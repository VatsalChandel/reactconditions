import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      conditionText: '',
      conditionCode: 0,
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.place !== this.props.place) {
      this.fetchWeatherData();
    }
  }

  fetchWeatherData() {
    const { place } = this.props;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=455d76479c9b4922a2a10848231506&q=${place}&aqi=no`;

    axios
      .get(apiUrl)
      .then(response => {
        this.setState({
          posts: response.data,
          conditionText: response.data?.current?.condition?.text,
          conditionCode: response.data?.current?.condition?.code,
        });
        this.props.onConditionTextChange(response.data?.current?.condition?.text); // Call the callback function with conditionText
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  getBackgroundImage(conditionCode) {
    var sunny = [1000];
    var cloudy = [1003, 1006];
    var overcast = [1009];
    var rain = [1030, 1063, 1072, 1150, 1153, 1168, 1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246,1273,1276];
    var snow = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282];
    var ice = [1069, 1204, 1207, 1237, 1249, 1252, 1261, 1264];
    var thunder = [1087];
    var fog = [1135, 1147];

    if (sunny.indexOf(conditionCode) !== -1) {
      return '/sunnyImage.jpeg'; 
    } else if (cloudy.indexOf(conditionCode) !== -1) {
      return './cloudyImage.jpeg';
    } else if (overcast.indexOf(conditionCode) !== -1) {
      return './sunnyImage.jpeg';
    } else if (rain.indexOf(conditionCode) !== -1) {
      return 'sunnyImage';
    } else if (snow.indexOf(conditionCode) !== -1) {
      return './snowImage.jpeg';
    } else if (ice.indexOf(conditionCode) !== -1) {
      return './iceImage.jpeg';
    } else if (thunder.indexOf(conditionCode) !== -1) {
      return './thunderImage.jpeg'; 
    } else if (fog.indexOf(conditionCode) !== -1) {
      return './fogImage.jpeg';
    } else {
      return 'porsche.jpeg';
    }

  }

  render() {
    const { conditionText } = this.state;
    const { conditionCode } = this.state;
    const backgroundImage = this.getBackgroundImage(this.state.conditionCode);


    return (
      <div>
        <h1>Weather: {conditionText}</h1>
        <h1>Code: {conditionCode}</h1>
      </div>
    );
  }
}

export default PostList;
