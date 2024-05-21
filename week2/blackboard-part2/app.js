// Add your own requires here 😉
require("./models/connection")


/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}



//** Users
const User = require('./models/users');


function displayAllUsers() {
	User.find().then(data => {
		console.log('USER =>', data);
	   });
 }
 displayAllUsers()

function deleteUser(userId) { 
	User.deleteOne({_id : userId}, {}).then( data => {
		console.log(`User deleted for ${userId}`)
})
}
deleteUser("65e1b02b81ee626582591d87")
//** Orders
const Order = require('./models/orders');

function displayAllOrders() { 
	Order.find().then(data => {
		console.log('ORDER =>', data);
	   });

}
displayAllOrders()

function updateOrderPaymentStatus(orderId, isPaid) {
	Order.updateOne(
		{_id : orderId }, 
		{ isPaid: isPaid }
		).then(() => {
		console.log(`payement updated for ${orderId}`)
		})
};
updateOrderPaymentStatus("65e1b03c81ee626582591d91", true)

function deleteOrder(orderId) {
	Order.deleteOne({_id: orderId}, {}).then(() => {
	console.log(`User deleted for ${orderId}`)
})
 }


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
