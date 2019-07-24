# NG-Faker

[![Build Status](https://travis-ci.org/BolajiOlajide/ng-faker.svg?branch=develop)](https://travis-ci.org/BolajiOlajide/ng-faker)
[![Coverage Status](https://coveralls.io/repos/github/BolajiOlajide/ng-faker/badge.svg?branch=develop)](https://coveralls.io/github/BolajiOlajide/ng-faker?branch=master)
[![star this repo](http://githubbadges.com/star.svg?user=BolajiOlajide&repo=ng-faker&style=flat)](https://github.com/BolajiOlajide/ng-faker)
[![fork this repo](http://githubbadges.com/fork.svg?user=BolajiOlajide&repo=ng-faker&style=flat)](https://github.com/BolajiOlajide/ng-faker/fork)
[![npm](https://img.shields.io/npm/v/ng-faker.svg)](https://www.npmjs.com/package/ng-faker)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

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

### Example

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
* ur - urhobo

 Other locales will be added soon...

## Custom Locale

Adding a new locale is equally easy:

```js
ngFaker.addLocale('ef', {
  title: 'Efik',
  name: [
    "Efik1", "Efik2"
  ],
  lorem: [],
  address: []
})
```

## Tests

```sh
    npm run test
```

## Version Release Schedule

If you require the absolute latest version of `ng-faker` the `master` branch on the [official repo](http://github.com/BolajiOlajide/ng-faker/) should always be up to date and working.

## Maintainers

* Bolaji Olajide
* Rotimi Babalola
* Oyindamola Subair

## Contributors

| [<img src="https://github.com/rotimi-babalola.png" width="100px;"><br><sub><b>Rotimi Babalola</b></sub>](https://github.com/rotimi-babalola)| [<img src="https://github.com/BolajiOlajide.png" width="100px;"><br><sub><b>Bolaji Olajide</b></sub>](https://github.com/BolajiOlajide) | [<img src="https://github.com/oyinda-subair.png" width="100px;"><br><sub><b>Subair Oyindamola</b></sub>](https://github.com/oyinda-subair)
| :---: | :---: | :---: |
| [<img src="https://github.com/olamilekan000.png" width="100px;"><br><sub><b>Olamilekan Odukoya</b></sub>](https://github.com/olamilekan000) | [<img src="https://github.com/Ayomiga.png" width="100px;"><br><sub><b>Ayomiga</b></sub>](https://github.com/Ayomiga) | [<img src="https://github.com/jcobhams.png" width="100px;"><br><sub><b>JCobhams</b></sub>](https://github.com/jcobhams)
| :---: | :---: | :---: |
| [<img src="https://github.com/seunzone.png" width="100px;"><br><sub><b>Seun Faluyi</b></sub>](https://github.com/seunzone) | [<img src="https://github.com/Neiva07.png" width="100px;"><br><sub><b>Neiva07</b></sub>](https://github.com/Neiva07) | [<img src="https://github.com/nero-adaware.png" width="100px;"><br><sub><b>nero-adaware</b></sub>](https://github.com/nero-adaware)
| :---: | :---: | :---: |
| [<img src="https://github.com/sudo-kaizen.png" width="100px;"><br><sub><b>sudo-kaizen</b></sub>](https://github.com/sudo-kaizen)

ng-faker was inspired by and has used data definitions and logic from:

* [Marak Squires -Faker.js](https://github.com/Marak/faker.js)
* [Copyright (c) 2007-2010 Benjamin Curtis](https://github.com/stympy/faker/)
* [Copyright 2004-2005 by Jason Kohles](http://search.cpan.org/~jasonk/Data-Faker-0.07/)
