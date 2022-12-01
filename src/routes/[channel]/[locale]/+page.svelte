<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';

	import { GQL_CollectionPaths } from '$houdini';
	import { browser } from '$app/environment';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ CollectionPaths } = data);

	$: browser && GQL_CollectionPaths.fetch();

	console.log($GQL_CollectionPaths.data);
</script>

<svelte:head>
	<title>Home - Saleor SvelteKit Storefront</title>
</svelte:head>

<!--
<div class="min-h-screen bg-gray-100 align-middle flex flex-col flex-grow pt-[60px]">
	<p class="text-4xl font-bold font-poppins tracking-tight">
		{JSON.stringify($CollectionPaths.data)}
	</p>
</div>
-->

<div class="min-h-screen bg-gray-100 align-middle flex flex-col flex-grow pt-[60px]">
	<div class="mb-5">
		{JSON.stringify($CollectionPaths.data)}
		{JSON.stringify($GQL_CollectionPaths.data)}
		<!--{#if $KQL_CollectionPaths.isFetching}
			<i class="absolute fa-regular fa-3x fa-circle-notch fa-spin -top-1 my-[354px] mx-[48%]" />
		{:else if $KQL_CollectionPaths.errors}
			{#each $KQL_CollectionPaths.errors as error}
				<p>{error.message}</p>
			{/each}
		{:else}
			<div
				class="bg-cover bg-top mb-20"
				style="background-image: url({$KQL_CollectionPaths.data?.collections?.edges[0]?.node?.backgroundImage?.url});"
			>
				<div class="bg-[#2b91cc] bg-opacity-50">
					<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
						<div class="text-left pb-4">
							<h1 class="text-4xl font-bold font-poppins tracking-tight text-white">
								Welcome to the Saleor <br />SvelteKit Storefront
							</h1>
						</div>
					</div>
				</div>
			</div>
			<main>
				<div class="max-w-7xl mx-auto px-8">
					{#each $KQL_CollectionPaths.data?.collections?.edges.slice(0, 2) || [] as collection}
						<div class="pb-20">
							<h1 class="text-3xl font-semibold font-poppins tracking-tight text-gray-900 pb-10">
								{collection?.node?.name}
							</h1>
							<div>
								<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
									{#each collection?.node?.products?.edges.slice(0, 4) || [] as product}
										<ProductCard {product} />
									{/each}
								</ul>
							</div>
							<div class="flex flex-row-reverse p-4">
								<a
									sveltekit:prefetch
									href={`/default-channel/EN_US/collection/${collection?.node?.slug}`}
									class="font-poppins text-[#2b91cc]"><p>View More →</p></a
								>
							</div>
						</div>
					{/each}
				</div>
			</main>
		{/if}-->
	</div>
</div>
