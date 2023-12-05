import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';

// Define the subfolder name
const contactsFolder = 'contacts';

// Create the full path to the contacts folder
const directory = `${FileSystem.documentDirectory}${contactsFolder}/`;

export const addContact = async (contact) => {
  await createContact(contact);
};

export const deleteContact = async (contact) => {
  const fileuri = `${directory}${contact.name}-${contact.uuid}.json`;

  try {
    await FileSystem.deleteAsync(fileuri);
    console.log('File deleted successfully:', fileuri);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

async function createContact(contact, onSuccess) {
    const generateduuid = uuid.v4();
    const contactsDirectory = `${directory}contacts/`;
    const cacheFileUri = `${FileSystem.cacheDirectory}John-${generateduuid}.json`;
    const documentFileUri = `${contactsDirectory}John-${generateduuid}.json`;
  
    try {
      // Create the 'contacts' directory if it doesn't exist
      await FileSystem.makeDirectoryAsync(contactsDirectory, { intermediates: true });
  
      const contactstring = JSON.stringify(contact);
  
      // Write the contact file to cache
      await FileSystem.writeAsStringAsync(cacheFileUri, contactstring);
      console.log('Cache file written:', cacheFileUri);
  
      // Copy the file from cache to document directory
      await FileSystem.copyAsync({ from: cacheFileUri, to: documentFileUri });
      console.log('Document file copied:', documentFileUri);
  
      // Read the directory after the write operation is complete
      const cacheDirectory = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
      const contactsDirectoryListing = await FileSystem.readDirectoryAsync(contactsDirectory);
      console.log('Contacts Directory after write:', contactsDirectoryListing);
  
      console.log('Created Successfully');
  
      // Invoke the onSuccess callback to trigger a state update
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error creating contact:', error);
      // Handle errors here as needed
    }
  }
  
  
  export const readAllContacts = async () => {
    try {
      const contactsDirectory = `${directory}contacts/`;
      const files = await FileSystem.readDirectoryAsync(contactsDirectory);
      if (files.length === 0) {
        console.log('No contacts found.');
        return null;
      }
  
      // Filter out unwanted directories and process only regular files
      const filePromises = files.map(async (file) => {
        const fileUri = contactsDirectory + file;
  
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (fileInfo) {
          try {
            const jsonString = await FileSystem.readAsStringAsync(fileUri);
            const contactObject = JSON.parse(jsonString);
            
            // Here we used chatGPT to help us extract the uuid from the filename because we tried splitting by hyphens but uuid has hyphens so
            // we went there looking for answers and got this.
            const uuidFromFilename = file.match(/-(.+)\.json$/)[1];
  
            return {
              ...contactObject,
              uuid: uuidFromFilename,
            };
          } catch (readError) {
            console.error('Error reading file:', file, readError);
            return null; // Ignore read errors and move to the next file
          }
        }
  
        return null; // Ignore unwanted directories
      });
  
      // Remove null values from the result array
      const allContactsWithUUID = (await Promise.all(filePromises)).filter((contact) => contact !== null);
      return allContactsWithUUID;
    } catch (error) {
      console.error('Error reading all contacts:', error);
      return null;
    }
  };
  