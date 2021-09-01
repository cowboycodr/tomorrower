<template>
  <router-view/>
</template>

<style>
html, body {
  --font-color: hsl(0, 0%, 20%);

  display: flex;
  justify-content: center;

  padding: 0;
  margin: 0;

  min-height: 100vh;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--font-color);
}
</style>