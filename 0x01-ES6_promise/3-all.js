import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [user, photo] = await Promise.all([createUser(), uploadPhoto()]);
    console.log(`${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
