import { User } from '../interface/user.interface'

export class UserRepository {

  async list(name?: string): Promise<User[]> {
    const data: User[] = require('../database/db.json')

    if (name) {

      const regexText = `.*${name.trim().replaceAll(' ', '.*.*')}.*`
      const regex = new RegExp(regexText, 'gi');

      return data.filter((u: User) => {
        return u.name.match(regex)
      })
    }

    return Promise.resolve(data)
  }

  async getUserData(id: string): Promise<User | null> {
    const data: User[] = require('../database/db.json')

    if (!id) {
      return null
    }

    let u = data.filter((u: User) => {
      return u._id === id
    })

    if (!u.length) {
      return null
    }

    return u[0]
  }
}