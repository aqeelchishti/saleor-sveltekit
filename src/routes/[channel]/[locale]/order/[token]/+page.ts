/*    
import { KQL_OrderDetailsByToken } from '$lib/graphql/_kitql/graphqlStores';
	import { getState } from '$lib/saleorClient';
*/

	export const load = async ({ fetch, params }) => {
		const token = params.token;

		/*let userState = getState();

		//get all products of category
		await KQL_OrderDetailsByToken.queryLoad({
			fetch,
			variables: {
				token: token
			},
			settings: { policy: 'network-only' }
		});*/

		return {
			/*props: {
				userState
			}*/
		};
	};