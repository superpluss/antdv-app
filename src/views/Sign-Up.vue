<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div class="sign-up-header" style="background-image: url('/images/bg-signup.jpg')">
      <div class="content">
        <h1 class="mb-5">Sign Up</h1>
        <p class="text-lg">
          Use these awesome forms to login or create new account in your project for free.
        </p>
      </div>
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Form -->
    <a-card
      :bordered="false"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">Register With</h5>
      </template>
      <div class="sign-up-gateways">
        <a-button>
          <img src="/images/logos/logos-facebook.svg" />
        </a-button>
        <a-button>
          <img src="/images/logos/logo-apple.svg" />
        </a-button>
        <a-button>
          <img src="/images/logos/Google__G__Logo.svg.png" />
        </a-button>
      </div>
      <p class="text-center my-25 font-semibold text-muted">Or</p>
      <a-form
        id="components-form-demo-normal-login"
        class="login-form"
        ref="formRef"
        :model="formState"
        :rule="rules"
      >
        <a-form-item name="name" class="mb-10">
          <a-input v-model:value="formState.name" placeholder="Name"></a-input>
        </a-form-item>
        <a-form-item name="email" class="mb-10">
          <a-input v-model:value="formState.email" placeholder="Email"></a-input>
        </a-form-item>
        <a-form-item name="password" class="mb-5">
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          ></a-input>
        </a-form-item>
        <a-form-item name="remember" class="mb-10">
          <a-checkbox v-model:checked="formState.remember">
            I agree the
            <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            @click="onSubmit"
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
            >SIGN UP</a-button
          >
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Already have an account?
        <router-link to="/sign-in" class="font-bold text-dark">Sign In</router-link>
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script setup lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { ref, reactive, UnwrapRef, toRaw } from "vue";

interface FormState {
  name: string;
  email: string;
  password: string;
  // Binded model property for "Sign In Form" switch button for "Remember Me" .
  remember: boolean;
}

const formRef = ref();
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  email: "",
  password: "",
  remember: true,
});

const rules = {
  name: [{ required: true, message: "Please input your name!" }],
  email: [{ required: true, message: "Please input your email!" }],
  remember: [{ valuePropName: "checked", initialValue: true }],
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
</script>

<style lang="scss"></style>
