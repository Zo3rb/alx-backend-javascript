import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const response_from_uploadPhoto_function = uploadPhoto();
    const response_from_createUser_function = createUser();
    await Promise.all([
      response_from_uploadPhoto_function,
      response_from_createUser_function,
    ]);
    return {
      photo: response_from_uploadPhoto_function,
      user: response_from_createUser_function,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}
