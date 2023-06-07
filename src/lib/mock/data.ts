export type User = {
  id: number
  email: string
  password: string
  name: string
  sex: 'M' | 'F'
  profile_url: string
  clubs: number[]
}

export type Club = {
  id: number

  name: string
  
  description: string

  tags: string[]
  
  /** 클럽 공개(검색 허용) */
  public: boolean

  /** 가입 방식 */
  join_type: 'Anyone' | 'Allowed'

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
    profile_url: '',
    clubs: [1, 2],
  }, {
    id: 2,
    email: 'apple@gmail.com',
    password: '1234',
    name: 'Iphone23',
    sex: 'F',
    profile_url: '',
    clubs: [1, 2],
  }
]

export const CLUBS: Club[] = [
  {
    id: 1,
    name: '상도동 흑염룡들',
    description: '우리는 상도동의 흑염룡을 각자의 오른팔에 봉인하여 수호하고 있다.',
    tags: ['용사', '전설', '상도동'],
    public: true,
    join_type: 'Anyone',
    master: 1,
    admins: [1],
    members: [1, 2]
  }, {
    id: 2,
    name: 'Club KOREA',
    description: '자랑스런 한국인들(애국 보수 아님).',
    tags: ['한국', 'KOREA', '2030'],
    public: true,
    join_type: 'Allowed',
    master: 2,
    admins: [2],
    members: [1, 2]
  }
]

// 

/**
 * 대쉬보드 서브 메뉴
 */
export type SubMenu = {
  menu: string
  path: string
  color: BUTTON_TYPE
}

const BUTTON_TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ERROR: 'error',
} as const
type BUTTON_TYPE = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE]