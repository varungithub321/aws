import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Contact extends React.Component{
    render(){
        return(
            <tr> 
            <td><label>{this.props.contact.name}</label></td>
            <td><label>{this.props.contact.phone}</label></td>
            <td><label>{this.props.contact.email}</label></td>
            </tr>
        
        )
           
        
    }
}
class User extends React.Component{
    render(){
        var contacts = [
            {
                name : 'varun',
                phone: '1111111111',
                email: 'varun@something.com'
            },
            {
                name : 'sourabh',
                phone: '2222222222',
                email: 'sourabh@something.com'
            },
            {

                name : 'tarun',
                phone: '3333333333',
                email: 'tarun@something.com'

            }
        ]

        
        return(
            <table align = 'center'>  
            <th>Name</th>   
            <th>Phone</th>
            <th>Email</th>
            {contacts.map(c =>  <Contact contact = {c}/>)}
            </table>  
        

        );
            
        
    }

      
}

ReactDOM.render(
    <User />,
    document.getElementById('root')
  );