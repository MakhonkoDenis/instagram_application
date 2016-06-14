"use strict";

var express = require('express'),
	app = express(),
	instagram = require('instagram-node').instagram();

instagram.use({
	client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
	client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8'
});

app.use( express.static( __dirname + '/public') );

app.set('view engine', 'ejs');

app.get( '/', function( req, res ) {
	instagram.media_popular( function(err, medias, remaining, limit) {
		if ( medias ) {
			res.render( 'pages/index', { grams: medias } );
		}
	} );
});

app.listen( 8080 );

console.log('Приложение запушено.');
