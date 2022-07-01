/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createArticle } from "./graphql/mutations";
import { listArticles } from "./graphql/queries";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { title: "", author: "" };

const App = () => {
	const [formState, setFormState] = useState(initialState);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetchArticles();
	}, []);

	function setInput(key, value) {
		setFormState({ ...formState, [key]: value });
	}

	async function fetchArticles() {
		try {
			const articleData = await API.graphql(graphqlOperation(listArticles));
			const articles = articleData.data.listArticles.items;
			setArticles(articles);
		} catch (err) {
			console.log("error fetching articles");
		}
	}

	async function addArticle() {
		try {
			if (!formState.title || !formState.author) return;
			const article = { ...formState };
			setArticles([...articles, article]);
			setFormState(initialState);
			await API.graphql(graphqlOperation(createArticle, { input: article }));
		} catch (err) {
			console.log("error creating article:", err);
		}
	}

	return (
		<div style={styles.container}>
			<h2>Amplify Articles</h2>
			<input
				onChange={(event) => setInput("title", event.target.value)}
				style={styles.input}
				value={formState.title}
				placeholder="Title"
			/>
			<input
				onChange={(event) => setInput("author", event.target.value)}
				style={styles.input}
				value={formState.author}
				placeholder="Author"
			/>
			<button style={styles.button} onClick={addArticle}>
				Create Article
			</button>
			{articles.map((article, index) => (
				<div key={article.id ? article.id : index} style={styles.article}>
					<p style={styles.articleTitle}>{article.title}</p>
					<p style={styles.articleAuthor}>{article.author}</p>
				</div>
			))}
		</div>
	);
};

const styles = {
	container: {
		width: 400,
		margin: "0 auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: 20,
	},
	article: { marginBottom: 15 },
	input: {
		border: "none",
		backgroundColor: "#ddd",
		marginBottom: 10,
		padding: 8,
		fontSize: 18,
	},
	articleTitle: { fontSize: 20, fontWeight: "bold" },
	articleAuthor: { marginBottom: 0 },
	button: {
		backgroundColor: "black",
		color: "white",
		outline: "none",
		fontSize: 18,
		padding: "12px 0px",
	},
};

export default App;
