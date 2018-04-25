# IDE-R package

R language support for [Atom-IDE](https://ide.atom.io/), powered by the [R language server](https://github.com/REditorSupport/languageserver).

## Installation

`ide-r` can easily be installed using the Atom package manager by going to "Settings > Install" and searching for `ide-r`, or by using the command line:
```
apm install ide-r
```
You should also install the [atom-ide-ui](https://ide.atom.io/) package to expose the functionality within Atom.

We also recommend you to install our companion package [atom-language-r](https://atom.io/packages/atom-language-r) for R and R Markdown grammars. (**Caution** the package name is `atom-language-r`, not the legacy `language-r`)

## Requirements

`ide-r` requires the [R Language Server](https://github.com/REditorSupport/languageserver).
It can be easily installed via CRAN
```
install.packages("languageserver")
```

For R Markdown support, you would need to install `languageserver` v0.2.1+ and our companion package [atom-language-r](https://atom.io/packages/atom-language-r).


## License
MIT License.  See [the license](LICENSE.md) for more details.
