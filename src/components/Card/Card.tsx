import React, { ReactElement } from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';

type CardProps ={type:string, price:number, quantity?:number, children:ReactElement, setTotal?:Function, setItems?:Function}//children?:JSX.Element}
const Card = (props:CardProps) => {
  return (
    <div id="root" style={{background:"green"}} className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem" }}>       
        <div className="card-body">
          <h2 className="card-text">{props.type}</h2>
          <h2 className="card-text">{props.price}</h2>
          <h2 className="card-text">{props.children}</h2>
        </div>
      </div>
    </div>)
}

export default Card;