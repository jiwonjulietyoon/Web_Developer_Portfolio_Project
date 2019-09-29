#### Vuetify

> `vue add vuetify`



#### JQuery

> **[Install]**
>
> ```
> npm install --save jquery
> npm install --save-dev expose-loader
> ```
>
> **[Load]**
>
> main.js
>
> ```javascript
> import 'expose-loader?$!expose-loader?jQuery!jquery';
> window.$ = window.jQuery = require("jquery");
> ```
>
> .eslintrc.js
>
> ```javascript
> globals: {
>   "$": true,
>   "jQuery": true
> }
> ```
>
> (other `.js` files using jQuery)
>
> ```javascript
> import $ from 'jquery';
> ```
>
> **[Use]**
>
> jQuery is now ready to use globally within project. Run `$(window).height()` in project's localhost browser console to check that jQuery is working properly.