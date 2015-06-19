##  How do we use the factory?

Replace `{{text}}` from the template we wrote previously with the following code. 
You may need to scroll in the code box to see the longer lines.

	<table class="table">	  		
	<tr>
	  	<th>Name</th>
	  	<th>Email</th>
	<tr ng-repeat="user in users">
		<td>{{user.name}}</td>
		<td>{{user.email}}</td>
	</tr>			
	</table>
	<form ng-submit="addUser()">
		<h4>Add a new user</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Name" ng-model="name"></input>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Email" ng-model="email"></input>
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
	<form>

Here we use a couple more Angular directives. Press the down arrow for a quick explanation of those.