import React from'react';
const StudentForm = ({handleSaveClick}) => {
    return (
        <div>
            <form>
                <label htmlFor = 'name'>Enter name: </label>
                <input id='name' />
                {/* <input>Image URL: </input>
                <input>Social: </input>
                <input>Sun sign: </input>
                <label htmlFor = 'bio'>Enter bio: </label>
                <textarea id='bio' name='bio'></textarea>
                <button onClick={handleSaveClick}>Save</button> */}
            </form>
        </div>
    )

}

export default StudentForm;