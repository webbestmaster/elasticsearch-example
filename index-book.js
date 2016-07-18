var elasticsearch = require('elasticsearch');
var employee = require('./employee.json');
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

	employee.list.forEach(function (employeeData, index) {

		// post.tags = ['tag1', 'tag2'];

		client.index({
			index: employee.info.index,
			type: employee.info.type,
			id: index,
			body: employeeData
		}, function (err, resp) {
			console.log(err, resp);
		});


	});

}


//////////////////////////////////////////////////


// removeAll(client);
// addAll(client);
// showAll(client);

/*
client.search({
	size: 5,
	from: 0,
	body: {
		"query" : {
			"filtered" : {
				"filter" : {
					"range" : {
						"age" : { "gt" : 32 }
					}
				},
				"query" : {
					"match" : {
						"last_name" : "smith"
					}
				}
			}
		}
	}
}).then(function (resp) {
	console.log(resp.hits.hits);
});
*/

/*
client.search({
	size: 5,
	from: 0,
	body: {
		query: {
			match: {
				last_name: 'Smith'
			}
		}

	}
}).then(function (resp) {
	console.log(resp.hits.hits.length);
	console.log(resp.hits.hits);
});
*/

/*
client.search({
	size: 5,
	from: 0,
	body: {
		"query" : {
			"match" : {
				"about" : "rock climbing"
			}
		}
	}

}).then(function (resp) {
	console.log(resp.hits.hits);
});
*/

/*
client.search({
	size: 5,
	from: 0,
	body: {
		"query" : {
			"match_phrase" : {
				"about" : "collect rock"
			}
		}
	}

}).then(function (resp) {
	// console.log(resp.hits.hits);
});
*/


/*
client.search({
	size: 5,
	from: 0,
	body: {
		"query" : {
			"match_phrase" : {
				"about" : "collect rock"
			}
		},
		"highlight": {
			"fields" : {
				"about" : {}
			}
		}
	}

}).then(function (resp) {
	console.log(resp.hits.hits);
});
*/













































// return;
/*
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
*/

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
