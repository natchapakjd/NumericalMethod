import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'

const Parser = require('expr-eval').Parser;

class FalsePosition extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {XL:'',XR:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var i = 0;
        var xl = parseFloat(XL);
        var xr = parseFloat(XR);
        var x1,xold;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        while(ErrorApox_Answer>inputerrorapox)
        {
                x1 = ((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
                if(fx(x1)*fx(xr) < 0){
                    xold=xl
                    xl = x1;
                }
                else if(fx(x1)*fx(xr) > 0){
                    xold =xr;
                    xr = x1;
                }
                ErrorApox_Answer = Math.abs((x1-xold)/x1)*100
            i++
            console.log("XL = "+xl)   //console log for debugging
            console.log("X1 = "+x1)
            console.log("XR = "+xr)
            console.log("Errorapox = "+ErrorApox_Answer)
            render("XM = "+x1.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
        }
        return "X1="+x1+" at Iteration = "+i; //calc wont re-render so i stuck at this
    }


    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
        
        const x1 = this.FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
        event.preventDefault()
        console.log("XL = "+XL)   //console log for debugging
        console.log("XR = "+XR)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(x1) //same here at line 53 i literally stuck at re-rendering 
        

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(
          
          <form  onSubmit={this.handleSubmit}>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '10vh',
            }}> 
              <h1>&emsp;FalsePosition Method&emsp;</h1>
          </div>
          <div  style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '5vh',
              color: 'red',
            }}> 
            <div >
                
              <label htmlFor='XL'>&emsp;XL :&emsp;</label>
              <input 
                name='XL' 
                placeholder='0.0' 
                value = {this.state.XL}
                onChange={this.handleChange}
                size='8'
              />
              <label htmlFor='XR'>&emsp;XR :&emsp;</label>
              <input
                name='XR' 
                placeholder='0.0'
                value={this.state.XR}
                onChange={this.handleChange}
                size='8'
              />
              </div>

              <p></p>
              <div>
              <label htmlFor='ErrorApox'>&emsp;&emsp;&emsp;ErrorApox :&emsp;</label>
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



export default FalsePosition
