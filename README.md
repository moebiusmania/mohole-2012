# mohole-2012
> Simple starter kit boilerplate based on Webpack, SASS and Bootstrap 5 (beta)

## How to use
Just clone the project in a new folder:
```bash
git clone https://github.com/moebiusmania/mohole-2012
```

install dependencies
```bash
cd mohole-2012
npm install 
# or "npm i" as shortcut...
```

and get started:
```bash
npm start
```

This will start a `webpack-dev-server` instance in `hot-reload` mode (*this will automatically update your browser when you apply any changes to the source files*), your project will be exposed at `localhost:8080`.

To create the optimized files to publish to whaterver static hosting you choose, just run:
```bash
npm run build
```

the result will be available in the `./dist` folder.

## License
The Mohole logo and brand is property of [Mohole S.r.L.](https://scuola.mohole.it/), this project code is released under the [MIT license](LICENSE).
