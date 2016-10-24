# parseQueryString(string)

- [API](#api)
- [How it works](#how-it-works)

---

### API

`object = m.parseQueryString(string)`

Argument     | Type                                       | Required | Description
------------ | ------------------------------------------ | -------- | ---
`string`     | `String`                                   | Yes      | A querystring
**returns**  | `Object`                                   |          | A key-value map

[How to read signatures](signatures.md)

---

### How it works

The `m.parseQueryString` method creates an object from a querystring. It is useful for handling data from URL

```javascript
var data = m.parseQueryString("a=hello&b=world")

// data is {a: "hello", b: "world"}
```

#### Boolean type casting

This method attempts to cast boolean values if possible. This helps prevents bugs related to loose truthiness and unintended type casts.

```javascript
var data = m.parseQueryString("a=true&b=false")

// data is {a: true, b: false}
```

#### Leading question mark tolerance

For convenience, the `m.parseQueryString` method ignores a leading question mark, if present:

```javascript
var data = m.parseQueryString("?a=hello&b=world")

// data is {a: "hello", b: "world"}
```

#### Deep data structures

Querystrings that contain bracket notation are correctly parsed into deep data structures

```javascript
m.parseQueryString("a[0]=hello&a[1]=world")

// data is {a: ["hello", "world"]}
```