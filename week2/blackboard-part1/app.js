const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log("ARTICLES =>", data);
	});
}
displayAllArticles()

function displayArticleByName(articleName) {
	db.findOne({ name: articleName }).then(data => {
	console.log("ARTICLE =>", data);
	})
 };

displayArticleByName("Aovopro")

function displayArticleByID(articleId) {
	db.findById(articleId).then(data => {
		console.log("ARTICLE =>", data);
	   });	
}

displayArticleByID("425ea9ca38d6a3776994651e")

function updateArticlePrice(articleId, newPrice) {
	db.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}
updateArticlePrice("425ea9ca38d6a3776994651e", 2000)

function updateArticleStock(articleId, newStock) {
	db.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}
	 
updateArticleStock('425ea9ca38d6a3776994651e', 300)

function resetStocks() {
	db.updateMany({}, { stock: 0 }).then(()=> {
	 console.log("stock réaprovisonné")
});}
resetStocks();

// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};