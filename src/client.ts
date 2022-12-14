import { HoudiniClient, type RequestHandlerArgs } from '$houdini';

async function fetchQuery({
	fetch,
	text = '',
	variables = {},
	metadata,
}: RequestHandlerArgs) {
	const url = 'https://demo.saleor.io/graphql/';
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
