<template>
    <div>12124587</div>
</template>

<script setup lang="ts">
const test = 1; //报错
console.log(test);

function name(params?: number) {
    console.log(params, '1212154');
}
name();
</script>
<style scoped></style>
