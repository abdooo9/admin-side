---
description: >-
  Craete a page with a title and include some content like forms, tables, cards,
  etc.
---

# Page

## Constructor

```
new Page(data);
```

| PARAMETER |                    TYPE                   | OPTIONAL | DEFAULT |  DESCRIPTION |
| :-------: | :---------------------------------------: | :------: | :-----: | :----------: |
|    data   | [PageOptions](../typedefs/PageOptions.md) |     ✓    |    {}   | Page options |

## Table of Contents

|                 Properties                 |                      Methods                     |
| :----------------------------------------: | :----------------------------------------------: |
|           [title](page.md#title)           |           [setTitle](page.md#settitle)           |
|     [description](page.md#description)     |     [setDescription](page.md#setdescription)     |
| [backgroundColor](page.md#backgroundcolor) | [setBackgroundColor](page.md#setbackgroundcolor) |
|                                            |            [addItem](page.md#additem)            |
|                                            |             [render](page.md#render)             |

## Properties

**.title**

The page title Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)

***

**.description**

The page description Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)

***

**.backgroundColor**

The page background color Type: ?[Color](../typedefs/Color.md)

***

{% hint style="info" %}
Support this project to **complete its life**

* Donate on PayPal [Donate](https://www.paypal.me/abd0009)
* Donate on Patreon [Donate](https://www.patreon.com/abdo9)
* Become a sponsor on GitHub [Sponsor](https://github.com/sponsors/abdooo9)
{% endhint %}

## Methods

**.setTitle**

Set the page title

| PARAMETER |                                                TYPE                                                | OPTIONAL |  DEFAULT |   DESCRIPTION  |
| :-------: | :------------------------------------------------------------------------------------------------: | :------: | :------: | :------------: |
|   title   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) |     ✓    | Untitled | The page title |

Returns: [Page](page.md)

***

**.setDescription**

Set the page description

|  PARAMETER  |                                                TYPE                                                | OPTIONAL | DEFAULT |      DESCRIPTION     |
| :---------: | :------------------------------------------------------------------------------------------------: | :------: | :-----: | :------------------: |
| description | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) |     ✓    |         | The page description |

Returns: [Page](page.md)

***

**.setBackgroundColor**

Set the page background color

| PARAMETER |              TYPE             | OPTIONAL | DEFAULT |        DESCRIPTION        |
| :-------: | :---------------------------: | :------: | :-----: | :-----------------------: |
|   color   | [Color](../typedefs/Color.md) |     ✓    | #f5f5f5 | The page background color |

Returns: [Page](page.md)

***

**.addItem**

Add an item to the page

| PARAMETER |                  TYPE                 | OPTIONAL | DEFAULT |   DESCRIPTION   |
| :-------: | :-----------------------------------: | :------: | :-----: | :-------------: |
|    item   | [PageItems](../typedefs/PageItems.md) |     ✓    |         | The item to add |

Returns: [Page](page.md)

***

**.render**

Render the page

| PARAMETER |                        TYPE                       | OPTIONAL | DEFAULT |     DESCRIPTION     |
| :-------: | :-----------------------------------------------: | :------: | :-----: | :-----------------: |
|    data   | [RenderOptions](../typedefs/PageRenderOptions.md) |     ✓    |    {}   | Page render options |

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[RenderedPage](../typedefs/RenderedPage.md)>
