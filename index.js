var elasticsearch = require('elasticsearch');
var posts = require('./posts.json');
var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});

function removeAll(client) {

	client.search({
		"query": {
			"match_all": {}
		}
	}).then(function (resp) {

		resp.hits.hits.forEach(function (hit) {

			client.delete({
				index: hit._index,
				type: hit._type,
				id: hit._id
			}, function (error, response) {
				// ...
			});

		});

	});

}

function showAll(client) {

	client.search({
		"query": {
			"match_all": {}
		}
	}).then(function (resp) {

		console.log(resp.hits.hits);

	});

}

function addAll(client) {

	posts.forEach(function (post, index) {

		post.tags = ['tag1', 'tag2'];

		client.index({
			index: 'blog',
			type: 'post1',
			id: index,
			body: post
		}, function (err, resp) {
			console.log(err, resp);
		});


	});

}


//////////////////////////////////////////////////


// removeAll(client);
// addAll(client);
// showAll(client);


// return;
client.search({
	size: 5,
	from: 0,
	body: {
		query: {
			match: {
				title: 'ipsum'
			}
		}

	}
}).then(function (resp) {
	console.log(resp.hits.hits.length);
	console.log(resp.hits.hits);
});

/*
client.search({
	size: 5,
	from: 0,
	body: {
		query: {

		}
	}
}).then(function (resp) {
	console.log(resp.hits.hits.length);
	console.log(resp.hits.hits);
});
*/


/*
 */

/*
 client.search({ "query" : {
 "match_all" : {}
 }}).then(function (resp) {
 console.log(resp.hits.hits);
 });
 */


/*
 client.index({
 index: 'blog',
 type: 'post1',
 id: 3,
 body: {
 title: 'JavaScript Everywhere!',
 content: 'It all started when...',
 date: '2018-12-17'
 }
 }, function (err, resp) {

 });
 */




/*
 //-- clear all
 client.search({ "query" : {
 "match_all" : {}
 }}).then(function (resp) {

 resp.hits.hits.forEach(function (hit) {

 client.delete({
 index: hit._index,
 type: hit._type,
 id: hit._id
 }, function (error, response) {
 // ...
 });

 });

 });
 */



/*


 client.search({
 q: 'ee'
 }).then(function (body) {
 var hits = body.hits.hits;

 console.log(hits);

 }, function (error) {
 console.trace(error.message);
 });

 client.search({
 q: 'ee'
 }).then(function (body) {
 var hits = body.hits.hits;

 console.log(hits);

 }, function (error) {
 console.trace(error.message);
 });
 */

// index a document
