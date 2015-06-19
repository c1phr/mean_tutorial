##  What's going on in my template?

	<body ng-app="todo">
	
This line had an Angular directive `ng-app` which says that the contents of this `<body>` tag will be a part of the Angular app "todo".

	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<ui-view></ui-view>
	  	</div>
	</div>
		  
These are just some divs with basic Bootstrap style applied. The `<ui-view>` tags is where the contents of our templates is going to be rendered.
		  
	<script type="text/ng-template" id="/home.html">
		{{text}}
	< /script>
	  
This block actually represents the contents of the template. Regular HTML can be put inside of the `<script>` block and anything that 
comes from the Angular controller is placed inside double curly braces. 