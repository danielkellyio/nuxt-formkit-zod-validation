<script setup lang="ts">
import { createZodPlugin } from "@/utils/index";
import { registerValidator } from "@/validators";
const form = ref({
  email: "",
  password: "",
  age: 0,
});

const [zodPlugin, submitHandler] = createZodPlugin(
  registerValidator,
  async (formData) => {
    // fake submit handler, but this is where you
    // do something with your valid data.
    await new Promise((r) => setTimeout(r, 2000));
    alert("Form was submitted!");
    console.log(formData);
  }
);
</script>
<template>
  <div>
    <FormKit type="form" :plugins="[zodPlugin]" @submit="submitHandler">
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
