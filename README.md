# NG-Faker

[![Build Status](https://travis-ci.org/BolajiOlajide/ng-faker.svg?branch=master)](https://travis-ci.org/BolajiOlajide/ng-faker)
[![Coverage Status](https://coveralls.io/repos/github/BolajiOlajide/ng-faker/badge.svg?branch=master)](https://coveralls.io/github/BolajiOlajide/ng-faker?branch=master)

## Usage

### Installation

Install with npm:

```sh
npm install ng-faker --save-dev
```

Install with yarn:

```sh
yarn add ng-faker --dev
```

### Browser

For now, we don't have support for the browser directly. We're working on that and should have that up really soon.

### Node.js

```js
    var ngfaker = require('ng-faker');

    var randomName = ngfaker.name.firstName(); // Annabelle
    var randomWord = ngfaker.lorem.phrase(); // Thanks so much.
```

## API

### ngfaker.fake()
ngfaker contains a super useful generator method ngfaker.fake for combining ngfaker API methods using a mustache string format.

### Example:

```js
console.log(ngfaker.fake("{{name.prefix}}, {{name.firstName}} {{name.lastName}}"));
// outputs: "Dr. Annabelle Smith"
```

This will interpolate the format string with the value of methods name.prefix(), name.lastName() and name.firstName().

### API Methods

* account
  * bank
  * accountNumber
* address
  * state
  * states
  * localGovernment
  * localGovernments
* lorem
  * word
  * phrase
* name
  * firstName
  * lastName
  * prefix
  * fullName
* phone
  * phoneNumber
  * serviceProvider
* fake
* random
  * boolean
  * number
  * arrayElement
  * objectElement
  * alphanumeric
  * hexadecimal

## Localization

The default language locale is set to English.

Setting a new locale is simple:

```js
var ngfaker = require('ng-faker');
// sets locale to yo (Yoruba)
ngfaker.setLocale("yo");
// or
ngfaker.locale = "yo";
```

 * yo - Yoruba
 * en - English
 * ha - hausa
 * ig - igbo
 * ek - Efik
 * bn - Benin


 Other locales will be added soon...


## Tests

```sh
    npm run test
```

## Version Release Schedule

If you require the absolute latest version of `ng-faker` the `master` branch @ http://github.com/BolajiOlajide/ng-faker/ should always be up to date and working.

## Maintainers

#### Bolaji Olajide
#### Rotimi Babalola
#### Oyindamola Subair

## Contributors

See also the list of [contributors](https://github.com/BolajiOlajide/ng-faker/contributors) who participate in this project.

ng-faker was inspired by and has used data definitions and logic from:

 * https://github.com/Marak/faker.js - Marak Squires
 * https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
 * http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles
