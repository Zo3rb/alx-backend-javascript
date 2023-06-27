import { signUpUser } from "./4-user-promise";
import { uploadPhoto } from "./5-photo-reject";

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  try {
    const [user, photo] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: user.status, value: user.value },
      { status: photo.status, value: photo.value },
    ];
  } catch (error) {
    throw new Error(error.message);
  }
}
