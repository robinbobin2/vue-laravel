<template>
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <h2 class="text-2xl font-bold mt-2 mb-4 p-5">Add a new user</h2>
    <div
      class="w-full flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="flex flex-row text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <div class="flex-1">
          <p class="px-6 py-3 font-bold">First name</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Last name</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Email</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Password</p>
        </div>
        <div class="flex-1 ml-2"></div>
      </div>
      <div class="flex flex-row">
        <div class="flex-1">
          <input
            type="text"
            v-model="state.user.first_name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex-1 ml-2">
          <input
            v-model="state.user.last_name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex-1 ml-2">
          <input
            type="email"
            v-model="state.user.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex-1 ml-2">
          <input
            type="password"
            v-model="state.user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex-1 ml-2">
          <button
            id="createUser"
            @click="createUser"
            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Create a user
          </button>
        </div>
      </div>
    </div>
    <p v-if="state.error" class="font-bold text-sm uppercase text-red-500">
      {{ state.error }}
    </p>
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
// @ is an alias to /src
export default {
  name: "AddUser",
  setup() {
    const state = reactive({
      user: {},
      error: "",
    });
    const internalInstance = getCurrentInstance();
    const api = internalInstance.appContext.config.globalProperties.$api;
    const router = useRouter();
    // const axios = axios;

    async function createUser() {
      state.error = "";
      const { data } = await axios.post(`${api}/api/users/`, state.user);
      if (!data.error) {
        router.push("/users");
      } else {
        state.error = data.error;
      }
    }

    return {
      state,
      createUser,
    };
  },
};
</script>
