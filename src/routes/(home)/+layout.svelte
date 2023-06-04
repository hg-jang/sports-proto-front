<script lang="ts">
	import './home-layout.css';
	
	import { user } from '~/lib/stores/store';

	import type { User } from '~/lib/mock/data';

	let me: User;
	
	user.subscribe((u) => me = u)
</script>

<div class="home">
	<nav class="bg-violet-500 text-white">
		<div class="wrapper flex flex-wrap items-center justify-between px-4">
			<a href="/" class="flex items-center">
				<span class="text-2xl text-white font-semibold whitespace-nowrap">
					Logo
				</span>
			</a>
			<ul class="flex m-0 p-0 list-none">
				<li class="hover:bg-orange-300 cursor-pointer">
					<a href="/" class="block p-4 text-inherit">
						Home
					</a>
				</li>
				<li class="hover:bg-orange-300 cursor-pointer">
					<a href="/" class="block p-4 text-inherit">
						Menu 1
					</a>
				</li>
				<li class="hover:bg-orange-300 cursor-pointer">
					<a href="/" class="block p-4 text-inherit">
						Menu 2
					</a>
				</li>
				{#if !me}
					<li class="hover:bg-orange-300 cursor-pointer">
						<a href="/login" class="block p-4 text-inherit">
							Log In
						</a>
					</li>
				{:else}
					<li class="hover:bg-orange-300 cursor-pointer">
						<a href="/name" class="block p-4 text-inherit">
							{me.name}
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</nav>

	<main class="p-16">
		<div class="wrapper">
			<slot />
		</div>
	</main>
 
	<footer class="p-16 bg-violet-400">
		<div class="wrapper">
			It's Footer
		</div>
	</footer>
</div>
