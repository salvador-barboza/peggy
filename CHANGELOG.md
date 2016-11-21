# \<peggy\>
# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).
## [unreleased] - 2016-11-21
### Added
- A dev log
- `<list-item>` to handle items inside `<peggy-list>`.
### Changed
- Now `<peggy-list>` is located inside `/peggy-list`.
-
### Fixed
- Removing an item from `<list-item>` now works.
- _total_ was updated based on a wrong property. Now it observes `cart.length`, which changes when an _item_ is added or removed. In the future, this should also observe `cart.#.selectedIndex` to update when a new _option_ is selected.


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
