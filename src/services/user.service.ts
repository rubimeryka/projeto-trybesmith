import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import UserModel from '../database/models/user.model';

async function login(username: string, password: string): Promise<string | null> {
  const user = (await UserModel.findOne({ where: { username } }));
  
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    throw new Error('Username or password invalid');
  }

  return jwt.sign({
    username: user.dataValues.username, 
    password: user.dataValues.password,
  });
}
  
export default { login };