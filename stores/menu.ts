import { defineStore } from "pinia";

export const useMenu = defineStore("menu", () => {
  const menu = [
    {
      path: "/admin",
      icon: "HomeFilled",
      title: "Home",
    },
    {
      path: "/admin/kategori",
      icon: "Memo",
      title: "Kategori",
    },
  ];
  return { menu };
});