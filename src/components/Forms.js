import React, { useState } from "react";

function NameForm() {
const [name, setName] = useState("");
const [songName, setSongName] = useState("");
const [selectedFile, setSelectedFile] = useState();

const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile)
};

const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();

	formData.append('File', selectedFile);
	fetch(
		'http://localhost:3000/create',
		{
			method: 'POST',
			body: formData,
		}
	)
		.then((response) => response.json())
		.then((result) => {
			console.log('Success:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

return (
    <div>
        <form onSubmit={handleSubmit} encType= "multipart/form-data">
            <label>
            First Name:
            <br/>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label>
            Song Name:
            <br/>
                <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                />
            </label>
            <br/>
            <label>
            Upload File:
            <br/>
                <input
                type="file"
                onChange={changeHandler}
                accept="audio/*"
                />
            </label>
            <br/>
                <input type="submit" value="Submit" />
        </form>
    </div>
);
}

export default NameForm;
