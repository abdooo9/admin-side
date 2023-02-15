# FieldOption

**Types:**

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object)

## Properties:

|  PARAMETER  |                                                       TYPE                                                       |                           OPTIONAL                          |  DEFAULT |       DESCRIPTION      |
| :---------: | :--------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------: | :------: | :--------------------: |
|      id     |        [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)        |                                                             |          |        Field ID        |
|     type    |        [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)        |                              ✓                              |   text   |       Field Type       |
|    label    |        [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)        |                              ✓                              | field.id |       Field Label      |
| palceholder |        [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)        |                              ✓                              |          |    Field Placeholder   |
|    value    |        [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)        |                              ✓                              |          |   Default Field Value  |
|   required  |       [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Boolean)       |                              ✓                              |   false  | Is the field required? |
|   options   | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array)\<OptionOptions> | required: when the field.type = select \| checkbox \| radio |          |      Field Options     |

