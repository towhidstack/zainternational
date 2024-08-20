<script setup>
const { locales, locale, setLocaleCookie } = useI18n();

// Check if running in a browser environment
if (typeof window !== 'undefined') {
  const storedLocale = localStorage.getItem('selectedLocale');
  if (storedLocale) {
    locale.value = storedLocale;
  } else {
    localStorage.setItem('selectedLocale', locale.value);
  }

  watch(locale, (newLocale) => {
    if (newLocale) {
      setLocaleCookie(newLocale);
      localStorage.setItem('selectedLocale', newLocale); // Store the selected language
    }
  });
}
</script>

<template>
  <select v-model="locale" aria-label="Language switcher" class="bg-white">
    <option v-for="locale in locales" :key="locale" :value="locale.code" v-html="locale.name" />
  </select>
</template>
