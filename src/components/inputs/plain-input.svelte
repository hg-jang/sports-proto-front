<script lang="ts">
  export let id = 'id';
  export let label = 'label';
  export let placeholder = 'text me';
  export let required = false;
  export let value = '';
</script>

<div>
  <label
    for={id}
    class="
      block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900
    "
  >
    {label}
  </label>
  <input
    type="text"
    id={id}
    class="
      bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
    "
    placeholder={placeholder}
    required={required}
    bind:value={value}
  >
</div>