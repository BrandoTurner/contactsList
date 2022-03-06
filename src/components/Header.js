import ContactList from './ContactList';
import data from '../data/contacts.json'

function Contact () {

    return (
        <div class="mycontacts">
            {data.results.map((contactList, index) => {
                return <ContactList key={index}
                contactList={contactList}/>
            })}
            
        </div>
        
    );
}
export default Contact;
