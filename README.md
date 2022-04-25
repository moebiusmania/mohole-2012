# mohole-2012

> Revival of the 2012's Mohole "hub" website.

---

**EN**
Just wanted to preserve one of my few decade-old website projects. Most of the code has remained the same just some minor tweaks on the HTML code and mostly rewrite of the Javascript part to remove jQuery and using standards and adding Typescript.

This was one of my earliest HTML5 + CSS3 responsive website, designed taking strong inspiration from the Metro UI of the "new" Windows 8.

This was an "hub" website for all of the different subdomains available back then, now every link in the page points to `https://scuola.mohole.it/`.

---

**IT**
L'obiettivo è di preservare uno dei miei pochi siti web realizzati circa 10 anni fa di cui ho ancora del materiale. Gran parte del codice è rimasto lo stesso a parte qualche piccola modifica nel codice HTML e l'aver riscritto quasi per intero la parte Javascript togliendo jQuery in favore di codice standard con l'aggiunta di Typescript.

Questo è stato uno dei miei primi siti responsive in HTML5 e CSS3, disegnato prendendo molta ispirazione da Metro UI dell'allora nuovo Windows 8.

Questo sito era un "hub" dei vari sottodomini disponibili ai tempi, ora ogni link nella pagina punta a `https://scuola.mohole.it/`.

---

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

This will start a `webpack-dev-server` instance in `hot-reload` mode (_this will automatically update your browser when you apply any changes to the source files_), your project will be exposed at `localhost:8080`.

To create the optimized files to publish to whaterver static hosting you choose, just run:

```bash
npm run build
```

the result will be available in the `./dist` folder.

## License

The Mohole logo and brand is property of [Mohole S.r.L.](https://scuola.mohole.it/), this project code is released under the [MIT license](LICENSE).
