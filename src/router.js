import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router);



export default new Router({
  mode: "history",
  routes: [
	{
		path: "/",
		alias: "/tutorials",
		name: "tutorials",
		component: () => import("./components/TutorialsList")
	},
	{
		path: "/tutorials/:id",
		name: "tutorial-details",
		component: ()=> import("./components/Tutorial")
	},
	{
		path: "/add",
		name: "add",
		component: ()=> import("./components/AddTutorial")
	},
	{
		path: "/index",
		name: "index",
		component: ()=> import("./components/Index")
	},
	{
		path: "/login",
		name: "login",
		component: ()=> import("./components/Login")
	},
	{
		path: "/signup",
		name: "signup",
		component: ()=> import("./components/Signup")
	}
  ]
});