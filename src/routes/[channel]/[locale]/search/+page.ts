/*    
    import { KQL_ProductCollection } from '$lib/graphql/_kitql/graphqlStores';
	import { OrderDirection, ProductOrderField } from '$lib/graphql/_kitql/graphqlTypes';
*/
	export const load = async ({ fetch, params, url }) => {
		
        const channel = params.channel;
		const locale = params.locale;
		const search = url.searchParams.get('q');
		const sortDirectionOrder = url.searchParams.get('sd');
		const sortFiledName = url.searchParams.get('sn');

		//get collections
		/*await KQL_ProductCollection.queryLoad({
			fetch,
			variables: {
				channel: channel,
				locale: locale,
				searchFilter: search,
				directionOrder: sortDirectionOrder,
				fieldName: sortFiledName
			},
			settings: { policy: 'network-only' }
		});*/
        return {
            //search,
			//sortDirectionOrder,
			//sortFiledName
		};
	};
