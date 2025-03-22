<template>
  <div class="flex flex-col items-center justify-center w-screen my-4">
    <span class="text-3xl xl:text-5xl select-none px-10">
      hi, i'm
      <span class="underline decoration-gray-500"><strong>Mistoffelees</strong></span>!
    </span>
    <div class="flex flex-wrap gap-7 p-8 pt-2 xl:pt-8 w-full justify-center select-none"><!--flex flex-wrap justify-between-->
      <div v-for="img in imgPaths" class="w-full lg:w-auto">
        <img :src="img.path" :alt="img.altText" class="lg:max-h-60 xl:max-h-80 w-full lg:w-auto my-2 rounded-sm shadow-lg shadow-[#171717]" />
      </div>
      <video class="lg:max-h-60 xl:max-h-80 w-full lg:w-auto my-2 rounded-sm shadow-lg shadow-[#171717]" controls>
        <source :src="catYawn">
      </video>
      <video class="lg:max-h-60 xl:max-h-80 w-full lg:w-auto my-2 rounded-sm shadow-lg shadow-[#171717]" controls>
        <source :src="exposedStomach">
      </video>
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
  import cutestCat from "@/assets/imgs/catImgs/cutestCat.jpeg";
  import catSideProfile from "@/assets/imgs/catImgs/catSideProfile.jpeg";
  import sleepyCat from "@/assets/imgs/catImgs/sleepyCat.jpeg";
  import catBedSun from "@/assets/imgs/catImgs/catOnBedInSunshine.jpeg";
  import clingy from "@/assets/imgs/catImgs/catClingingToHand.jpeg";
  import jumpingUpLeg from "@/assets/imgs/catImgs/catJumpingUpLeg.jpeg";
  import catYawn from "@/assets/imgs/catImgs/catYawning.mov";
  import exposedStomach from "@/assets/imgs/catImgs/catExposingStomachForPets.mov";

  interface paths {
    path: string;
    altText: string;
  }

  const imgPaths: paths[] = [
    { path: catUnderChristmasTree, altText: "cat sitting under the christmas tree" },
    { path: catSleepingInBed, altText: "cat sleeping in bed adorably" },
    { path: rainbowCatPaw, altText: "cat paw with light rainbow:D" },
    { path: catSleepingInBed2, altText: "cat sleeping in bed 2" },
    { path: happyGat, altText: "smiling cat" },
    { path: catSleepingOnFloor, altText: "cat snoozing on the floor" },
    { path: catLookingOutWindow, altText: "cat looking out of a window" },
    { path: perfectBall, altText: "ball of cat" },
    { path: catSideProfile, altText: "cat side profile" },
    { path: cutestCat, altText: "cat cutely looking at camera"},
    { path: sleepyCat, altText: "sleepy cat" },
    { path: closeUpCatSleeping, altText: "close up of cat sleeping" },
    { path: catBedSun, altText: "cat on bed in sunshine" },
    { path: clingy, altText: "cat clinging to hand"},
    { path: jumpingUpLeg, altText: "cat jumping up leg" },
  ]
</script>

<style scoped>

</style>
