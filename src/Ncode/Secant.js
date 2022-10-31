import { border } from "@mui/system";
import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import Button from 'react-bootstrap/Button';

const Parser = require('expr-eval').Parser;

class Secant extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {X0:'',X1:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    SecantCalcFunction(X0,X1,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }
        function secant(x0,x1){
            return x1-((fx(x1)*(x0-x1))/(fx(x0)-fx(x1)));
        }
        var i = 0;
        var x2
        var x0 = parseFloat(X0);
        var x1 = parseFloat(X1);
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        while(true)
            {
                x2 = secant(x0,x1)
                ErrorApox_Answer = Math.abs((x2-x1)/x2)*100;
                if(ErrorApox_Answer < inputerrorapox){
                    console.log(x2);
                    break;
                }
                x0 = x1;
                x1 = x2;
            i++
            render("X2 = "+x2.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)
        }
        return "X2="+x2+" at Iteration = "+i; 
    }


    handleSubmit(event){
        const {X0,X1,ErrorApox,Funct} = this.state
        
        const xm = this.SecantCalcFunction(X0,X1,ErrorApox,Funct)
        event.preventDefault()
        render(xm) //same here at line 53 i literally stuck at re-rendering 
        

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '10vh',
                  
                }}>
              <h1>&emsp;SecantMethod&emsp;</h1>  
            </div>

            <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '4vh',
                  color: 'red',
                }}> 
              <div>
                  
                  <label htmlFor='X0'>&emsp;X0 :&emsp;</label>
                  <input 
                    name='X0'
                    placeholder='0.0' 
                    value = {this.state.X0}
                    onChange={this.handleChange}
                    size='8'
                    
                  />
                  <label htmlFor='X1'>&emsp;X1 </label>
                  <input
                    name='X1' 
                    placeholder='0.0'
                    value={this.state.X1}
                    onChange={this.handleChange}
                    size='8'
                  />
                  </div>
    
                  <p></p>
                  <div>
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
                  <label htmlFor='Funct'>&emsp;F(x) :&emsp;</label>
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



export default Secant
