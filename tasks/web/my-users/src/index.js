import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Contact extends React.Component{
    render(){
        return(
            <tr> 
            <td><label>{this.props.contact.Name}</label></td>
            <td><label>{this.props.contact.PhoneNumber}</label></td>
            <td><label>{this.props.contact.Email}</label></td>
            </tr>
        
        )
           
        
    }
}
class User extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          contacts: []
        }
      }
    componentDidMount() {
        const apiUrl = 'https://q2m2h86d1f.execute-api.us-east-2.amazonaws.com/prod/users/contacts';
        fetch(apiUrl)
          .then(async (response) => {
            this.setState({ loading: false, contacts: await response.json() });
          });
      }
    render(){
        if (this.state.loading) {
            return (<label>loading...</label>)
          }else{
            return(
                <table align = 'center'>  
                <th>Name</th>   
                <th>Phone</th>
                <th>Email</th>
                {this.state.contacts.map(c =>  <Contact contact = {c}/>)}
                </table>  
    
            );
                
          }

    
            
        
    }

      
}

ReactDOM.render(
    <User />,
    document.getElementById('root')
  );