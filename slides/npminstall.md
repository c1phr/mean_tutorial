##  Package Installation Part 1

Now that we have Node and Mongo setup, we can start working on setting up the actual site.

1. Open a new Command Prompt/Terminal and run:  
   ` npm install -g express-generator `
   - Include ` sudo ` on Unix-based systems
   - This installs a Node.js package that will setup some boilerplate structure and code to get started with an Express project
2. Run: ` express --ejs todo && cd todo `
    - The first command will run the newly installed generator and setup the boilder plate.
    - ` --ejs ` is an argument that specifies that we're going to use standard HTML templates instead of Express' default Jade templates
