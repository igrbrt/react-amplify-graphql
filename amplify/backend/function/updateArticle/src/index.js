/* Amplify Params - DO NOT EDIT
	API_READAPP_ARTICLETABLE_ARN
	API_READAPP_ARTICLETABLE_NAME
	API_READAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_READAPP_GRAPHQLAPIIDOUTPUT
	API_READAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require("axios");

const GRAPHQL_ENDPOINT = process.env.API_READAPP_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_READAPP_GRAPHQLAPIKEYOUTPUT;

const graphqlQuery = {
	query: `
		mutation($input: UpdateArticleInput!) {
			updateArticle
			(
				input: $input
			){
				id
        title
        author
			}
		}`,
	variables: {
		input: {
			id: "97f59999-8c5f-4808-a768-ab12e916980b",
			author: "Igor Barreto Rodrigues",
		},
	},
};

exports.handler = async (event, context, callback) => {
	let statusCode = 200;
	let body;
	let response;
	try {
		response = await axios({
			url: GRAPHQL_ENDPOINT,
			method: "post",
			headers: {
				"x-api-key": GRAPHQL_API_KEY,
				"Content-Type": "application/json",
			},
			data: graphqlQuery,
		});

		body = response.data;
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
