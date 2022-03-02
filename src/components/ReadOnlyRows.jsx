import React from "react";


const ReadOnlyRows = ({contact , handleEditClick, handleDeletelClick})=>{
    return(
        <tr >
            <td>{contact.id}</td>
            <td>{contact.fullName}</td>
            <td>{contact.age}</td>
            <td>{contact.address}</td>
            <td>{contact.status}</td>
            <td>{contact.nickname}</td>
            <td>{contact.univ}</td>
            <td>{contact.job}</td>
            <td>
                <button type="submit" onClick={(e)=>handleEditClick(e, contact)}>Edit</button>
                <button type="button" onClick={()=>handleDeletelClick(contact.id)}>Delate</button>
            </td>
        </tr>
    )

}

export default ReadOnlyRows