import {User} from "../user/user.types";

export type PostType = {
  id: string;
  content: string;
  media_url?: string;
  author: User;
  date: Date;

  responses?: Array<PostType>;
}
