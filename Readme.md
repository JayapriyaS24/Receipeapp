## Receipe App 


![POSTMAN API documentation url:] (https://documenter.getpostman.com/view/39389770/2sAYBSjYn6#c1b45ebb-7142-493c-9ff0-1fc4b809f058)


# createRecipe:post(/api/v1/receipes)- Create a new recipes.
# getAllRecipes:get(/api/v1/receipes) -Retrieve all recipes.
# getRecipeById:get(/api/v1/receipes/:id) -Retrieve a single recipe by ID.
# updateRecipe:put(/api/v1/receipes/:id )Update a recipe by ID.
# deleteRecipe:delete(/api/v1/receipes/:id )Delete a recipe by ID.


# Techstacks needs to be used : 

Node.js
Express.js
Mongoose (MongoDB)
Postman

## Setting up Backend Application using NodeJS + ExpressJS + MongoDB
1. Create a new directory.
2. Open the terminal and navigate to the directory.
3. Run the command `npm init` to create a package.json file or run `npm init -y` to create a package.json file with default values.
4. Create a new file `index.js`.
5. Install the required packages using the command `npm install mongoose`.
6. Initialize the repository as a git repository using the command `git init`.
7. Create a `.gitignore` file and add the `node_modules` folder to it.
8. In the `index.js` file, write a code to connect to the MongoDB database.
9. Run the application using the command `node index.js`.
10. Install express using the command `npm install express`.


### Schema - MongoDB
- A Schema defines the structure of the document.
- A Schema is a blueprint of the document.


### API Versioning
- API versioning is the practice of versioning the API to manage changes in the API.
- Example: `/api/v1/receipes`, `/api/v2/receipes`.

