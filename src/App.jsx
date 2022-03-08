import React, {useState} from 'react'
import './App.css'

const App = () => {
    const [title, setTitle] =useState([
        {id:1, name:'Rustam', status: 'Frontent'},
        {id:2, name:'Ahmat', status: 'Frontent'},
        {id:3, name:'Abdugani', status: 'Frontent'},
        {id:4, name:'Behruz', status: 'Frontent'},
    ])
    const [selected, setSelected] =useState(null)

    return(
        <div>
            <table border='1' style={{borderCollapse:'collapse'}}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            title.map((value)=>(
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.status}</td>
                                    <td>
                                        {
                                            selected === value.id ? <button onClick={()=> setSelected(null)}>save</button> : <button onClick={()=> setSelected( value.id)}>edit</button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default App























// import React from 'react'
// import './App.css';

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             email: '',
//             name: '',
//             password: '',
//         }
//     }
 
//     render(){
//         const onEmail = (e)=>{
//             this.setState({email: e.target.value })
//         }
//         const onName = (e)=>{
//             this.setState({name: e.target.value })
//         }
//         const onPsw = (e)=>{
//             this.setState({password: e.target.value })
//         }
  
//         const onSubmit = (e) =>{
//             e.preventDefault()
//             console.log(this.state)
//         }
            
//         return(
//             <div>
//                 <form onSubmit={onSubmit}     style={{display: 'flex' , flexDirection: 'column' , width: '250px'}}>
//                     <input onChange={onEmail} placeholder='email'/>
//                     <input onChange={onName} placeholder='name'/>
//                     <input onChange={onPsw} placeholder='password'/>
//                     <input type='submit'/>
//                 </form>
//             </div>
//         )
//     }
// }
// export default App;
