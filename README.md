# eslint-plugin-sort-vars-alphabetical

A plugin that requires writing var, let and const in alphabetical order. 

Developed for holyJs Head Hunter stand test.


### Valid

```js
const a = 'a'
const b = 'b'
const c = 'c'
```
```js
const _1 = '_1'
const _a = '_a'
const a = 'a'
```
```js
let a, b, c = 'value'
```

### Invalid

```js
const b = 'b'
const a = 'a'
const c = 'c'
```
```js
const _a = 'a'
const _1 = '_1'
const a = 'a'
```
```js
let b, a, c = 'value'
```
