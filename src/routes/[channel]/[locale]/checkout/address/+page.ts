    /*import {
		KQL_CheckoutBillingAddressUpdate,
		KQL_CheckoutEmailUpdate,
		KQL_CheckoutShippingAddressUpdate,
		KQL_RemoveProductFromCheckout
	} from '$lib/graphql/_kitql/graphqlStores';
	import { getCheckoutToken, cartLength, cart, checkout } from '../../../../../store/stores';
	import { getState } from '$lib/saleorClient';
	import { CountryCode } from '$lib/graphql/_kitql/graphqlTypes';
*/

	export const load = async ({ params, url }) => {
		//let userState = getState();
		const locale = params.locale;
		url.searchParams.get('token');

		return {
			
			//locale,
			//userState
			
		};
	};