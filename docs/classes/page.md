# Page
Craete a page with a title and include some content like forms, tables, cards, etc.

### Constructor
```js
new Page(data);
```

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| data | [PageOptions](../typedefs/PageOptions.md) | &check; | {} | Page options |

### Table of Contents
| Properties | Methods |
| :-----------: | :-----------: |
| [title](#title) | [setTitle](#settitle) |
| [description](#description) | [setDescription](#setdescription) |
| [backgroundColor](#backgroundcolor) | [setBackgroundColor](#setbackgroundcolor) |
|  | [addItem](#additem) |
|  | [render](#render) |

<hr>

### Properties
#### .title
The page title
Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>

#### .description
The page description
Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>

#### .backgroundColor
The page background color
Type: ?[Color](../typedefs/Color.md)

<hr>

### Methods

#### .setTitle
Set the page title
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| title | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | &check; | Untitled | The page title |

Returns: [Page](./page.md)

<hr>

#### .setDescription
Set the page description
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| description | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | &check; |  | The page description |

Returns: [Page](./page.md)

<hr>

#### .setBackgroundColor
Set the page background color
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| color | [Color](../typedefs/Color.md) | &check; | #f5f5f5 | The page background color |

Returns: [Page](./page.md)

<hr>

#### .addItem
Add an item to the page
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| item | [PageItems](../typedefs/PageItems.md) | &check; |  | The item to add |

Returns: [Page](./page.md)

<hr>

#### .render
Render the page
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| data | [RenderOptions](../typedefs/PageRenderOptions.md) | &check; | {} | Page render options |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[RenderedPage](../typedefs/RenderedPage.md)>