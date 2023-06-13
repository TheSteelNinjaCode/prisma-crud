import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../server/db/prisma-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const users = await prisma.users.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { login, first_name, last_name, display_name, email, password } = req.body;
    const post = await prisma.users.create({
      data: {
        login,
        first_name,
        last_name,
        display_name,
        email,
        password,
      },
    });
    res.status(201).json(post);
  } else {
    res.status(405).end();
  }
}