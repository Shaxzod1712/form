import React from "react";

const EditableRows = ({editFormData, handleEditFormData, handleCancelClick}) =>{
    return(
        <tr>
            <td><input type='text' name='id' required='required' placeholder='Add a id ...' onChange={handleEditFormData} value={editFormData.id}/></td>
            <td><input type='text' name='name' required='required' placeholder='Add a name ...' onChange={handleEditFormData} value={editFormData.name}/></td>
            <td><input type='text' name='age' required='required' placeholder='Add a age ...' onChange={handleEditFormData} value={editFormData.age}/></td>
            <td><input type='text' name='address' required='required' placeholder='Add a address ...' onChange={handleEditFormData} value={editFormData.address}/></td>
            <td><input type='text' name='status' required='required' placeholder='Add a status ...' onChange={handleEditFormData} value={editFormData.status}/></td>
            <td><input type='text' name='nickname' required='required' placeholder='Add a nickname ...' onChange={handleEditFormData} value={editFormData.nickname}/></td>
            <td><input type='text' name='univ' required='required' placeholder='Add a univ ...' onChange={handleEditFormData} value={editFormData.univ}/></td>
            <td><input type='text' name='job' required='required' placeholder='Add a job ...' onChange={handleEditFormData} value={editFormData.job}/></td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRows