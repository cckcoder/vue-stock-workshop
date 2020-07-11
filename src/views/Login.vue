<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width:400px;">
        <v-img src="@/assets/login_header.jpg" height="200px"/>
          <v-card-text>
            <v-form>
              <!-- Username -->
              <v-text-field name="username" label="Username" id="username">
              </v-text-field>

              <!-- Password -->
              <v-text-field name="password" label="Password" id="password">
              </v-text-field>

              <v-row class="justify-space-between px-3">
                <v-btn color="primary">text</v-btn>
                <v-btn>text</v-btn>
              </v-row>

            </v-form>
          </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style>

</style>
