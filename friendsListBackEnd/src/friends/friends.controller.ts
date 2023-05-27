import { Body, Controller, Post, Get } from '@nestjs/common';
import { Friend, CreateFriendDto } from 'src/interface/Types';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendservice: FriendsService) {}

  @Post()
  create(@Body() NewFriend: Friend): string {
    this.friendservice.create(NewFriend);
    return `Done`;
  }

  @Get()
  find(@Body() Id: string): Promise<CreateFriendDto[]> {
    return this.friendservice.getall();
  }
}
