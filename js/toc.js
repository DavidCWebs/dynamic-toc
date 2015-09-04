/**
 * Create a floating Table of Contents
 *
 *
 */
(function( $ ) {

  "use strict";

  $(function() {

    var floatToc =
      "<header><button type='button' class='close' id='hide-toc' aria-label='Close'>" +
      "<span class='close-symbol' aria-hidden='true'>&times;</span></button>" +
      "<h2>Quick Links</h2>" +
      "</header>" +
      "<nav role='navigation' class='table-of-contents'>" +
      "<ul class='list-unstyled icon-list chevron-right'>";

    var newLine, el, title, link;
    var counter = 0;

    // Go through each h2 in #wrapper and add relevant content to new <li> elements
    // -------------------------------------------------------------------------
    $( "#wrapper h2, #wrapper h3" ).each( function( i ) {

          var el = $( this );

          // If it's the first h3 element, say "Go to Top".
          // -------------------------------------------------------------------
          var title = 0 == i ? "Go to Top" : el.text();

          // Form id for this heading element - lowercase, strip odd characters, replace spaces with '-'.
          // -------------------------------------------------------------------
          var idtitle = title.toLowerCase().replace(/\.|,|:|;|'|"/g, '-').replace(/\s/g, '-').replace(/&/g, 'and');

          // Add an id to current element. Uses idtitle, which is properly formed.
          // -------------------------------------------------------------------
          el.attr( "id", "internal-" + idtitle + "-" + i );

          // Build a link to the elements unique ID.
          // -------------------------------------------------------------------
          var link = "#" + el.attr("id");

          var newLine =
            "<li>" +
              "<a class='toc' href='" + link + "'>" +
                // The title has spaces - it is not hyphenated.
                title +
              "</a>" +
            "</li>";

          floatToc += newLine;

          counter = i;

    });

    // Close up the ul and the nav elements
    // -------------------------------------------------------------------------
    floatToc +=
       "</ul>" +
      "</nav>";

    // Put the TOC in the page, only if there are headings
    // -------------------------------------------------------------------------
    if( counter >= 1 ){

      $( "#float-toc" ).prepend(floatToc);

    }

    // If there are no headings, remove the TOC
    // -------------------------------------------------------------------------
    if( counter === 0 ){

      $( "#float-toc" ).remove();

    }

    // Show/hide the TOC
    // -------------------------------------------------------------------------
    var hideNav = "false";

    $( ".hideNav" ).html( hideNav );

    // Click the hide TOC button
    // -------------------------------------------------------------------------
    $( "#hide-toc" ).click( function(){

      hideNav = "true";
      // Fade out the TOC, show the "Show Nav" button (which restores it)
      // -----------------------------------------------------------------------
      $( "#float-toc" ).fadeOut( 200 );
      $( "#show-toc" ).toggle( 200 );

    });

    // Click the "Show Nav" button...
    // -------------------------------------------------------------------------
    $( "#show-toc" ).click( function(){

      hideNav = "false";
      // Fade in the TOC and hide the "Show Nav" button
      // -----------------------------------------------------------------------
      $( "#float-toc" ).fadeIn(200);
      $( "#show-toc" ).toggle(200);

    });

      /**
       * Animate the scroll to top
       *
       * @see: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
       */
      $( "a[href^='#internal']" ).on( "click",function (e) {

	    e.preventDefault();

          var target = this.hash;
	        var $target = $(target);
          var topPad = "#internal-go-to-top-0" == target ? 180 : 90;

          $( "html, body" ).stop().animate({

               "scrollTop": $target.offset().top -topPad

          }, 300, "swing");

      });


    });

})( jQuery );
