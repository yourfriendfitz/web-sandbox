# whosThatPokemon
an example of CSS variable manipulation thru vanilla JS. A clone of JS30 CSS Variables

CSS variables are definied in the :root.
  {--inversion,
  --rotation,
  --transparency}
The CSS variables are used as values in CSS properties for -img-.
The three properties used with the variables in the -img- tag are:
  {filter: invert(),
  transform: rotate(),
  opacity:}
 JS is used to extract a nodelist of the HTML -input- tags.
 The -input- tags are defined as ranges, and the suffix for {filter: invert(), and transform: rotate()}
  are definied in the -input- tag as data-attributes named data-suffix.
 An eventListener is used to retrieve the values of the input ranges when "change" is experienced using forEach().
   A function is defined to change the CSS variable values (and add the required suffix if necessary) stored as                   values for {filter: invert(), transform: rotate(), and opacity:} in the styling of the HTML -img- tag.
