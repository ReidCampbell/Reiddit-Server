import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createUserLoader } from './util/createUserLoader';
import { createCommentLoader } from './util/createCommentLoader';
import { createTicketLoader } from './util/createTicketLoader';

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  commentLoader: ReturnType<typeof createCommentLoader>;
  ticketLoader: ReturnType<typeof createTicketLoader>;
};
