#### Vuetify

> `vue add vuetify`

<br>

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

<br>

### AOS (Animate on Scroll)

**[Install]**

```
npm install --save aos@next
```

**[Load]**

main.js

```javascript
import AOS from "aos";
import "aos/dist/aos.css";

...

new Vue({
 ...
 created() {
 	AOS.init({
 		once: true
		});
	},
 ...
 render: h => h(App)
}).$mount("app");
```

<br>

### Vue Page Transition

**[Install]**

```
npm install --save vue-page-transition
```

**[Load]**

main.js

```javascript
import VuePageTransition from 'vue-page-transition';
...
Vue.use(VuePageTransition);
```

