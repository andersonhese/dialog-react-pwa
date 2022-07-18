import { UserRepository } from '../../../infrastructure/repository/user.repository';

const userRepository = new UserRepository();

module.exports = {
  Query: {
    list: (_: any, args: { name: string }) => userRepository.list(args.name),
    getUserData: (_: any, args: { id: string }) => userRepository.getUserData(args.id)
  }
};