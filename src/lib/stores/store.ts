import { writable } from "svelte/store";

import type { User } from "~/lib/mock/data/user";

export const user = writable<User>()