<script lang="ts">
  import DashboardLayout from "~/components/custom-layouts/dashboard-layout.svelte";
  import DashboardSubMenu from "~/components/navs/dashboard-sub-menu.svelte";
  import PlainInput from "~/components/inputs/plain-input.svelte";
  import ClubCard from "~/components/cards/club-card.svelte";
  
  import type { SubMenu } from "~/lib/mock/data";

  import type { PageData } from "./$types";

  export let data: PageData

  const subMenuGroups: SubMenu[][] = [
    [
      {
        menu: '클럽 가입',
        path: '/club',
        color: 'primary',
      }, {
        menu: '클럽 생성',
        path: '/club/new',
        color: 'primary',
      }
    ]
  ]
  let clubName = ''
</script>

<div class="grid grid-rows-1 grid-cols-12 gap-4 h-full text-black">
  <div class="col-span-4 p-2 rounded-md dark:bg-slate-300">
    <PlainInput id='clubName' label='클럽 검색' placeholder='클럽명' bind:value={clubName} />
  </div>

  <div class="col-span-8 p-4 rounded-md dark:bg-slate-300">
    <ul class="flex flex-col gap-4 m-0 p-0 list-none">
      {#each data.clubs as club}
        <ClubCard name={club.name} description={club.description} />
      {/each}
    </ul>
  </div>
</div>