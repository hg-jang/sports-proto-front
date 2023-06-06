import { GET_CLUBS } from '~/lib/mock/apis/clubs';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const clubs = await GET_CLUBS()

  return {
    clubs,
  }
}