<template>
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <div class="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <div
        class="flex flex-row text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <div class="">
          <p class="px-6 py-3 font-bold">Id</p>
        </div>
        <div class="flex-1">
          <p class="px-6 py-3 font-bold">First name</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Last name</p>
        </div>
        <div class="basis-1/4 ml-2">
          <p class="px-6 py-3 font-bold">Delete</p>
        </div>
        <div class="basis-1/4 ml-2">
          <p class="px-6 py-3 font-bold">Edit</p>
        </div>
      </div>
      <User
        v-for="user in state.users"
        :key="user.id"
        :user="user"
        @deleteUser="toggleDeleteUser"
      />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
import axios from "axios";
import User from "../components/User.vue";
// @ is an alias to /src
export default {
  name: "Users",
  components: { User },

  setup() {
    const state = reactive({
      users: [],
    });
    const internalInstance = getCurrentInstance();
    const api = internalInstance.appContext.config.globalProperties.$api;
    // const axios = axios;

    async function fetchUsers() {
      const { data } = await axios.get(`${api}/api/users`);
      state.users = data;
    }
    async function toggleDeleteUser(userId) {
      if (confirm(`Do you really want to delete user #${userId}?`)) {
        const { data } = await axios.delete(`${api}/api/users/${userId}`);
        state.users = data;
      }
    }
    onMounted(() => {
      fetchUsers();
      console.log();
    });

    return {
      state,
      fetchUsers,
      toggleDeleteUser,
    };
  },
};
</script>
