<script lang="ts">
  /** 클럽 명 */
  export let name: string;

  /** 클럽 설명 */
  export let description: string;

</script>

<li class="p-2 rounded dark:bg-white">
  <div class="flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img
        class="w-8 h-8 rounded-full"
        src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        alt="Neil image"
      />
    </div>
    <div class="flex-1 min-w-0">
      <p class="m-0 text-sm font-medium text-gray-900 truncate dark:text-black">
        {name}
      </p>
      <p class="m-0 text-sm text-gray-500 truncate dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
</li>
