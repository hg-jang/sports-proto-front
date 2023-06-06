<script lang="ts">
  import { goto } from '$app/navigation';

  import FilledButton from '~/components/buttons/filled-button.svelte';
  import type { SubMenu } from '~/lib/mock/data';

  export let subMenuGroups: SubMenu[][]

  function subMenuButtonHandler(path: string) {
    if(path.startsWith('/')) {
      path = path.substring(1);
    }
    
    goto(`/name/${path}`)
  }
</script>

<div class="flex gap-4">
  {#each subMenuGroups as subMenuGroup, idx}
    <div class="flex gap-2">
      {#each subMenuGroup as subMenu}
        <FilledButton color={subMenu.color} text={subMenu.menu} size='xs' handler={() => subMenuButtonHandler(subMenu.path)} />
      {/each}
    </div>

    {#if idx !== subMenuGroups.length - 1}
      <div class="my-1 w-0.5 bg-black"></div>
    {/if}
  {/each}
</div>