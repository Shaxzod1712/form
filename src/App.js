import React, { useState } from 'react'
import './App.css'
import EditableRows from './components/EditableRows';
import ReadOnlyRows from './components/ReadOnlyRows';
import data from "./mock-data.json";

const App = () => {

    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState({
        id: '',
        name: '',
        age: '',
        address: '',
        status: '',
        nickname: '',
        univ: '',
        job: '',
    })

    const [editFormData, setEditFormData] = useState({
        id: '',
        name: '',
        age: '',
        address: '',
        status: '',
        nickname: '',
        univ: '',
        job: '',
    })

    const [editContactId, setEditContactId] = useState(null)



    const handleAddFormData = (e) =>{
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue =e.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData)
    }

    const handleEditFormData = (e) =>{
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue =e.target.value;

        const newFormData = { ...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData)
    }

    const handleAddFormSubmit = (e) =>{
        e.preventDefault()

        const newContact = {
            id: addFormData.id,
            name: addFormData.name,
            age: addFormData.age,
            address: addFormData.address,
            status: addFormData.status,
            nickname: addFormData.nickname,
            univ: addFormData.univ,
            job: addFormData.job,
        }

        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
    }

    const handleEditFormSubmit = (e) =>{
        e.preventDefault()

        const editedContact = {
            id: editContactId,
            name: addFormData.name,
            age: addFormData.age,
            address: addFormData.address,
            status: addFormData.status,
            nickname: addFormData.nickname,
            univ: addFormData.univ,
            job: addFormData.job,
        }

        const newContacts = [...contacts]

        const index = contacts.findIndex((contact)=>contact.id === editContactId)
        newContacts[index]=editedContact
        setContacts(newContacts)
        setEditContactId(null)
    }

    const handleEditClick = (e , contact) =>{
        e.preventDefault()
        setEditContactId(contact.id)

        const formValues = {
            id: contact.id,
            name: contact.name,
            age: contact.age,
            address: contact.address,
            status: contact.status,
            nickname: contact.nickname,
            univ: contact.univ,
            job: contact.job,
        }

        setEditFormData(formValues)
    }

    const handleCancelClick = () => {
        setEditContactId(null)
    }

    const handleDeletelClick = (contactId) =>{
        const newContacts = [...contacts]

        const index = contacts.findIndex((contact)=>contact.id === contactId)

        newContacts.splice(index,1)

        setContacts(newContacts)
    }


    return(
        <div className='app-container'>
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                        <th>NICKNAME</th>
                        <th>UNIV</th>
                        <th>JOB</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact)=>
                        <>
                        {
                            editContactId === contact.id 
                            ? <EditableRows editFormData={editFormData} handleEditFormData={handleEditFormData} handleCancelClick={handleCancelClick}/>
                            :<ReadOnlyRows contact={contact} handleEditClick={handleEditClick} handleDeletelClick={handleDeletelClick}/>
                        }
                        
                        
                        </>
                            )
                    }
                </tbody>
            </table>
            </form>
            <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input type='text' name='id' required='required' placeholder='Add a id ...' onChange={handleAddFormData}/>
                <input type='text' name='name' required='required' placeholder='Add a name ...' onChange={handleAddFormData}/>
                <input type='text' name='age' required='required' placeholder='Add a age ...' onChange={handleAddFormData}/>
                <input type='text' name='address' required='required' placeholder='Add a address ...' onChange={handleAddFormData}/>
                <input type='text' name='status' required='required' placeholder='Add a status ...' onChange={handleAddFormData}/>
                <input type='text' name='nickname' required='required' placeholder='Add a nickname ...' onChange={handleAddFormData}/>
                <input type='text' name='univ' required='required' placeholder='Add a univ ...' onChange={handleAddFormData}/>
                <input type='text' name='job' required='required' placeholder='Add a job ...' onChange={handleAddFormData}/>
                <button type='submit'>Add</button>
            </form>
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
