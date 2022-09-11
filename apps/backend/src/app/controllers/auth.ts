import { FirebaseError } from '@firebase/util';
import { auth } from '../../db/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Request, Response } from 'express';

export const createNewUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    res.send({ code: 'auth/user-created', email: createdUser.user.email });
  } catch (e: unknown) {
    const error = e as FirebaseError;

    res.send({ code: error.code, email });
  }
};
