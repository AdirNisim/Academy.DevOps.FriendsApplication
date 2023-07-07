export interface Friend {
  firstName: string;
  lastName: string;
  id: string;
}

export class CreateFriendDto {
  id: string;
  readonly firstName: string;
  readonly lastName: string;
}
