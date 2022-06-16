import { UserInterface } from 'src/common-types';

export interface iMessagesList {
  [key: string]: iMessage[];
}

export interface iMessage {
  author: UserInterface;
  text: string;
}
