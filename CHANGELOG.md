# \<peggy\>
# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## unreleased 2016-01-28
### Added
- Restore deleted items.
- App manifest
## v0.3.1 2016-01-28
### Changed
- Changed amount to quantity.
### Fixed
- Clear card when 'add' event fired.

## v0.3.0 - 2016-12-29
### Added
- Added PouchDB in `<peggy-data>`

### Changed
- Changed path in `<peggy-data>` to fix build issues.
- Unshift instead of pushing new item to `<peggy-data>`.
- New layout in `<list-item>`
- Toolbar's color

### Fixed
- Fixed decimal numbers. Now everything is rounded to 2 decimal places.
- Fixed Truncated text in toolbar.

## v0.2.0 - 2016-12-21
### Added
- A dev log
- `<list-item>` to handle items inside `<peggy-list>`.
- Edit behavior

### Removed
- `Item` class was removed temporarily from peggy-data. A simple object literal is used
instead. This is because the multi-option functionality is deprecated.

### Changed
- Now `<peggy-list>` is located inside `/peggy-list`.
- Added firebase things and build folder to .gitignore
- Clean `._addItem()` and `<additem-card>` to use a single object instead of 3 values.
- Clean UI
- The total is now computed inside `<peggy-data>`.
- Subtotal of items is now computed inside `list-item`.

### Fixed
- Removing an item from `<list-item>` now works.
- Fixed wrong imports in `<peggy-list>`


## v0.1.0 - 2016-11-20
### Added
- `<peggy-app>` contains everything, handles logic between the components below.
- `<peggy-data>` handles all the data. helper-classes.html has the `Items` class used here.
- `<additem-card>` is used when adding a new item. Fires an event when tapping add button, which is handled by `<peggy-app>`.
- `<peggy-list>` displays the data from `<peggy-data>` and fires delete, change, and adding option events to be handled by `<peggy-app>`.
- Added `imports.html` to contain all imports that are shared by many components.
- Started this change log.
- Added `/bower_components` to `.gitignore`

### Changed
- Changed the layout to be clearer. Also there is now the total on the toolbar.

### Removed
- Removed partial implementation of adding options to an item to focus on making the other things work great first.
