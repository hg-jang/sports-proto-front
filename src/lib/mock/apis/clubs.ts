import { CLUBS } from "../data";

/**
 * 모든 클럽 가져오기
 */
export function GET_CLUBS() {
  return new Promise((resolve, reject) => {
    resolve(CLUBS);
  })
}