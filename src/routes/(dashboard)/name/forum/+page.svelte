<script lang="ts">
  import DashboardSubMenu from "~/components/navs/dashboard-sub-menu.svelte";
	import DashboardLayout from "~/components/custom-layouts/dashboard-layout.svelte";

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

<DashboardLayout>
	<DashboardSubMenu slot='subMenus' subMenuGroups={subMenuGroups} />
	
	<div slot="content">
		<h1>Forum page</h1>
	</div>
</DashboardLayout>