import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(email, password);

        return result;
    } catch (error) {
        return error;
    }
};
