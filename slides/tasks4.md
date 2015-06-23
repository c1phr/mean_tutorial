##  Tasks

	<table class="table">	  		
	  	<tr>
		  	<th>Title</th>
		  	<th>Description</th>			  				  	
		  	<th>Creator</th>
		</tr>
		<tr ng-repeat="task in tasks">
			<td>{{task.title}}</td>
			<td>{{task.description}}</td>
			<td>{{task.creator.name}}</td>
		</tr>			
	</table>
	<form ng-submit="addTask()">
		<h4>Add a new task</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Title" ng-model="title"></input>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Description" ng-model="description"></input>
		</div>
		<div class="form-group">
			<select ng-model="creator" placeholder="test">
				<option value="" disabled selected>Please select a user</option>
				<option ng-repeat="user in users" value={{user._id}}>{{user.name}}</option>
			</select>
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
	</form>

This code is all pretty similar to the previous table and form that we wrote for users. Since we setup the GET request for tasks to 
call `.populate()`, we have access to user's name from the task object like so: `{{task.creator.name}}`.
