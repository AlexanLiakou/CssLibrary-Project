# Css-Library-Project

-----Intro-----

This is a simple css library, created to practice in Sass and Gulp.js

The library utilizes many of Sass powers including variables, nesting, functions, loops, conditionals, mixins, partials and plugins.

Gulp.js is used to manage compiling, purging, mapping and minifying css.

The included index.html is just a demonstration, feel free to create your own projects. This library can be used as a boiler plate.

Feel free to add your own classes and elements to the library, this project is totally open source.


-----Node instructions-----

If you are interested in taking a closer look and/or adding elements to the library:

1. Clone the repository to your machine.

2. Use 'npm install' to get all project dependencies. If you have never installed gulp globally before, also use 'npm install -g gulp'

3. Use 'npm run build' to run the project.


-----Gulp info-----

Plugins used:

-gulp-sourcemaps (to create map files for browser debugging)

-gulp-sass (to compile scss to css)

-gulp-purgecss (to keep only used classes in dist/css file)

-gulp-autoprefixer (to add/remove vendor prefixes if needed)

-gulp-clean-css(to minify the dist/css file)

Keep in mind that you have to have gulp globally installed too, in order for it to work locally.

Gulp functionality in this project is triggered with npm script 'build'.