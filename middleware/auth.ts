export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client){
        const isLogin = JSON.parse(localStorage.getItem("is_login")!);
        if (to.path !== "/auth/login" && !isLogin) navigateTo('/auth/login');
        navigateTo('/')
    }
  })