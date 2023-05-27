import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [FriendsController],
  providers: [FriendsService, FirebaseService],
})
export class FriendsModule {}
