import React, {Component} from 'react';
import './App.css';
import {Card} from './Card';
import people from './people'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      people:people
    }
  }

  changeNameHandler = () => {

    let peopleAux = [...this.state.people];

    peopleAux[0].name = peopleAux[0].name + "a";
    peopleAux[1].lastname = peopleAux[1].lastname + "b";

    this.setState({
      people: peopleAux
    })
  }


render(){

  let peopleComponent = this.state.people.map(person => {

    return(<Card
      name = {`${person.name} ${person.lastname}`}
      career =  {person.career}
      email = {`${person.carnet}@uca.edu.sv`}
      />)
  })

return (
  <div className="App">
    <h1> Hola Mundoooo! </h1>
    <p> Chinga su madre xd </p>
  <button onClick= {this.changeNameHandler}> Click </button>
  {peopleComponent}
  </div>
);
}
}



  /* 
function App() {
 return (
    <div className="App">
      <h1> Hola Mundoooo! </h1>
      <p> Chinga su madre xd </p>
      <Card name= "Danniela" career="Info" email="00087717@hotmail.com"/>
      <Card name= "Fatima" career="KK" email="00087717@hotmail.com"/>
      <Card name= "Jeniffer" career="Poooo" email="00087717@hotmail.com"/>

      <Card name= "Olmedo" career="Info" email="00087717@hotmail.com"/>
      <Card name= "César" career="Info" email="00087717@hotmail.com"/>
    </div>
  ); 

  return(
    React.createElement('div', {className:"App"},
     React.createElement('h1', null, 'Hola Mundoooo'),
     React.createElement('p', null, 'Chinga su madre xd'),
     React.createElement('section', null, 
        React.createElement('h2', null, 'Danniela Renderos'),
        React.createElement('p', null, 'Estudio Ingeniería Informática'),
        React.createElement('p', null, 'Soy vergona xd')
        )
     )
  );
  */



export default App;
