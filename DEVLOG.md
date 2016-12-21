# Log
Discoveries, mistakes and other things are here.

## 2016-12-20
### TODO:
- Add edit functionality to`list-item`.
```
//list-item
this.fire('toogleEdit')
//peggy-list
<template...
<list-item on-toggle-edit="_toggleEdit"
...
_toggleEdit: function(e) {
    this.fire('update', currentEditItem.item);

    currentEditItem._editing = false;
    currentEditItem = e.model;
    currentEditItem._editing = true;
}  
```
- Add pouchdb to `<peggy-data>`

### etc:
- It would be great to implement a theseractjs element. A simple visor to tap on the price, etc.
- Collections: this allows grouping of various things in the list:
  - priority: appears on top
  - can wait: is left as top choice to remove
  - normal (default)  
- Add pictures to items.

## 2016-11-30
### Planning:
- Build dirs need to be added to .gitignore
- Now its the time to add the firebase-pouchdb thing

## 2016-11-21
### Planning:
##### Use of Watson tradeoff analytics or simple optimization, available data by priority in decision:
- Priority / stared 1
- Options
-- Amount [can be varied based on computation]
-- [Internal ranking] Price
- Prop ranking in info corpus (sort by tag with removal of items, this can be computed with deltas in cart)



## 2016-11-21
### Planning:
- Should move the total calc into `<peggy-data>`. It makes no sense to keep it in the list.
This also requires moving all the logic of selecting another option into `<peggy-data>`, which is what the unidirectional flow is supposed to do. The latter should be done with a fire from `<list-item>` to update the total, and it will also need to show the selected option.
```
// <list-item>
this.fire('nextOption', {item: this.item});
// <peggy-app>
onNextOption: function(e) {
    cart.nextOption(e.item);
}
```

### Discoveries
- [`arrayDelete`](https://github.com/Polymer/polymer/blob/master/src/standard/utils.html#L305).
_Removes an item from an array, if it exists. If the array is specified by path, a change notification is generated, so that  observers, data bindings and computed properties watching that path can update._

### Learned
- Not bubbling an event causes it to be trapped inside the emitter.
- You can't change an event as it propagates upwards.
