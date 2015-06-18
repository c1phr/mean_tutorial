<style>
	.anatomy-list { font-size: 0.7em !important; }
</style>

##  anatomy

Let's take a look at the files and folders that were created by express-generator:
<ul>
	<li class="anatomy-list"> `app.js` - This is the entry point for the application, and it takes care of importing modules, setting up database connections and so on</li>
	<li class="anatomy-list"> `node_modules/` - Anything listed in `package.json` and installed with `npm install` will go here</li>
	<li class="anatomy-list"> `package.json` - Stores a list of project dependencies so other's working on the project can just run `npm install` to get any dependencies installed and running on their machine</li>
	<li class="anatomy-list"> `public/` - This directory stores any public static files that are used on the front-end of the site (CSS, JavaScript, images, etc.)</li>
	<li class="anatomy-list"> `routes/` - Stores Node.JS back-end controllers</li>
	<li class="anatomy-list"> `views/` - Stores front-end templates, Angular code in our case</li>
	<li class="anatomy-list"> `models/` - This is the directory we just created, it will be used to store data models for our application</li>
</ul>