import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export async function pickImage() {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error picking image: ' + error.message);
  }
}
export async function takeImage() {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA)
  if (granted) {
    try {
      let image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!image.canceled) {
        return image.assets[0].uri;
      } else {
        return null;
      }
    } 
    catch (error) {
      throw new Error('Error picking image: ' + error.message);
    }
  }
}