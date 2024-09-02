import { NgFaker, Locale } from 'ng-faker';

const ngf = new NgFaker({ locale: Locale.ENGLISH });
console.log(ngf.random.number(0, 1));
console.log(ngf.random.boolean());
console.log(ngf.random.arrayElement(['a', 'b', 'c']));
