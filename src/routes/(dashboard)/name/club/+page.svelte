<script lang="ts">
  import PlainInput from "~/components/inputs/plain-input.svelte";
  import ClubCard from "~/components/cards/club-card.svelte";
  import Badge from "~/components/badges/badge.svelte";

  import type { PageData } from "./$types";

  export let data: PageData

  let clubName = ''
</script>

<div class="grid grid-rows-1 grid-cols-12 gap-4 h-full text-black">
  <div class="col-span-4 p-2 rounded-md dark:bg-slate-300">
    <div class="mb-4">
      <PlainInput id='clubName' label='클럽 검색' placeholder='클럽명' bind:value={clubName} />
    </div>

    <div class="flex flex-wrap gap-2">
      <Badge text='상도동' color='blue' />
      <Badge text='2030' color='orange' />
      <Badge text='3040' color='red' />
      <Badge text='테친놈들' color='green' />
      <Badge text='테린이들' color='yellow' />
    </div>
  </div>

  <div class="col-span-8 p-4 rounded-md dark:bg-slate-300">
    <ul class="flex flex-col gap-4 m-0 p-0 list-none">
      {#each data.clubs as club}
        <ClubCard name={club.name} description={club.description} />
      {/each}
    </ul>
  </div>
</div>