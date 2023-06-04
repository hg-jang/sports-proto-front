export type User = {
  id: number
  email: string
  password: string
  name: string
  sex: 'M' | 'F'
  profileUrl: string
}

export type Club = {
  id: number

  name: string
  
  description: string

  /** 마스터(클럽당 1명) */
  master: number

  /** 관리자 목록(다수) */
  admins: number[]

  /** 회원 목록(마스터, 관리자 포함) */
  members: number[]
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

export const CLUBS: Club[] = [
  {
    id: 1,
    name: '상도동 흑염룡들',
    description: '우리는 상도동의 흑염룡을 각자의 오른팔에 봉인하여 수호하고 있다.',
    master: 1,
    admins: [1],
    members: [1, 2]
  }, {
    id: 2,
    name: 'Club KOREA',
    description: '자랑스런 한국인들(애국 보수 아님).',
    master: 2,
    admins: [2],
    members: [1, 2]
  }
]