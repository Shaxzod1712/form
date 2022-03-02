import React from 'react'
import './App.css';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            name: '',
            password: '',
        }
    }
 
    render(){
        const onEmail = (e)=>{
            this.setState({email: e.target.value })
        }
        const onName = (e)=>{
            this.setState({name: e.target.value })
        }
        const onPsw = (e)=>{
            this.setState({password: e.target.value })
        }
  
        const onSubmit = (e) =>{
            e.preventDefault()
            console.log(this.state)
        }

        return(
            <div>
                <form onSubmit={onSubmit}     style={{display: 'flex' , flexDirection: 'column' , width: '250px'}}>
                    <input onChange={onEmail} placeholder='email'/>
                    <input onChange={onName} placeholder='name'/>
                    <input onChange={onPsw} placeholder='password'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default App;
