import { Request, Response } from 'express';
import UserService from '../services/user.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  
  try {  
    const token = await UserService.login(username, password);

    return res.status(200).json({ token });
  } catch (erro) {
    const { message } = (erro as Error);
    
    return res.status(401).json({ message });
  }
}
  
export default {
  login,
};