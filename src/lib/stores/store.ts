import { writable } from "svelte/store";

import type { User } from "~/lib/mock/data";

export const user = writable<User>()