import { NgFaker, Locale } from 'ng-faker';

const ngf = new NgFaker({ locale: Locale.ENGLISH });
console.log(ngf.random.number());
console.log(ngf.random.boolean());
console.log(ngf.random.arrayElement(['a', 'b', 'c']));
