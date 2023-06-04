export type User = {
  id: number
  email: string
  password: string
  name: string
  sex: 'M' | 'F'
  profileUrl: string
}

export const USERS: User[] = [
  {
    id: 1,
    email: 'guldan@gmail.com',
    password: '1234',
    name: 'Gooldan',
    sex: 'M',
    profileUrl: '',
  }, {
    id: 2,
    email: 'apple@gmail.com',
    password: '1234',
    name: 'Iphone23',
    sex: 'F',
    profileUrl: '',
  }
]