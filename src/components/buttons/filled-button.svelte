<script lang="ts">
  /** 버튼 글자 */
  export let text: string;
  
  /** 버튼 색상  */
  export let color: 'primary' | 'secondary' | 'success' | 'error';
 
  /** 글자 크기 */
  export let size: 'xs' | 'sm' | 'base' | 'lg' = 'sm'

  export let handler: (...params: any) => any;

  let bgColor: string = 'purple';

  switch(color) {
    case 'primary':
      bgColor = 'purple';
      break;
    case 'secondary':
      bgColor = 'blue';
      break;
    case 'success':
      bgColor = 'green';
      break;
    case 'error':
      bgColor = 'red'
      break;
    default:
      bgColor = 'purple';
      break;
  }
</script>

<button
  type="button"
  class="
    px-4 py-2 font-medium rounded-lg text-{size} text-white bg-{bgColor}-500 border-none
    focus:outline-none hover:bg-{bgColor}-700 focus:ring-4 focus:ring-{bgColor}-300
    dark:bg-{bgColor}-600 dark:hover:bg-{bgColor}-700 dark:focus:ring-{bgColor}-900
  "
  on:click={handler}
>
  {text}
</button>