<script setup lang="ts">
import { createZodPlugin } from "@/utils/index";
import { registerValidator } from "@/validators";

const form = ref({
  email: "",
  password: "",
  age: 0,
});

// TODO: use the validator to validate the form client side

function submitHandler(formData: typeof form.value) {
  console.log(formData);
}
</script>
<template>
  <div>
    <FormKit type="form" @submit="submitHandler">
      <FormKit
        type="text"
        label="Email"
        v-model="form.email"
        name="email"
        :delay="1000"
      />
      <FormKit
        type="password"
        label="Password"
        v-model="form.password"
        name="password"
      />
      <FormKit type="number" label="Age" v-model="form.age" name="age" />
    </FormKit>
  </div>
</template>
