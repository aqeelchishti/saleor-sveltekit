/*
    import {
		KQL_CheckoutShippingMethodUpdate,
		KQL_RemoveProductFromCheckout
	} from '$lib/graphql/_kitql/graphqlStores';
	import { getCheckoutToken, cartLength, cart, checkout } from '../../../../../store/stores';
*/
	export const load = async ({ params, url }) => {
		const locale = params.locale;
		url.searchParams.get('token');

		return {
			
				//locale
			
		};
	};