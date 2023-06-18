import { hash } from 'bcrypt';

export const passwordHash = async (password: string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};
