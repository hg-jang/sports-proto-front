<script lang="ts">
  import DashboardLayout from "~/components/custom-layouts/dashboard-layout.svelte";
  import DashboardSubMenu from "~/components/navs/dashboard-sub-menu.svelte";

  import type { SubMenu } from "~/lib/mock/data";

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
</script>

<DashboardLayout>
  <DashboardSubMenu slot="subMenus" subMenuGroups={subMenuGroups} />

  <slot slot="content" />
</DashboardLayout>
