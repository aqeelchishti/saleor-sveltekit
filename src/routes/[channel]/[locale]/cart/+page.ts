    /*import {
		KQL_CheckoutLineUpdate,
		KQL_RemoveProductFromCheckout
	} from '$lib/graphql/_kitql/graphqlStores';
	import { getCheckoutToken, cartLength, cart, checkout } from '../../../../store/stores';
	import { getState } from '$lib/saleorClient';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
*/
	export const load = async ({ params }) => {
		//let userState = getState();
		const locale = params.locale;

		/*if (browser) {
			if (!cart && !getCheckoutToken) {
				await goto('/default-channel/EN_US/cart');
			}
		}*/

		return {
			/*props: {
				locale,
				userState
			}*/
		};
	};