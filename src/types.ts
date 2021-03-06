import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createUpdootLoader } from './util/createUpdootLoader';
import { createUserLoader } from './util/createUserLoader';
import { createPostLoader } from './util/createPostLoader';
import { createCommentLoader } from './util/createCommentLoader';
import { createReplyLoader } from './util/createReplyLoader';

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
  postLoader: ReturnType<typeof createPostLoader>;
  commentLoader: ReturnType<typeof createCommentLoader>;
  replyLoader: ReturnType<typeof createReplyLoader>;
};
