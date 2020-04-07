import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  "id": 1,
  "name":"홍길동",
  "image":"http://placeimg.com/400/300/any",
  "birthday":"2010-09-04",
  "gender":"남",
  "job":"Developer"
},
{
  "id": 2,
  "name":"홍길순",
  "image":"http://placeimg.com/400/300/any",
  "birthday":"2010-09-04",
  "gender":"남",
  "job":"Developer"
},
{
  "id": 3,
  "name":"홍길남",
  "image":"http://placeimg.com/400/300/any",
  "birthday":"2010-09-04",
  "gender":"남",
  "job":"Developer"
}

]

class App extends Component{
  render(){
    return(
      //<Customer id={customer.id} name={ customer.name} image={ customer.image } birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
      <div>
        {
          customers.map(customer => (<Customer key={customer.id} id={customer.id} name={ customer.name} image={ customer.image } birthday={customer.birthday} gender={customer.gender} job={customer.job}/>))
            // customers.map(customer => {
            //   return(<Customer key={customer.id} id={customer.id} name={ customer.name} image={ customer.image } birthday={customer.birthday} gender={customer.gender} job={customer.job}/>)
        })
        }
      </div>
    );
  }
}

export default App;
