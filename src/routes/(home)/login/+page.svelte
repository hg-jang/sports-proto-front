<script lang="ts">
  import { goto } from "$app/navigation";
  
  import { user } from "~/lib/stores/store";
  import { LOG_IN } from "~/lib/mock/apis/auth";
  
  let email = ''
  let password = ''

  async function login() {
    try {
      const login = await LOG_IN(email, password);

      user.set(login);

      goto('/', { replaceState: true })
    } catch(e) {
      alert('No user');
    }
  }
</script>

<input type="email" placeholder="email" bind:value={email} />
<input type="password" placeholder="password" bind:value={password} />

<button on:click={login}>로그인</button>