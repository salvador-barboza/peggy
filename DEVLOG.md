# Log
Discoveries, mistakes and other things are here.

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
- [`arrayDelete`](https://github.com/Polymer/polymer/blob/master/src/standard/utils.html#L305) .
> Removes an item from an array, if it exists. If the array is specified by path, a change notification is generated, so that observers, data bindings and computed properties watching that path can update.
Â

### Learned
- Not bubbling an event causes it to be trapped inside the emitter.
- You can't change an event as it propagates upwards.
