<script lang="ts">
	//import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<!--
<svelte:head>
	<title>{$KQL_CollectionBySlug?.data?.collection?.name || ''} - Saleor SvelteKit Storefront</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 align-middle flex flex-col flex-grow pt-[60px] pb-20">
	{#if $KQL_CollectionBySlug.isFetching}
		<i class="absolute fa-regular fa-3x fa-circle-notch fa-spin -top-1 my-[330px] mx-[48%]" />
	{:else if $KQL_CollectionBySlug.errors}
		{#each $KQL_CollectionBySlug.errors as error}
			<p>{error.message}</p>
		{/each}
	{:else}
		<header class="mb-4 mt-4">
			<nav class="max-w-7xl mx-auto px-8 mt-2">
				<ol class="flex items-center">
					<li>
						<a href="/default-channel/EN_US/" class="font-poppins text-md">Home</a>
					</li>
					<li class="flex items-center px-1 sm:px-2 opacity-25">
						<i class="fa-regular fa-angle-right fa-md px-1" />
					</li>
					<li>
						<a href="/default-channel/EN_US/" class="font-poppins text-md">Collections</a>
					</li>
					<li class="flex items-center px-1 sm:px-2 opacity-25">
						<i class="fa-regular fa-angle-right fa-md px-1" />
					</li>
					<li class="font-poppins text-md">
						{$KQL_CollectionBySlug?.data?.collection?.name}
					</li>
				</ol>
			</nav>

			<div class="max-w-7xl mx-auto px-8">
				<div class="container mx-auto h-20 flex items-center">
					<div class="sm:ml-10 text-gray-50 text-center sm:text-left">
						<h1 class="text-3xl font-semibold text-black mb-2 font-poppins">
							{$KQL_CollectionBySlug?.data?.collection?.name}
						</h1>
						<p class="text-lg inline-block sm:block" />
					</div>
				</div>
			</div>
		</header>
		<main>
			<div class="max-w-7xl mx-auto px-8">
				<div>
					<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{#each $KQL_CollectionBySlug.data?.collection?.products?.edges || [] as product}
							<ProductCard {product} />
						{/each}
					</ul>
				</div>
			</div>
		</main>
	{/if}
</div>
-->
