import React from 'react';

const Form = (props) => {
    const handleChange = event =>{
        const { name, value } = event.target;
        props.change(name,value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Type Name Here
            <input 
                placeholder='Type here'
                value={props.values.name}
                name='name'
                onChange={handleChange}
            />
            </label> 
            <label>Type Email Here 
                <input 
                    placeholder='Type Here'
                    value={props.values.email}
                    name='email'
                    onChange={handleChange}
                />
            </label>
            <label> Role
                <input
                placeholder='Type Here'
                value={props.values.role}
                name='role'
                onChange={handleChange}
                />
            </label>
            <input type='submit' value='Choose Your Character'/>

        </form>
    )
}

export default Form;