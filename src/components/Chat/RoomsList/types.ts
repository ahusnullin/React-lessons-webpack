import { iMessage } from 'src/components/Chat/Message/types';

export interface iRoom {
  id: string;
  name: string;
  messages: iMessage[];
}
