# Sf

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.


## Utils
<details>
<summary> Click to expand </summary>

## Code scaffolding

Run `ng generate component component-name --project sf` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sf`.
> Note: Don't forget to add `--project sf` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build sf` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sf`, go to the dist folder `cd dist/sf` and run `npm publish`.
</details>

## Description

Library contains models, utils functions, and main components to display Frame information as Tree and as Log ountput.

### Components
1. **FrameContainer** - allows to display Frame as Tree, accepts _Frame_ itself, _another frame_ to compare, _filter by objects_ and _color palette_. Two color palettes are available: _plain_ and _amber_. 
2. **LogContainer** - allows to display Logs from Trace, accepts _spans from Trace_ and _filters_.
3. **SpanList** - allows to display Spans from Trace as list, accepts _spans with frames_ from Trace, emits _selected span_ to display Frame and _another span_ to set Frame for comparing.