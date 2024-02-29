import React, {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const[email, setEmail]= useState('');
    const[message, setMessage]= useState('');


    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log({name,email,message});
    };

    return(
        <div>
            <h2>form</h2>
            <form onSubmit={handleSubmit}>
             <div>
                <label>name</label>
                <input type="text" value={name} onChange = {(e) => setName(e.target.value)}></input>
             </div>
             <br></br>
             <br></br>
             <div>
                <label>email</label>
                <input type="text" value={email} onChange = {(e) => setEmail(e.target.value)}></input>
             </div>

             <br></br>
             <br></br>
             <div>
                <label>message</label>
                <input type="text" value={message} onChange = {(e) => setMessage(e.target.value)}></input>
             </div>
             <br></br>
             <br></br>
             <button type = "submit">Save</button>
            </form>

            <h2>form data</h2>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Message:{message}</p>
        </div>

    );
}
    export default Contact;
    
