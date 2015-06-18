<style>
  blockquote p { font-size: 0.5em !important; }
  li { font-size: 0.8em !important; }
  p { font-size: 0.8em !important; }
</style>

##  Package Install Part 2

Now that you're inside your new project directory, take a look at the ` package.json ` file.

Inside you'll find a list of NPM package dependencies that your new project needs.  

- Run: ` npm install ` to install these.
- Additionally run: 
` npm install mongoose --save `   
to install the MongoDB driver for Node.js 
  - The ` --save ` parameter indicates that Mongoose will be added to the project's package.json
- Make a new folder called "models", we'll need this later

> 
Note - ` npm install ` will install packages to the current project directory  
Including the ` -g ` flag will install projects globally to the entire system (and requires root on Unix based systems)