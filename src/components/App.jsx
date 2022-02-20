import '../App.css'
import React from "react";
import { Feedback } from './Feedback';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      listGuests: [],
      eatsPizzaList: [],
      guestVegans: [],
      isVisible: false
    }
  }

  getVegansList() {
    console.log('я зашел в лист веган')
    let names = this.state.listGuests;
    let name = names.map((el) => el.name.replace(" ", "%20")).join();
    fetch(`https://gp-js-test.herokuapp.com/pizza/world-diets-book/${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            guestVegans: result.diet.filter((el) => el.isVegan === true)
          });
          console.log("vegans", this.state.guestVegans);
        },
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  getEatsPizzaList() {
    console.log('я зашел в eatsPizza')
   // let names = this.state.listGuests;
    //let name = names.map((el) => el.name.replace(" ", "%20")).join();
    fetch("https://gp-js-test.herokuapp.com/pizza/guests")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            eatsPizzaList: result.party.filter((el) => el.eatsPizza === true)
          });
          console.log("eatsPizza", this.state.eatsPizzaList);
        },
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    console.log("я зашел в дидмаунт");
    fetch("https://gp-js-test.herokuapp.com/pizza/guests")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            listGuests: result.party
          });
          this.getVegansList();
          this.getEatsPizzaList();
        },
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  isPersonVegan = (person) => 
    //console.log('я зашел в персон веган')
   // const vegan = this.state.guestVegans;
    !!this.state.guestVegans.find((guest) => guest.name === person.name)
   // console.log('веганы', vegan)

   isPersonEatsPizza = (person) => 
   !!this.state.eatsPizzaList.find((guest) => guest.name === person.name)

  

  render () {
    const {listGuests,  error, isLoading,} = this.state
    console.log('listGuests', this.state.listGuests)

    if (error) {
      return <div> Error </div>;
    } else if (!isLoading) {
      return <div> Loading... </div>;
    } else {
    return (
      <div className="App">
       <span>Hello World!</span>
       <table className="table">
         <thead><tr><th>Name of guests</th></tr></thead>
         <tbody>
           {listGuests.map(el => (
                  <tr>
                    <td className={!this.isPersonEatsPizza(el) ? "wellFed" : this.isPersonVegan(el) ? "vegan" :  "notVegan" }>
                    {el.name}
                    </td> 
                  </tr>
           ))}
      
         </tbody>
       </table>
       <Feedback name = "Pete"/>
      
      </div>
    );
  }
  }
}


