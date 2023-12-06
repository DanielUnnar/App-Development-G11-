import * as ImagePicker from 'expo-image-picker';

export async function pickImage() {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result.assets[0].uri;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error picking image: ' + error.message);
  }
}