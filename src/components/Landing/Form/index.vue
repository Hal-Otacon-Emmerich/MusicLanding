<template>
  <section>
    <h3>Contact us</h3>
    <v-form>
      <v-flex md6 sm12 xs12>
        <v-layout column>
          <v-flex xs5>
            <v-layout row wrap>
              <v-flex xs6>
                <v-text-field
                  color="#e23872"
                  name="name"
                  dark
                  label="Your name"
                ></v-text-field>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-text-field
                  color="#e23872"
                  name="email"
                  dark
                  label="Your email"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs5>
            <v-text-field
              color="#e23872"
              name="subject"
              dark
              label="Subject"
            ></v-text-field>
          </v-flex>
          <v-flex xs5>
            <v-textarea
              color="#e23872"
              label="Your message"
              dark
              rows="3"
              name="message"
            ></v-textarea>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-btn dark color="#e23872">Send</v-btn>
    </v-form>
  </section>
</template>
<script>
export default {
  name: "Form",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  section{
    background-image: url(../../../assets/form.jpg);
    background-size: cover;

    padding: 25px 100px;
    h3{
      color: #e23872;
      text-transform: uppercase;
      font-size: 32px;
    }
  }
  @media(max-width: 768px){
    section{
      padding: 25px;
    }
  }
</style>
