<script lang="ts">
  import forumIcon from "~/lib/icons/forum_black_24dp.svg";
  import rankIcon from "~/lib/icons/leaderboard_black_24dp.svg";
  import teamIcon from "~/lib/icons/groups_black_24dp.svg";

  import logo from "~/lib/images/test.png";

  import type { LayoutData } from "./$types"

  export let data: LayoutData;
</script>

<nav
  class="absolute top-0 bottom-0 left-0 z-50 h-full w-[90px] bg-violet-300 overflow-hidden"
>
  <ul class="m-0 p-0">
    <!-- logo -->
    <li class="mb-2">
      <a href="/name" class="logo flex items-center">
        <img src={logo} alt="" class="w-[45px] h-[45px] rounded-full" />
        <span class="pl-[15px] ml-[10px] text-[18px]">Name</span>
      </a>
    </li>

    <!-- dashboard menus -->
    <li>
      <a href="/name/forum" class="flex items-center">
        <img
          src={forumIcon}
          alt=""
          class="w-[70px] h-[40px] text-[20px] text-center"
        />
        <span class="ml-[10px]">포럼</span>
      </a>
    </li>
    <li>
      <a href="/name/rank" class="flex items-center">
        <img
          src={rankIcon}
          alt=""
          class="w-[70px] h-[40px] text-[20px] text-center"
        />
        <span class="ml-[10px]">랭크</span>
      </a>
    </li>

    <hr />

    <li>
      <a href="javascript:;" class="flex items-center">
        <img
          src={teamIcon}
          alt=""
          class="w-[70px] h-[40px] text-[20px] text-center"
        />
        <span class="ml-[10px]">내 클럽들</span>
      </a>
    </li>
    {#each data.myClubs as myClub}
      <li>
        <a href="/name/club/{myClub.id}" class="flex items-center">
          <span
            class="flex justify-center itesm-center w-8 h-8 mx-[19px] bg-white text-xl rounded-full"
          >
            {myClub.name[0]}
          </span>
          <span class="ml-[10px]">{myClub.name}</span>
        </a>
      </li>
    {/each}
    <li>
      <a href="/name/club" class="flex items-center">
        <span
          class="flex justify-center itesm-center w-8 h-8 mx-[19px] bg-white text-3xl rounded-full"
        >
          +
        </span>
        <span class="ml-[10px]">새로운 클럽</span>
      </a>
    </li>
  </ul>
</nav>

<div
  class="dashboard flex flex-col gap-4 p-4 ml-[90px] h-screen dark:bg-slate-100"
>
  <slot />
</div>

<style>
  nav {
    /* width: 280px; */
    transition: width 0.2s linear;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }

  nav:hover {
    width: 280px;
    transition: all 0.5s ease;
  }

  a {
    width: 300px;
    padding: 10px;
    font-size: 14px;
  }

  a:hover {
    background-color: #eee;
  }

  .logo {
    display: flex;
    margin: 10px 0 0 10px;
    transition: all 0.5s ease;
    text-align: center;
  }
</style>
