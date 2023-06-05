<script lang="ts">
  import FilledButton from '~/components/buttons/filled-button.svelte';
  import type { SubMenu } from '~/lib/mock/data';

  export let subMenuGroups: SubMenu[][]
</script>

<div class="flex gap-4">
  {#each subMenuGroups as subMenuGroup, idx}
    <div class="flex gap-2">
      {#each subMenuGroup as subMenu}
        <FilledButton color={subMenu.color} text={subMenu.menu} size='xs' />
      {/each}
    </div>

    {#if idx !== subMenuGroups.length - 1}
      <div class="my-1 w-0.5 bg-black"></div>
    {/if}
  {/each}
</div>