import { NgFaker, Locale } from 'ng-faker';

const ngf = new NgFaker({ locale: Locale.ENGLISH });
console.log(ngf.random.number(1, 2));
