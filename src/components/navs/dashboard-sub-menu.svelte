<script lang="ts">
  import FilledButton from '~/components/buttons/filled-button.svelte';

  export let subMenuGroups: {
    text: string
    path: string
    color: string
  }[][]

  // const subMenuGroups = [
	// 	[
	// 		{
	// 			text: '자유게시판',
	// 			path: '/board',
	// 		}, {
	// 			text: 'Q & A',
	// 			path: '/question',
	// 		}
	// 	], [
	// 		{
	// 			text: '자유게시판',
	// 			path: '/board',
	// 		}, {
	// 			text: 'Q & A',
	// 			path: '/question',
	// 		}
	// 	]
	// ]
</script>

<div class="flex gap-4">
  {#each subMenuGroups as subMenuGroup, idx}
    <div class="flex gap-2">
      {#each subMenuGroup as subMenu}
        <FilledButton color='primary' text={subMenu.text} size='xs' />
      {/each}
    </div>

    {#if idx !== subMenuGroups.length - 1}
      <div class="my-1 w-0.5 bg-black"></div>
    {/if}
  {/each}
</div>