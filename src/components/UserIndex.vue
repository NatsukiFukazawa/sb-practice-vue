<template>
  <v-container>
    <div>user index</div>

    <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, i) in data" :key="i">
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.password }}</td>
        </tr>
      </tbody>
    </table>
    <v-btn @click="getUsers()">get users</v-btn>

    <br />

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="id"
        :counter="10"
        label="userid"
        required
      ></v-text-field>

      <v-text-field v-model="name" label="name" required></v-text-field>

      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-text-field v-model="password" label="password" required></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="register">
        Register
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
const url =
  "http://ec2-54-169-163-71.ap-southeast-1.compute.amazonaws.com:8080/sb_practice_back/";

export default {
  data: () => ({
    data: [],
    valid: true,
    id: 0,
    name: "",
    email: "",
    password: "",
  }),
  methods: {
    getUsers() {
      axios
        .get(url + "return_db_data")
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
          console.log(this.data);
          this.$set(this.data, 0, res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register() {
      axios
        .post(url + "users", {
          id: this.id,
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.getUsers();
        });
    },
  },
};
</script>

<style></style>
