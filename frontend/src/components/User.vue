<template>
  <div
    class="w-full flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-row">
      <div class="">
        <p class="px-6 py-3 text-md">{{ user.id }}</p>
      </div>
      <div class="flex-1">
        <p class="px-6 py-3 text-md">{{ user.first_name }}</p>
      </div>
      <div class="flex-1 ml-2">
        <p class="px-6 py-3 text-md">{{ user.last_name }}</p>
      </div>
      <div class="basis-1/4 ml-2 px-6 py-3">
        <button>
          <svg
            @click="deleteUser(user.id)"
            class="h-8 w-8 text-red-500 hover:text-red-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
      <div class="basis-1/4 ml-2 px-6 py-3">
        <router-link :to="{ path: '/user/' + user.id }">
          <svg
            class="h-8 w-8 text-green-500"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
            />
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      id: Number,
      first_name: String,
      last_name: String,
    },
  },
  setup(props, ctx) {
    function deleteUser(userId) {
      ctx.emit("deleteUser", userId);
    }
    return {
      deleteUser,
    };
  },
};
</script>

<style scoped lang="scss"></style>
