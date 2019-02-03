<template>
<div><p v-if="error.statusCode === 404">404 error</p><p v-else>another error</p></div>
</template>

<script>
export default {
  props: ['error']
}
</script>