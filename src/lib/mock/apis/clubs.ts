import { CLUBS, type Club } from "../data";

/**
 * 모든 클럽 가져오기
 */
export function GET_CLUBS() {
  return new Promise<Club[]>((resolve, reject) => {
    resolve(CLUBS);
  })
}

/**
 * club id로 클럽 가져오기
 */
export function GET_CLUB_BY_ID(clubId: number) {
  return new Promise<Club>((resolve, reject) => {
    const club = CLUBS.find((c) => c.id === clubId)
    if(club) {
      resolve(club)
    } else {
      reject('Not found')
    }
  })
}

/**
 * user id로 내가 가입한 클럽의 id와 name 가져오기
 */
export function GET_MY_CLUBS(userId: number) {
  return new Promise<Pick<Club, 'id' | 'name'>[]>((resolve, reject) => {
    const clubs = CLUBS.filter((c) => c.members.includes(userId))
    if(clubs) {
      resolve(clubs)
    } else {
      reject('Not found')
    }
  })
}