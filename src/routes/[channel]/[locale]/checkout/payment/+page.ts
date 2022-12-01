/*    
    import {
		KQL_CheckoutPaymentCreate,
		KQL_RemoveProductFromCheckout,
		KQL_CheckoutAddPromoCode,
		KQL_CheckoutComplete
	} from '$lib/graphql/_kitql/graphqlStores';
	import { getCheckoutToken, cartLength, cart, checkout } from '../../../../../store/stores';
*/

	export const load  = async ({ params, url }) => {
		const locale = params.locale;
		url.searchParams.get('token');

		return {
			
				//locale
			
		};
	};