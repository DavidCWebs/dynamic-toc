#Dynamic TOC
Build a table of contents (TOC) that is dynamically generated from headings contained within a wrapper div.

Uses Javascript and jQuery.

The TOC is initially hidden. If there are headings on the page, the Javascript function will add unique IDs to these elements.

Internal links to these IDs will then be built into the TOC, with a simple smooth-scrolling effect built in.

##How to Use
* Add the id "wrapper" to an element that contains the content headings
* Add `toc.js` into the page footer
* Add the CSS - the style rules are held in `_toc.scss`, but you can convert this to LESS or plain CSS as necessary
* Add the elements from `toc.html` into the page that will hold your TOC.

##TODO
Convert this to plain Javascript!
