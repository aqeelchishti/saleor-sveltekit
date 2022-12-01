/*    
    import { KQL_CollectionBySlug } from '$lib/graphql/_kitql/graphqlStores';
*/

	export const load = async ({ fetch, params }) => {
		const channel = params.channel;
		const locale = params.locale;
		const slug = params.slug;

		//get all products of collection
		/*await KQL_CollectionBySlug.queryLoad({
			fetch,
			variables: {
				channel,
				locale,
				slug
			},
			settings: { policy: 'network-only' }
		});*/
		return {};
	};