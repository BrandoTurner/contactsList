function ContactList (props) {
    const {contactList} = props

    return (
        <div class="flex-container">
            <div className="person">
                <img className="pic" src={contactList.picture.medium} alt="contact image"/>
                
            </div>
            <div class="personDiv">
                <p>{contactList.name.first} {contactList.name.last}</p>
                <p>Home: {contactList.phone}</p>
                <p>Mobile: {contactList.cell}</p>

            </div>

        </div>
        
    )
}
export default ContactList;