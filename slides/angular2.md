##  AngularJS

To start, open up `views/index.ejs` and remove the boilerplate code that the express generator inserted and replace it with the following:

	<html>
		<head>
			<title>Todo</title>
			<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
			<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.10/angular.min.js">< /script>
			<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js">< /script>
		</head>
	</html>
	
> Please remove the space in the closing `< /script>` tags, I had to add them to prevent an issue with the code block formatting.