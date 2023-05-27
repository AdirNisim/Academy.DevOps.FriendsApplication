import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendsController } from './friends/friends.controller';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [FriendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
