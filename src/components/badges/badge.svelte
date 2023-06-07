<script lang="ts">
  export let text: string;
  export let color: string;
</script>

<span
  class="
    px-2 py-0.5
    bg-{color}-100 text-blue-800 text-xs font-medium
    rounded break-keep
    dark:bg-{color}-900 dark:text-blue-300
  "
>
  {text}
</span>