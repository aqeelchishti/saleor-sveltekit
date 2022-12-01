//import { KQL_CollectionPaths } from '$lib/graphql/_kitql/graphqlStores';
import { load_CollectionPaths } from "$houdini";

import type { Load, LoadEvent } from '@sveltejs/kit';

//export const load = async (
    /*{
        fetch,
        params
    }*/
//) => {
		//const channel = params.channel;

		//get collections
		/*await KQL_CollectionPaths.queryLoad({
			fetch,
			variables: {
				channel
			},
			settings: { policy: 'cache-and-network' }
		});*/

//		return {};
//	};


export const load: Load = async (event: LoadEvent) => {

	//const channel = params.channel;

	//const getCollectionPaths = new CollectionPathsStore();

	//await CollectionPathsStore.fetch({ event });

	return {
		//channel: params.channel,
		//getCollectionPaths
		...await load_CollectionPaths({ event })
	};
}

