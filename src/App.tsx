import React, { useState } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import { Counter } from './components/Counter/Counter';
import { Button } from './components/CustomButton/Button';





const Products = [
  { id:0, type: "iphone", price: 800, quantity:0},
  { id:1, type: "samsung", price: 400, quantity:0},
  { id:2,type: "altro", price: 500, quantity:0},
]
const App = () => {
  let [items,setItems]=useState(Products)
  let [total,setTotal]=useState(0)
  const ctotal =(() =>{
    setTotal(total=items.reduce((total, item) => {
      return total+=item.quantity*item.price
  },0))
})


  return (
  <div className='App'>
     {items.map((item) => <Container key={item.id}><Card key={item.id} type={item.type} price={item.price} setTotal={ctotal} setItems={setItems}><Button quantity={item.quantity} setTotal={setTotal} price={item.price} total={total}/></Card></Container> )}
     <Counter />
     <h2>{total}</h2>
  </div>
  )
}

export default App;
