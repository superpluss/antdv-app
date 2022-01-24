<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <!-- Sign In Form Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

        <!-- Sign In Form -->
        <a-form
          id="components-form-demo-normal-login"
          class="login-form"
          ref="formRef"
          :model="formState"
          :rules="rules"
          :hideRequiredMark="true"
        >
          <a-form-item name="email" class="mb-10" label="Email" :colon="false">
            <a-input v-model:value="formState.email" placeholder="Email" />
          </a-form-item>
          <a-form-item name="password" class="mb-5" label="Password" :colon="false">
            <a-input
              v-model:value="formState.password"
              type="password"
              placeholder="Password"
            />
          </a-form-item>
          <a-form-item name="rememberMe" class="mb-10">
            <a-switch v-model:checked="formState.rememberMe" />Remember Me
          </a-form-item>
          <a-form-item>
            <a-button
              @click="onSubmit"
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
              >SIGN IN</a-button
            >
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->

        <p class="font-semibold text-muted">
          Don't have an account?
          <router-link to="/sign-in" class="font-bold text-dark">Sign Up</router-link>
        </p>
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="/images/img-signin.jpg" />
      </a-col>
      <!-- Sign In Image Column -->
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { UnwrapRef, toRaw, ref, reactive } from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

interface FormState {
  email: string;
  password: string;
  // Binded model property for "Sign In Form" switch button for "Remember Me" .
  rememberMe: boolean;
}

const formRef = ref();
const formState: UnwrapRef<FormState> = reactive({
  email: "",
  password: "",
  rememberMe: true,
});

const rules = {
  email: [{ required: true, message: "Please input your email!" }],
  password: [{ required: true, message: "Please input your password!" }],
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
    })
    .catch((error: ValidateErrorEntity<FormState>) => {
      console.log("error", error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
