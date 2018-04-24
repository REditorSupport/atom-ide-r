# IDE-R package

R language support for [Atom-IDE](https://ide.atom.io/), powered by the [R language server](https://github.com/REditorSupport/languageserver).

## Installation

`ide-r` can easily be installed using the Atom package manager by going to "Settings > Install" and searching for `ide-r`, or by using the command line:
```
apm install ide-r
```
You should also install the [atom-ide-ui](https://ide.atom.io/) package to expose the functionality within Atom.

## Requirements

`ide-r` requires the [R Language Server](https://github.com/REditorSupport/languageserver).
It can be easily installed via CRAN
```
install.packages("languageserver")
```

For R Markdown support, you would need to install `languageserver` v0.2.1 or above and our companion package [atom-language-r](https://atom.io/packages/atom-language-r). (**Caution** the name is `atom-language-r`, but `language-r`)


## License
MIT License.  See [the license](LICENSE.md) for more details.
