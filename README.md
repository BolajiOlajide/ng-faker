# NG-Faker

[![CircleCI](https://circleci.com/gh/BolajiOlajide/ng-faker.svg?style=svg&circle-token=750ef852d599f02e01a6efb4e0efe349dacb2156)](https://circleci.com/gh/BolajiOlajide/ng-faker)
[![codecov](https://codecov.io/gh/BolajiOlajide/ng-faker/branch/develop/graph/badge.svg?token=zGmdHonp0A)](https://codecov.io/gh/BolajiOlajide/ng-faker)

## Usage

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


## Tests

```sh
    npm run test
```

## Version Release Schedule

If you require the absolute latest version of `ng-faker` the `master` branch @ http://github.com/BolajiOlajide/ng-faker/ should always be up to date and working.

## Maintainer

#### Bolaji BolajiOlajide
#### Rotimi Babalola
#### Oyindamola Subair

ng-faker was inspired by and has used data definitions and logic from:

 * https://github.com/Marak/faker.js - Marak Squires
 * https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
 * http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason Kohles
