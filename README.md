# To notice

This project is using Prettier and Eslint.
Before any commit eslint is executed to check the code.
It will also run all the unit test before to push anything.

# How to run this ?

To run the unit test type this command in your CLI once you're at the root of the folder project.

```
npm run test
```

To run the API :

```
npm run server
```

You can then access it with your browser at : http://localhost:3010/api/notifications ( There is only one endpoint )

To run the react application :

```
npm run start
```

You can then access it with your browser at : http://localhost:3000/

If you want to run the linter

```
./node_modules/.bin/eslint ./src/**/*.js
```

If you want to reformat your code according to the prettier configuration. ( In case you don't have this configured directly inside your IDE )

```
npm run prettier
```
