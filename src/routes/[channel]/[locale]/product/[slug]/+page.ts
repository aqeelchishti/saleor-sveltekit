    /*import {
		KQL_ProductBySlug,
		KQL_CheckoutAddProductLine,
		KQL_CreateCheckout,
		KQL_CheckoutByToken
	} from '$lib/graphql/_kitql/graphqlStores';
	import { getState } from '$lib/saleorClient';
	import { get } from 'svelte/store';
	import { getCheckoutToken, cartLength, cart, checkout } from '../../../../../store/stores';*/

	export const load = async ({ fetch, params, url }) => {
		//let userState = getState();

		const channel = params.channel;
		const locale = params.locale;
		const slug = params.slug;
		//const selectedVariantId = url.searchParams.get('vid');
        
        /*
        const selectedVariant =
			get(KQL_ProductBySlug).data?.product?.variants?.find((v) => v?.id === selectedVariantId) ||
			'';

		//get product detail
		await KQL_ProductBySlug.queryLoad({
			fetch,
			variables: {
				channel: channel,
				locale: locale,
				slug: slug
			},
			settings: { policy: selectedVariant ? 'cache-first' : 'network-only' }
		});

		let setToken: any;
		getCheckoutToken.subscribe((val) => (setToken = val));

		await KQL_CheckoutByToken.queryLoad({
			fetch,
			variables: {
				checkoutToken: setToken,
				locale: locale
			}
		});*/

		return {
			/*props: {
				selectedVariantId,
				selectedVariant,
				channel,
				locale,
				userState
			}*/
		};
	};