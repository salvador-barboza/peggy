# \<peggy\>
# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.1.0]
### Added
- `<peggy-app>` contains everything, handles logic between the components below.
- `<peggy-data>` handles all the data. helper-classes.html has the `Items` class used here.
- `<additem-card>` is used when adding a new item. Fires an event when tapping add button, which is handled by `<peggy-app>`.
- `<peggy-list>` displays the data from `<peggy-data>` and fires delete, change, and adding option events to be handled by `<peggy-app>`.
- Added `imports.html` to contain all imports that are shared by many components.
- Started this change log.
- Added `/bower_components` to `.gitignore`
