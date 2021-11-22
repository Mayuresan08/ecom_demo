/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect} from 'react';
import './App.css';
import styled from "styled-components"
import Icecream from "./images/icecream.png"
import Yogurt from "./images/yogurt.png"
import Milk from "./images/milk.png"

const OuterContainer=styled.div`
margin: 2rem 4rem;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 8rem;
`

const ProductDisplay=styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding: 10px;
gap: 2rem;
`

const ProductImage=styled.div`
display: flex;
gap: 1rem;
`
const ImageContainer=styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ProductAdd=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`
const ProductButtons=styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
font-size: 1.5rem;
`
const ProductDetail=styled.div`
min-width: 12rem;
height: 25rem;
margin: 1rem;
padding: 8px;
border: 3px solid black;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.1rem;
font-weight: 700;
`

function App() {
const [iceCream, setIcream] = useState(0)
const [yogurt, setYogurt] = useState(0)
const [milk, setMilk] = useState(0)
const [price,setPrice]=useState(0)
let iceCreamPrice=20
let yogurtPrice=100
let milkPrice=50

const handlePrice=()=>{
  console.log(iceCream,milk,yogurt)
 let temp=((iceCream*iceCreamPrice)+(milk*milkPrice)+(yogurt*yogurtPrice))
 setPrice(temp)
 console.log(temp,price)
}

useEffect(()=>{
handlePrice()
},[iceCream,yogurt,milk])

const handleIceCream=(value)=>{
  console.log(iceCream)
  if(value === "+") 
  {setIcream(iceCream+1)
  }
  else 
  {
    if(iceCream >0)
    setIcream(iceCream-1)
  }

}
const handleYogurt=(value)=>{
  console.log(value)
  if(value === "+") 
  {setYogurt(yogurt+1)
  }
  else 
  {
    if(yogurt >0)
    setYogurt(yogurt-1)
  }

}
const handleMilk=(value)=>{
  console.log(value)
  if(value === "+") 
  {setMilk(milk+1)
  }
  else 
  {
    if(milk >0)
    setMilk(milk-1)
  }

}


  return (
    <div className="App">
        <OuterContainer>
          <ProductDisplay>
              <ProductImage>
                <ImageContainer>
                  <div>
                    <img src={Icecream} alt="icecream.png"/>
                    </div>
                    <div>
                      <p className="text-warning">
                        Ice-Cream:20rs
                      </p>
                    </div>
                </ImageContainer>
                <ImageContainer>
                <div>
                    <img src={Yogurt} alt="icecream.png"/>
                    </div>
                    <div>
                      <p className="text-warning">
                       Yogurt :100rs
                      </p>
                    </div>
                </ImageContainer>
                <ImageContainer>
                <div>
                    <img src={Milk} alt="icecream.png"/>
                    </div>
                    <div>
                      <p className="text-warning">
                        Milk: 50 rs
                      </p>
                    </div>
                </ImageContainer>
              </ProductImage>
              <ProductAdd>
                  <ProductButtons>
                    <div className="text-warning" style={{width:"10rem"}}>
                      Ice-Cream
                    </div>
                    <div>
                      <button className="btn btn-success" onClick={()=>{handleIceCream("+")}}>
                        +
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-secondary disabled">
                        {iceCream}
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-danger" onClick={()=>{handleIceCream("-")}}>
                        -
                      </button>
                    </div>
                  </ProductButtons>
                  <ProductButtons>
                    <div className="text-warning  " style={{width:"10rem"}} >
                      Yogurt
                    </div>
                    <div>
                      <button className="btn btn-success" onClick={()=>{handleYogurt("+")}}>
                        +
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-secondary disabled">
                        {yogurt}
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-danger"  onClick={()=>{handleYogurt("-")}}>
                        -
                      </button>
                    </div>
                  </ProductButtons>
                  <ProductButtons>
                    <div className="text-warning " style={{width:"10rem"}}>
                      Milk
                    </div>
                    <div>
                      <button className="btn btn-success" onClick={()=>{handleMilk("+")}}>
                        +
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-secondary disabled">
                        {milk}
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-danger" onClick={()=>{handleMilk("-")}}>
                        -
                      </button>
                    </div>
                  </ProductButtons>
                </ProductAdd>
          </ProductDisplay>
          <ProductDetail>
              Your Total Price = {price}
          </ProductDetail>
        </OuterContainer>
    </div>
  );
}

export default App;
