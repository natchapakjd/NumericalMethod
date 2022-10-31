import React, { Component } from 'react'
import { render } from "@testing-library/react";
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from '@mui/material';


const Parser = require('expr-eval').Parser;
const math = require('mathjs');

 class NewtonRap extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {X0:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }
    NewtonRapCalfunction(X0,ErrorApox,Funct){
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }
        function fx1(x)
        {
            let expr = math.derivative(math.parse(Funct),'x')
            return expr.evaluate({ x: (x) })
        }
        function newtonAlgo(x){
            return -fx(x)/fx1(x);
        }
        var i=0,x1,dx1;
        var x0 = parseFloat(X0);
        var ErrorApox_Answer=10000000;
        var inputerrorapox = parseFloat(ErrorApox);
        while(true){
            dx1 = newtonAlgo(x0)
            x1 = x0+dx1;
            ErrorApox_Answer = Math.abs((dx1)/x1)*100;
            if(ErrorApox_Answer < inputerrorapox){
                break;
            }
            x0 = x1;
            i++;
            console.log("X0 = "+x0)   
            console.log("Errorapox = "+ErrorApox_Answer)
            render("X1 = "+x1.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
            
        }
        return "X1="+x1+" at Iteration = "+i;
    }
    handleSubmit(event){
        const {X0,ErrorApox,Funct} = this.state
        
        const xm = this.NewtonRapCalfunction(X0,ErrorApox,Funct)
        event.preventDefault()
        console.log("X0 = "+X0)   
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm)  
        

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }
    
    render(){
        return (

          <form onSubmit={this.handleSubmit}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '10vh',

                }}> 
                <h1>NewtonRaphsonIterationMethod&emsp;</h1>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5vh',
                  color: 'red',
                }}> 
                    <div>       
                      <label htmlFor='X0'>&emsp;X0 :&emsp;</label>
                      <input 
                        name='X0'
                        placeholder='0.0' 
                        value = {this.state.X0}
                        onChange={this.handleChange}Y
                        size='8'
                      />
                      <label htmlFor='ErrorApox'>&emsp;ErrorApox :&emsp;</label>
                      <input
                        name='ErrorApox' 
                        placeholder='0.0'
                        value={this.state.ErrorApox}
                        onChange={this.handleChange}
                        size='5'
                      />
                      </div>
                      
                      <p></p>
                      <div>
                      <label htmlFor='Funct'>&emsp;function :&emsp;</label>
                      <input
                        name='Funct' 
                        placeholder='(x*x*x*x-7)'
                        value={this.state.Funct}
                        onChange={this.handleChange}
                        size='28'
                      />
                    </div>
                    <p></p>
                    <div>
                    &emsp;<button>Calculate</button>
                    </div>

                </div>
                
          </form>
    
         
        )
    } 
}

  

export default NewtonRap
