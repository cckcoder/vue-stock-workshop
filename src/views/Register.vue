<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width:400px;">
        <v-img class="white--text align-end" src="@/assets/login_header.jpg" height="200px">
          <v-card-title>
            Register
          </v-card-title>
        </v-img>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <!-- Username -->
              <v-text-field
                name="username"
                label="Username"
                id="username"
                v-model="account.username"
                :rules="usernameRules"
                >
              </v-text-field>

              <!-- Password -->
              <v-text-field
                name="password"
                v-model="account.password"
                label="Password"
                id="password"
                :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
                @click:append="isShowPassword = !isShowPassword"
                :type="isShowPassword ? 'text' : 'password'"
                counter
                :rules="passwordRules"
              >

              </v-text-field>

              <v-row class="justify-space-between px-3 pt-5">
                <v-btn @click.prevent="$router.back()">Cancel</v-btn>
                <v-btn type="submit" color="success">Confirm</v-btn>
              </v-row>

            </v-form>
          </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: ""
      },
      usernameRules: [ v1 => !!v1 || "Username is required" ],
      passwordRules: [
        v1 => !!v1 || "Password is required",
        v2 => !!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) ||
        'Minimum eight characters, at least one letter, one number and one special character:'
      ]
    }
  },
  methods: {
    submit() {
      console.log(JSON.stringify(this.account))
    }
  }
}
</script>

<style>

</style>
