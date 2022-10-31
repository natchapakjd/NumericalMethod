import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import Button from 'react-bootstrap/Button';

const Parser = require('expr-eval').Parser;

class Bisection extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {XL:'',XR:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }
    

    BisectionCalcFunction(XL,XR,ErrorApox,Funct)
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
        var xm,xold;
        var ErrorApox_Answer=10000000; 
        var inputerrorapox = parseFloat(ErrorApox)
        while(ErrorApox_Answer>inputerrorapox)
            {
                xm=(xl+xr)/2;
                if(fx(xm)*fx(xr)<0)
                {
                    xold=xl
                    xl=xm
                }
                if(fx(xm)*fx(xr)>0)
                {
                    xold=xr
                    xr=xm
                }
                ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
            i++
            render("XM = "+xm.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)
              
            
        }
        return "XM="+xm+" at Iteration = "+i;
    }
    

    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
        
        const xm = this.BisectionCalcFunction(XL,XR,ErrorApox,Funct)
        event.preventDefault()
        render(xm) 
        

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
                <h1>&emsp;Bisection Method&emsp;</h1>
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



export default Bisection
