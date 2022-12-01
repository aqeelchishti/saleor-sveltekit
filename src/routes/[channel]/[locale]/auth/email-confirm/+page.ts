//import { KQL_ConfirmAccount } from '$lib/graphql/_kitql/graphqlStores';


	export const load = async ({ url }) => {
		const email = url.searchParams.get('email');
		const token = url.searchParams.get('token');

		//get collections
		/*await KQL_ConfirmAccount.mutate({
			variables: {
				email: email,
				token: token
			}
		});*/
		return {
			
				email
			
		};
	};