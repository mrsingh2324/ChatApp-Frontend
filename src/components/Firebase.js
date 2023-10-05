import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, signOut as signOutFirebase, onAuthStateChanged as onAuthStateChangedFirebase } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to log in a user with email and password
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPasswordFirebase(auth, email, password);
    return { success: true, message: 'Login successful' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to register a new user with email and password
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPasswordFirebase(auth, email, password);
    return { success: true, message: 'Registration successful' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to log out the current user
export const signOut = async () => {
  await signOutFirebase(auth);
};

// Function to check the authentication state of the user
export const checkAuthState = (callback) => {
  return onAuthStateChangedFirebase(auth, (user) => {
    callback(user);
  });
};
