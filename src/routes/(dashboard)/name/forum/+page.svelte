<script>
  import DashboardSubMenu from "~/components/navs/dashboard-sub-menu.svelte";

  const subMenuGroups = [
		[
			{
				text: '자유게시판',
				path: '/board',
        color: 'primary',
			}, {
				text: 'Q & A',
				path: '/question',
        color: 'primary',
			}
		], [
			{
				text: '자유게시판',
				path: '/board',
        color: 'primary',
			}, {
				text: 'Q & A',
				path: '/question',
        color: 'primary',
			}
		]
	]
</script>

<DashboardSubMenu slot='subMenus' subMenuGroups={subMenuGroups} />

<h1>Forum page</h1>