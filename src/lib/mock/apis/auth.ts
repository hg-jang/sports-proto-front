import { USERS } from '~/lib/mock/data/user'
import type { User } from '~/lib/mock/data/user'

export function LOG_IN(email: string, password: string) {
  
  const promise = new Promise<User>((resolve, reject) => {
    const user = USERS.find((user) => user.email === email && user.password === password)

    if(user) {
      resolve(user)
    } else {
      reject({
        code: 404,
        message: 'Not found'
      });
    }
  })

  return promise
}