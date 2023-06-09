import { error } from '@sveltejs/kit';
import { GET_CLUB_BY_ID } from '~/lib/mock/apis/clubs.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.clubId) {
    try {
      const club = await GET_CLUB_BY_ID(parseInt(params.clubId))

      return {
        club: club,
      };
    } catch(e) {
      throw error(404, 'Not found')
    }
  }

  throw error(404, 'Not found');
}