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