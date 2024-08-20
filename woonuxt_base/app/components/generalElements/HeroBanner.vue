<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/hero-4.jpg"
      alt="Hero image"
      loading="eager"
      sizes="100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none p-8">
      <h1 class="text-3xl font-bold md:text-4xl lg:text-6xl w-full lg:w-1/2 mb-6">{{ $t('messages.hero.title') }}</h1>
      <h2 class="text-lg font-bold lg:text-3xl mb-16">{{ $t('messages.hero.description') }}</h2>
      <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-800" to="/products">{{ $t('messages.hero.button') }}</NuxtLink>
    </div>
  </div>
</template>
