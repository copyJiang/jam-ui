<template>
  <div>
    <jamRow :gutter="20">
      <jamCol :span="8">1</jamCol>
      <jamCol :span="8">2</jamCol>
      <jamCol :span="8">3</jamCol>
    </jamRow>
    <!-- <jamRow :gutter="20" align="end">1111111</jamRow>
    <jamRow :gutter="20" justify="center">1111111</jamRow> -->
  </div>
</template>
<script>
export default {
  name: "jam-row",
};
</script>