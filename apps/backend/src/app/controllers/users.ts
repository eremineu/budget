import * as admin from 'firebase-admin';
import { FirebaseError } from '@firebase/util';
import { adminApp } from '../../db/firebase';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await adminApp.auth().listUsers();
    res.send(users);
  } catch (e: unknown) {
    const error = e as FirebaseError;

    res.send({ code: error.code });
  }
};
