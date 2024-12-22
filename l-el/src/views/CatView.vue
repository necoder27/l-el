<template>
  <div class="flex flex-col items-center justify-center w-screen my-4">
    <span class="text-5xl select-none">
      <strong>Mistoffelees</strong>
    </span>
    <div class="flex flex-wrap m-8 select-none justify-between">
      <div v-for="img in imgPaths">
        <img :src="img.path" :alt="img.altText" class="max-h-80 my-4 rounded-xl shadow-lg shadow-black" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import catUnderChristmasTree from "@/assets/imgs/catImgs/catUnderChristmasTree.jpeg";
  import catSleepingInBed from "@/assets/imgs/catImgs/catSleepingInBed.jpeg";
  import rainbowCatPaw from "@/assets/imgs/catImgs/rainbowCatPaw.jpeg";
  import catSleepingInBed2 from "@/assets/imgs/catImgs/catSleepingInBed2.jpeg";
  import closeUpCatSleeping from "@/assets/imgs/catImgs/closeUpCatSleeping.jpeg";
  import happyGat from "@/assets/imgs/catImgs/happyGat.jpeg";
  import catSleepingOnFloor from "@/assets/imgs/catImgs/catSleepingOnFloor.jpeg";
  import catLookingOutWindow from "@/assets/imgs/catImgs/catLookingOutWindow.jpeg";
  import perfectBall from "@/assets/imgs/catImgs/perfectBallCat.jpeg";

  interface paths {
    path: string;
    altText: string;
  }

  const imgPaths: paths[] = [
    { path: catUnderChristmasTree, altText: "cat sitting under the christmas tree" },
    { path: catSleepingInBed, altText: "cat sleeping in bed adorably" },
    { path: rainbowCatPaw, altText: "cat paw with light rainbow:D" },
    { path: catSleepingInBed2, altText: "cat sleeping in bed 2" },
    { path: closeUpCatSleeping, altText: "close up of cat sleeping" },
    { path: happyGat, altText: "smiling cat" },
    { path: catSleepingOnFloor, altText: "cat snoozing on the floor" },
    { path: catLookingOutWindow, altText: "cat looking out of a window" },
    { path: perfectBall, altText: "ball of cat" },
  ]
</script>

<style scoped>

</style>
