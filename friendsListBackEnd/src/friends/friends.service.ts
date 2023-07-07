import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import {
  setDoc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  DocumentReference,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { CreateFriendDto, Friend } from '../interface/Types';

@Injectable()
export class FriendsService {
  constructor(private firebaseService: FirebaseService) {}

  async create(friend: CreateFriendDto): Promise<void> {
    //TODO ! check
    const docRef: DocumentReference<DocumentData> = doc(
      this.firebaseService.FriendsCollection,
      friend.id,
    );

    await setDoc(docRef, friend);
  }

  async delete(id: string): Promise<void> {
    const taskRef = doc(this.firebaseService.FriendsCollection, id);
    await deleteDoc(taskRef);
  }

  async getById(id: string): Promise<CreateFriendDto> {
    const friendRef = doc(this.firebaseService.FriendsCollection, id);
    const friendDoc = await getDoc(friendRef);

    if (friendDoc.exists()) {
      return friendDoc.data() as CreateFriendDto;
    } else {
      throw new Error(`Friend with ID ${id} does not exist.`);
    }
  }

  async getall(): Promise<CreateFriendDto[]> {
    const querySnapshot: QuerySnapshot = await getDocs(
      this.firebaseService.FriendsCollection,
    );
    const tasks: CreateFriendDto[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      tasks.push(doc.data() as CreateFriendDto);
    });
    return tasks;
  }
}
