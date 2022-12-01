
    //import { KQL_CategoryPaths } from '$lib/graphql/_kitql/graphqlStores';

	
	export const load = async ({ fetch, params }) => {
		const channel = params.channel;

		//get categories
		/*await KQL_CategoryPaths.queryLoad({
			fetch,
			variables: {
				channel
			},
			settings: { policy: 'cache-and-network' }
		});*/
		return {};
	};