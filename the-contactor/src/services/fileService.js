import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';

const directory = `${FileSystem.documentDirectory}contacts/`;

export const addContact = async (contact) => {
  await createContact(contact);
};

export const deleteContact = async (contact) => {
  const fileuri = `${directory}contacts/${contact.name}-${contact.uuid}.json`;
  const contactsDirectoryListing = await FileSystem.readDirectoryAsync(`${directory}contacts/`);

  try {
    await FileSystem.deleteAsync(fileuri);
  } 
  catch (error) {
  }
};

export const modifyContact = async (contact, oldcontact) => {
    // To modify we simply use our existing add contact and delete contact, delete the old contact (unmodified)
    // create a new one (modified)
    deleteContact(oldcontact)
    addContact(contact)
}

async function createContact(contact, onSuccess) {
    const generateduuid = uuid.v4();
    const contactsDirectory = `${directory}contacts/`;
    const documentFileUri = `${contactsDirectory}${contact.name}-${generateduuid}.json`;
  
    try {
      await FileSystem.makeDirectoryAsync(contactsDirectory, { intermediates: true });
  
      const contactstring = JSON.stringify(contact);
  
      await FileSystem.writeAsStringAsync(documentFileUri, contactstring);
  
      if (onSuccess) {
        onSuccess();
      }
    } 
    catch (error) {

    }
  }
  
  
  export const readAllContacts = async () => {
    try {
      const contactsDirectory = `${directory}contacts/`;
      const files = await FileSystem.readDirectoryAsync(contactsDirectory);
      if (files.length === 0) {
        return null;
      }

      const filePromises = files.map(async (file) => {
        const fileUri = contactsDirectory + file;
  
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (fileInfo) {
          try {
            const jsonString = await FileSystem.readAsStringAsync(fileUri);
            const contactObject = JSON.parse(jsonString);
            
            // This jumbo catches the data we want which is in between the first hyphen in the file path
            // and the .json at the end of it, so we get the uuid, this also means we have to make sure the user
            // can't have hyphens in a contact name
            const uuidFromFilename = file.match(/-(.+)\.json$/)[1];
  
            return {
              ...contactObject,
              uuid: uuidFromFilename,
            };
          } catch (readError) {
            return null;
          }
        }
  
        return null;
      });

      const allContactsWithUUID = (await Promise.all(filePromises)).filter((contact) => contact !== null);
      return allContactsWithUUID;
    } catch (error) {
      return null;  
    }
  };
  