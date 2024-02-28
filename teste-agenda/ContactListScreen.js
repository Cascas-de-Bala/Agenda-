const ContactListScreen = ({ navigation }) => {
  // ...
  const [isEditing, setIsEditing] = useState(false);

  // ...

  const addContact = () => {
    if (isEditing) {
      setContacts(prevContacts => prevContacts.map(contact => contact.name === newContact.name ? newContact : contact));
      setIsEditing(false);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
    setNewContact({
      name: '',
      phone: '',
      nickname: '',
      email: '',
      location: '',
      image: { uri: '' },
      additionalInfo: ''
    });
    setShowForm(false);
  };

  // ...

  return (
    // ...
    {contacts.map((contact, index) => (
      <TouchableOpacity 
        key={index} 
        style={styles.contactItem}
        onPress={() => navigation.navigate('NewPage', { contact })}
      >
        <Image source={contact.image} style={styles.contactImage} />
        <Text style={styles.contactName}>{contact.name}</Text>
        <Button title="Remover" onPress={() => removeContact(contact.name)} />
        <Button title="Editar" onPress={() => {
          setNewContact(contact);
          setIsEditing(true);
          setShowForm(true);
        }} />
      </TouchableOpacity>
    ))}
    // ...
  );
};

