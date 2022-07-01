/* Amplify Params - DO NOT EDIT
	API_READAPP_ARTICLETABLE_ARN
	API_READAPP_ARTICLETABLE_NAME
	API_READAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_READAPP_GRAPHQLAPIIDOUTPUT
	API_READAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = (event) => {
// 	console.log(`EVENT: ${JSON.stringify(event)}`);

// 	// event.Records.forEach((record) => {
// 	// 	console.log(record.eventID);
// 	// 	console.log(record.eventName);
// 	// 	console.log("DynamoDB Record: %j", record.dynamodb);
// 	// });
// 	return Promise.resolve("Successfully processed DynamoDB record");
// };

const axios = require("axios");

const GRAPHQL_ENDPOINT = process.env.API_READAPP_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_READAPP_GRAPHQLAPIKEYOUTPUT;

const graphqlQuery = {
	query: `
		query {
			listArticles {
				items {
					id
					title
					author
				}
			}
		}`,
};

exports.handler = async (event) => {
	// console.log(GRAPHQL_ENDPOINT);
	// console.log(GRAPHQL_API_KEY);
	let statusCode = 200;
	let body;
	let response;

	try {
		response = await axios({
			url: GRAPHQL_ENDPOINT,
			method: "post",
			headers: {
				"x-api-key": GRAPHQL_API_KEY,
			},
			data: graphqlQuery,
		});
		body = response.data;
		console.log("==============");
		body.data.listArticles.items.forEach((item) => {
			console.log("ID: ", item.id);
			console.log("Title: ", item.title);
			console.log("Author: ", item.author);
			console.log("------------");
		});
		console.log("==============");
	} catch (error) {
		statusCode = 400;
		body = {
			errors: [
				{
					status: response.status,
					message: error.message,
					stack: error.stack,
				},
			],
		};
	}

	return {
		statusCode,
		body: JSON.stringify(body),
	};
};
