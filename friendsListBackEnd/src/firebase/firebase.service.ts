import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Config } from 'src/model/config.model';
import {
  collection,
  CollectionReference,
  Firestore,
  getFirestore,
} from 'firebase/firestore';
import path from 'path';

@Injectable()
export class FirebaseService {
  private app: FirebaseApp;
  public FriendsCollection: CollectionReference;
  public firestore: Firestore;

  // env varibales
  // we will use ConfingModule and ConfigService from npm i @nestjs/config
  constructor(private configService: ConfigService<Config>) {
    this.app = initializeApp({
      apiKey: configService.get<string>('apiKey'),
      appId: configService.get<string>('appId'),
      authDomain: configService.get<string>('authDomain'),
      measurementId: configService.get<string>('measurementId'),
      messagingSenderId: configService.get<string>('messagingSenderId'),
      projectId: configService.get<string>('projectId'),
      storageBucket: configService.get<string>('storageBucket'),
    });
    this.firestore = getFirestore(this.app);
    this._createCollections();
  }
  private _createCollections() {
    this.FriendsCollection = collection(this.firestore, 'Friends');
  }
}
