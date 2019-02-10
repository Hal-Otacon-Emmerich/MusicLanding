<template>
  <section>
    <div>
      <h3>Find your music preferences</h3>
      <v-btn dark round color="red accent-4">
        <v-icon>fab fa-youtube</v-icon> search
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  name: "youtubeMusic",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
section{
  height: 400px;
  background-image: url(../../../assets/festeval.jpg);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  div{
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 400px;
    h3{
      color: #ddd;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      margin-bottom: 10px;
    }
    button {
      i {
        padding-right: 5px;
      }
    }
  }
}
</style>
