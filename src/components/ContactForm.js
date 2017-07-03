import React from 'react';

const ContactForm= (props) =>
(
    <div>
    <input 
       type="text"
       value={props.FirstName}
       onChange={props.onChange}
    />
    <input 
       type="text"
       value2={props.lastName}
       onChange={props.onChange}
    />
    </div>
    <input 
       type="text"
       value3={props.value}
       onChange={props.onChange}
    />
    </div>

);
export default ContactForm;