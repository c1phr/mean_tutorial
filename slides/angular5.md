##  Setting up the template

First let's finish setting up our template.

	<body ng-app="todo">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<ui-view></ui-view>
		  	</div>
	  	</div>
	  <script type="text/ng-template" id="/home.html">
	  	{{text}}
	  < /script>
	</body>
	  
Scroll down for an explanation of what's going on here.