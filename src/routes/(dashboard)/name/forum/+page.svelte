<script lang="ts">
  import DashboardSubMenu from "~/components/navs/dashboard-sub-menu.svelte";
  import type { SubMenu } from "~/lib/mock/data";

  const subMenuGroups: SubMenu[][] = [
		[
			{
				menu: '자유게시판',
				path: '/board',
        color: 'primary',
			}, {
				menu: 'Q & A',
				path: '/question',
        color: 'primary',
			}
		], [
			{
				menu: '자유게시판',
				path: '/board',
        color: 'primary',
			}, {
				menu: 'Q & A',
				path: '/question',
        color: 'primary',
			}
		]
	]
</script>

<DashboardSubMenu slot='subMenus' subMenuGroups={subMenuGroups} />

<h1>Forum page</h1>