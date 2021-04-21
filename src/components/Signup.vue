<template>
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <v-text-field
                        v-model="firstname"
                        :error-messages="nameErrors"
                        label="First Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>

                    </div>
                    <div class="col-sm-6">
                      <v-text-field
                        v-model="lastname"
                        :error-messages="nameErrors"
                        label="Last Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="form-group">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                      >
                      </v-text-field>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <v-text-field
                          autocomplete="current-password"
                          :value="userPassword"
                          label="Enter password"
                          :counter="14"
                          hint="Your password passed! Password rules are not meant to be broken!"
                          :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (value1 = !value1)"
                          :type="value1 ? 'password' : 'text'"
                          :rules="[rules.userPassword]"
                          @input="_=>userPassword=_"
                      ></v-text-field>
                    </div>
                    <div class="col-sm-6">
                      <v-text-field
                          autocomplete="current-password"
                          :value="confirmPassword"
                          label="Confirm password"
                          :counter="14"
                          hint="Your password passed! Password rules are not meant to be broken!"
                          :append-icon="value2 ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (value2 = !value2)"
                          :type="value2 ? 'password' : 'text'"
                          :rules="[rules.confirmPassword]"
                          @input="_=>confirmPassword=_"
                      ></v-text-field>
                    </div>
                  </div>
                   <v-btn
                      color="success"
                      class="mr-4 btn btn-primary btn-user btn-block s-btn"
                      @click="submit"
                      >
                      Sign Up
                      </v-btn>
                </form>
                <hr />
                <div class="text-center">
                  <a class="small" href="login.html"
                    >Already have an account? Login!</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      userPassword: "",
      confirmPassword: "",
      valid: true,
      value1: true,
      value2: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      }
    })
  };
</script>