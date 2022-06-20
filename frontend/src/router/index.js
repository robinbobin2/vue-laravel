import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import EditUser from "../views/EditUser.vue";
import AddUser from "../views/AddUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user/:id",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/user/add",
    name: "AddUser",
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
