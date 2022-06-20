<template>
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <h2 class="text-2xl font-bold mt-2 mb-4 p-5">Edit user</h2>
    <div
      class="w-full flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="flex flex-row text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <div class="flex-none">
          <p class="px-6 py-3 font-bold">Id</p>
        </div>
        <div class="flex-1">
          <p class="px-6 py-3 font-bold">First name</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Last name</p>
        </div>
        <div class="flex-1 ml-2">
          <p class="px-6 py-3 font-bold">Email</p>
        </div>
        <div class="flex-1 ml-2"></div>
      </div>
      <div class="flex flex-row">
        <div class="">
          <p class="px-6 py-3 text-md">{{ state.user.id }}</p>
        </div>
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
          <button
            @click="editData"
            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
export default {
  name: "EditUser",
  setup() {
    const route = useRoute();
    const state = reactive({
      user: {},
    });
    const router = useRouter();
    const internalInstance = getCurrentInstance();
    const api = internalInstance.appContext.config.globalProperties.$api;

    async function fetchUserData(userId) {
      const { data } = await axios.get(`${api}/api/users/${userId}`);
      state.user = data;
      console.log(data);
    }
    async function editData() {
      const { data } = await axios.put(
        `${api}/api/users/${state.user.id}`,
        state.user
      );
      router.push("/users");
    }
    watch(
      () => route.params.id,
      async (newId) => {
        await fetchUserData(newId);
      }
    );
    onMounted(() => {
      fetchUserData(route.params.id);
    });

    return {
      state,
      fetchUserData,
      editData,
    };
  },
};
</script>
