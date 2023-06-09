import { user } from "~/lib/stores/store"
import type { User } from "~/lib/mock/data"
import { GET_MY_CLUBS } from "~/lib/mock/apis/clubs"

let me: User

user.subscribe((u) => me = u)

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  try {
    const myClubs = await GET_MY_CLUBS(me.id);

    return {
      myClubs,
    }
  } catch(e) {
    return {
      myClubs: [],
    }
  }

}