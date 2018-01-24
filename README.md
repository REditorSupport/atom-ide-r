# IDE-R package

R language support for [Atom-IDE](https://ide.atom.io/), powered by the [R language server](https://github.com/REditorSupport/languageserver).

## Installation

`ide-r` can easily be installed using the Atom package manager by going to "Settings > Install" and searching for `ide-r`, or by using the command line:

```
apm install ide-r
```

## Requirements

[`ide-r`](https://atom.io/packages/ide-r) requires [`languageserver`](https://github.com/REditorSupport/languageserver) and the development version of [`callr`](https://github.com/r-lib/callr)

Install development versions of `callr` and `languageserver`
```
devtools::install_github(c("r-lib/callr", "REditorSupport/languageserver"))
```


## License
MIT License.  See [the license](LICENSE.md) for more details.
