<script lang="ts">
	//import saleor_logo from '../../../../assets/images/saleor.svg';

	/*import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let userState: any;

	onMount(async () => {
		if (userState?.authenticated) {
			await goto('/');
		}
	});*/
</script>

<div class="min-h-screen bg-cover bg-center bg-gray-100">
	<div class="flex justify-center">
		<div class="bg-gray-100 min-h-screen w-100 flex justify-center items-center">
			<!--{#if !userState?.authenticated && !$tokenIsValid}
				<div>
					<a href="/">
						<div class="mt-px group block h-16 w-[152px] ml-[74px] mb-10 relative">
							<span>
								<img
									alt="Saleor logo"
									src={saleor_logo}
									style=""
									class="justify-center text-center"
								/>
							</span>
						</div>
					</a>
					<slot />
				</div>
			{:else}
				<i class="absolute fa-regular fa-3x fa-circle-notch fa-spin -top-1 my-[330px] mx-[42.5%]" />
			{/if}
			-->
		</div>
	</div>
</div>
