## Conversions

[![DevOps By Rultor.com](https://www.rultor.com/b/hizmailovich/conversion)](https://www.rultor.com/p/hizmailovich/conversion)
<br>

[![npm](https://github.com/hizmailovich/conversion/actions/workflows/npm.yml/badge.svg)](https://github.com/hizmailovich/conversion/actions/workflows/npm.yml)
[![Hits-of-Code](https://hitsofcode.com/github/hizmailovich/conversion)](https://hitsofcode.com/view/github/hizmailovich/conversion)

Project architect: [@hizmailovich](https://github.com/hizmailovich)

JavaScript library that provides advanced data transformation functions.

The library should include the following features:
1. *addValues* - accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments.
2. *stringifyValue* - accepts a single argument of any type and converts it to a string representation.
3. *invertBoolean* - accepts a single boolean argument and returns its inverted value.
4. *convertToNumber* - accepts a single argument of any type and attempts to convert it to a number.
5. *coerceToType* - accepts two arguments: value and type and attempts to convert the value to the specified type using type coercion.

## How to Install

```shell
npm install type_conversions
```

## How to Contribute

Fork repository, make changes, send us a [pull request](https://www.yegor256.com/2014/04/15/github-guidelines.html).
We will review your changes and apply them to the `master` branch shortly,
provided they don't violate our quality standards. To avoid frustration,
before sending us your pull request please run full npm build:

```bash
$ npm run ci
```

You will need npm 9+ and Node.js 18.16.0+.

Our [rultor image](https://github.com/yegor256/rultor-image) for CI/CD.