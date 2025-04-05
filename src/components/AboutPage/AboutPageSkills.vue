<script setup lang="ts">
  import VueJSLogo from "@/assets/imgs/logos/vuejs.png";
  import HTMLLogo from "@/assets/imgs/logos/256px-HTML5_Badge.svg.png";
  import CSSLogo from "@/assets/imgs/logos/256px-CSS3_logo.svg.png";
  import TailwindCSSLogo from "@/assets/imgs/logos/tailwindcss-mark.d52e9897.svg"
  import TypeScriptLogo from "@/assets/imgs/logos/typescript-design-assets/ts-logo-256.png";
  import JavaScriptLogo from "@/assets/imgs/logos/JavaScript-logo.png";
  import PythonLogo from "@/assets/imgs/logos/python-logo-only.png";
  import FastAPILogo from "@/assets/imgs/logos/fastapi.png";
  import PyTorchLogo from "@/assets/imgs/logos/pytorch-logo.png";
  import JavaLogo from "@/assets/imgs/logos/Java-Logo.png";
  import MySQLLogo from "@/assets/imgs/logos/logo-mysql-170x115.png";

  interface ISkillItem {
    name: string;
    image: string;
  }

  const skillItems: ISkillItem[] = [
    { name: "Vue.js", image: VueJSLogo},
    { name: "HTML", image: HTMLLogo},
    { name: "CSS", image: CSSLogo},
    { name: "TailwindCSS", image: TailwindCSSLogo},
    { name: "TypeScript", image: TypeScriptLogo},
    { name: "JavaScript", image: JavaScriptLogo},
    { name: "Python", image: PythonLogo},
    { name: "FastAPI", image: FastAPILogo},
    { name: "PyTorch", image: PyTorchLogo},
    { name: "Java", image: JavaLogo},
    { name: "MySQL", image: MySQLLogo},
  ]
</script>

<template>
  <div class="flex flex-col items-center w-full xl:w-[65%]">
    <span class="text-xl lg:text-3xl w-full mb-5"><strong>skills</strong></span>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-1 xl:gap-4 w-full">
      <div v-for="item in skillItems" class="flex flex-nowrap items-center p-1 pl-0 text-lg lg:text-2xl rounded-md ">
        <img :src="item.image" alt="" class="h-4 xs:h-5 lg:h-7  pr-1 lg:pr-3">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
