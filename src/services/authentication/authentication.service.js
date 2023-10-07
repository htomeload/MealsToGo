import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = async (auth, email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        return result;
    } catch (error) {
        return error;
    }
};

export const registerRequest = async (auth, email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        return result;
    } catch (error) {
        return error;
    }
};
