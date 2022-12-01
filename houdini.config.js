/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    apiUrl: "https://demo.saleor.io/graphql/",
    plugins: {
        "houdini-svelte": {
            "client": "./src/client.ts"
        }
    },
    /*schemaPollHeaders: {
		Authentication: "Bearer XYZ",
	},*/
    scalars: {
		DateTime: {
			type: 'Date',
			unmarshal(val) {
				return new Date(val)
			},
			marshal(date) {
				return date.getTime()
			}
        },
        /*UUID: {                 
            type: "YourType_UUID"
        },
        JSONString: {               
            type: "YourType_JSONString"  
        },
        PositiveDecimal: {                 
            type: "YourType_PositiveDecimal" 
        },
        Date: {                  
            type: "YourType_Date"
        }*/
	}
}

export default config;