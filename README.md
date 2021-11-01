# ML5 Image Classification Demo
## Featuring the Reader monad

### [Check the demo here](https://ml5p5.netlify.app/)
[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/92a2c252-7049-4437-aaf4-5dc82fe4ff63/deploy-status)](https://app.netlify.com/sites/ml5p5/deploys)

### What?
This is a minimalistic appliation to demostrate the use of a Reader monad
from [fp-ts](https://github.com/gcanti/fp-ts) to inject dependencies on a simple web application.

NOTE: It does not use P5 sorry for the misleading name ... you can implement it if
you want !

### How to run:
The project uses [Parcel](https://github.com/parcel-bundler/parcel) as dependency bundler so is pretty easy:

```zsh
$ git clone https://github.com/bbaaxx/ml5p5.git
$ cd ml5p5
$ yarn

# dev (live reload and  stuff):
$ yarn dev

#  build:
$ yarn build

# run on `http-server` 
# you can pass options to it and all via yarn
$ yarn start --port 3000
```


## NOTE: For FP experts and learners
The way the Reader monad is implemented on this example is by no 
means adequate for a real application. This is just a very contrieved example
to help explain the concept.
PR are welcome !

## LICENSE

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
