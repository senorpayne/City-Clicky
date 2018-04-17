import React, { Component } from "react";
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import image from "./city.json";
import "./App.css";
import Score from "./components/Score";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    image,
    clickCount: false,
    score: 0 
  };

clickImage = id => {

  const image = this.state.image.filter(image => image.id !== id);


  //this.setState({image})

this.setState({ clickCount: false });
console.log(this.state.clickCount);
    
if (this.state.clickCount ){

  console.log("You Lose");


}
else {

this.setState({score: this.state.score + 1});


console.log("You Win");

}

    console.log(this.state.clickCount);
  };


 
  // Map over this.state.cities and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Score
        scoreCount= {this.state.score} />  




        <Title>City Clicky</Title>

      
        {this.state.image.map(city => (
          <CityCard
            id={city.id}
            key={city.id}
            image={city.image}
            clickImage= { this.clickImage}

           
       
          />

        ))}
      </Wrapper>
    );
  }
}

export default App;
