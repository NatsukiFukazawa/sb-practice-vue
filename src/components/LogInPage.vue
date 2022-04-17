<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="userid"
        :counter="10"
        :rules="useridRules"
        label="userid"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="pass"
        :rules="passRules"
        label="password"
        required
      ></v-text-field>

  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn
        color="warning"
        @click="home"
      >
        homepage
      </v-btn>
    </v-form>
</template>

<script>
import getUser from '../api/getUser'

export default {
    name: 'login',
    
    data: () => ({
    valid: true,
    userid: '',
    useridRules: [
      v => !!v || 'userid is required',
      v => (v && v.length <= 10) || 'userid must be less than 10 characters',
    ],
    pass: '',
    passRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 10) || 'Passwword must be less than 10 characters',
    ],
  }),
    methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    home () {
      this.$router.push('/home')
    },
    getUser(){
        getUser()
    }
  },
}
</script>

<style>

</style>