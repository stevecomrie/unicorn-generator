exports.handler = (event, context, callback) => {

    let testObj = {
		process : process.env.TEST_VARIABLE
    }

	callback(null, {
		statusCode: 200,
        headers: {
        	'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
		body: JSON.stringify(testObj)
	});

};