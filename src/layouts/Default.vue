<!-- 
	This is the default layout, used in sign-in and sign-up pages.
 -->

<template>
	<div>
		<!-- Default Layout -->
		<a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
			<!-- Layout Header ( Navbar ) -->
			<DefaultHeader></DefaultHeader>
			<!-- / Layout Header ( Navbar ) -->

			<!-- Page Content -->
			<a-layout-content>
				<router-view />
			</a-layout-content>
			<!-- / Page Content -->

			<!-- Layout Footer -->
			<DefaultFooter></DefaultFooter>
			<!-- / Layout Footer -->
		</a-layout>
		<!-- / Default Layout -->
	</div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultHeader from '@/components/Headers/DefaultHeader.vue';
import DefaultFooter from '@/components/Footers/DefaultFooter.vue';

const route = useRoute()
// Sets layout's element's class based on route's meta data.
const layoutClass = computed(() => {
	return route.meta.layoutClass;
})
</script>