/* ------------------------------------------------
  Project:   WCS
  Author:   
  ------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Preloader  
  3. FullScreen
  4. Counter
  5. Owl carousel
  6. Dropdown
  7. Isotope
  8. Magnific Popup
  9. Fixed Header
  10. Text Color, Background Color And Image
  11. Contact Form
  12. ProgressBar
  13. Parallax
  14. Countdown
  15. Rangeslider
  16. Btnproduct
  17. LightSlider
  18. Wow Animation
  19. Particles
  20. Window load and functions
  

  ------------------------ */

  "use strict";

/*------------------------------------
  HT Predefined Variables
  --------------------------------------*/
  var $window = $(window),
  $document = $(document),
  $body = $('body'),
  $fullScreen = $('.fullscreen-banner') || $('.section-fullscreen'),
  $halfScreen = $('.halfscreen-banner');

//Check if function exists
$.fn.exists = function () {
  return this.length > 0;
};


/*------------------------------------
  HT PreLoader
  --------------------------------------*/
  function preloader() {
   $('#ht-preloader').fadeOut();
 };

/*------------------------------------
  HT FullScreen
  --------------------------------------*/
  function fullScreen() {
    if ($fullScreen.exists()) {
      $fullScreen.each(function () {
        var $elem = $(this),
        elemHeight = $window.height();
        if($window.width() < 768 ) $elem.css('height', elemHeight/ 1);
        else $elem.css('height', elemHeight);
      });
    }
    if ($halfScreen.exists()) {
      $halfScreen.each(function () {
        var $elem = $(this),
        elemHeight = $window.height();
        $elem.css('height', elemHeight / 2);
      });
    }
  };


/*------------------------------------
  HT Counter
  --------------------------------------*/
  function counter() {  
    $('.count-number').countTo({
      refreshInterval: 2
    });   
  };


/*------------------------------------
  HT Owl Carousel
  --------------------------------------*/
  function owlcarousel() {
    $('.owl-carousel').each( function() {
      var $carousel = $(this);
      $carousel.owlCarousel({
        items : $carousel.data("items"),
        slideBy : $carousel.data("slideby"),
        center : $carousel.data("center"),
        loop : true,
        margin : $carousel.data("margin"),
        dots : $carousel.data("dots"),
        nav : $carousel.data("nav"),      
        autoplay : $carousel.data("autoplay"),
        autoplayTimeout : $carousel.data("autoplay-timeout"),
        navText : [ '<span class="la la-angle-right"></span>','<span class="la la-angle-left"><span>' ],
        responsive: {
          0:{items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1},
          576:{items: $carousel.data('sm-items')},
          768:{items: $carousel.data('md-items')},
          1024:{items: $carousel.data('lg-items')},
          1200:{items: $carousel.data("items")}
        },
      });
    });
  };


/*------------------------------------
  HT Dropdown
  --------------------------------------*/  
  function dropdown() {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });
  };


/*------------------------------------
  HT Isotope
  --------------------------------------*/ 
  function isotope() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('.portfolio-filter').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });


  // change is-checked class on buttons
  $('.portfolio-filter').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
};

/*------------------------------------
  HT Magnific Popup
  --------------------------------------*/
  function magnificpopup() {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
    if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
   }

 };     


/*------------------------------------
  HT Scroll to top
  --------------------------------------*/
  function scrolltop() {
    var pxShow = 300,
    goTopButton = $(".scroll-top")
    // Show or hide the button
    if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= pxShow) {
        if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
      } else {
        goTopButton.removeClass('scroll-visible')
      }
    });
    $('.smoothscroll').on('click', function (e) {
      $('body,html').animate({
        scrollTop: 0
      }, 3000);
      return false;
    });
  };


/*------------------------------------
  HT Fixed Header
  --------------------------------------*/
  function fxheader() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 300) {
        $('#header-wrap').addClass('fixed-header');
      } else {
        $('#header-wrap').removeClass('fixed-header');
      }
    });
  };


/*------------------------------------------
  HT Text Color, Background Color And Image
  ---------------------------------------------*/
  function databgcolor() {
    $('[data-bg-color]').each(function(index, el) {
     $(el).css('background-color', $(el).data('bg-color'));  
   });
    $('[data-text-color]').each(function(index, el) {
     $(el).css('color', $(el).data('text-color'));  
   });
    $('[data-bg-img]').each(function() {
     $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
   });
  };


/*------------------------------------
  HT Contact Form
  --------------------------------------*/
  function contactform() { 
    $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "php/contact.php";

        // POST values in the background the the script URL
        $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: function (data)
          {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the 
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            
            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
                // inject the alert to .messages div in our form
                $('#contact-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
                // empty the form
                $('#contact-form')[0].reset();
              }
            }
          });
        return false;
      }
    })    
  };


/*------------------------------------
  HT ProgressBar
  --------------------------------------*/
  function progressbar () {
    var progressBar = $('.progress');
    if(progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data('value');

          Self.find('.progress-bar').animate({
            width:progressValue+'%'           
          }, 1000);
        });
      })
    }
  };


/*------------------------------------
  HT Parallax
  --------------------------------------*/
  function parallax() {
    $(".parallaxie").parallaxie({
      speed: 0.4,
      offset: 0,
    });
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, { 
      orientation: 'right' 
    });
  };


/*------------------------------------
  HT Countdown
  --------------------------------------*/
  function countdown() {
    $('.countdown').each(function () {
      var $this = $(this),
      finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
      });
    });
  };


/*------------------------------------
  HT Rangeslider
  --------------------------------------*/
  function rangeslider() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  };


/*------------------------------------
  HT btnproduct
  --------------------------------------*/
  function btnproduct() {
    $('.btn-product-up').on('click', function (e) {
      e.preventDefault();
      var numProduct = Number($(this).next().val());
      if (numProduct > 1) $(this).next().val(numProduct - 1);
    });
    $('.btn-product-down').on('click', function (e) {
      e.preventDefault();
      var numProduct = Number($(this).prev().val());
      $(this).prev().val(numProduct + 1);
    }); 
  };


/*------------------------------------
  HT LightSlider
  --------------------------------------*/
  function lightSlider() {
   $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    verticalHeight:450,
    thumbItem:4,
    slideMargin:0,
    speed:600,
    autoplay: true,
  });  
 };



/*------------------------------------
  HT Wow Animation
  --------------------------------------*/
  function wowanimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }

/*------------------------------------
  HT Particles
  --------------------------------------*/

  function particles() {
    jQuery("#particles-js").each(function () {
      particlesJS( {
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#1360ef"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#f94f15"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

    })
  }

/*------------------------------------
  Custom data loading
  --------------------------------------*/
  var item_xlsx = './assets/data/item.xlsx';
  
  var all_items = [];
  var all_cats = [];
  var subcats = [];

  var catQuery = '';
  var subCatQuery = '';
  var titleQuery = '';
  
  function load_data() {
    
    // Retrieve query parameters
    catQuery = get_param('cat');
    subCatQuery = get_param('subcat');
    titleQuery = get_param('searchtext');
    //console.log('queriy = ' + catQuery + '/' + subCatQuery + '/' + titleQuery);
    $('#searchtext').val(titleQuery);
    $('#cat').val(catQuery);
    
    fetch(item_xlsx).then(function (res) {
      if (!res.ok) throw new Error("fetch failed");
      return res.arrayBuffer();
    }).then(function (ab) {
      var data = new Uint8Array(ab);
      var workbook = XLSX.read(data, {
        type: "array"
      });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      all_items = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      
      // On successful data retrieval, generate cat/subcat lists, and populate page elements
      populate_cats();
      populate_subcats(catQuery);
      
      render_category_form();
      render_search_form(catQuery, titleQuery, all_items);
      render_search_summary(catQuery, titleQuery, all_items);
      //render_search_category(catQuery, titleQuery, all_items);
      render_search_results(catQuery, titleQuery, all_items);
    });
  }
  
  /*
   * Get query string parameter
   */
   function get_param(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  /*
   * Extract categories from full item array (filter/map/sort)
   */
   function populate_cats() {
    all_cats = all_items.filter(function (value, index, self) {
      return self.findIndex(i => i.cat === value.cat) === index;
    }).map(obj => {
      let newObj = {}
      newObj.key = obj.cat
      newObj.value = obj.field
      return newObj
    }).sort((a, b) => (a.value.toUpperCase() > b.value.toUpperCase()) ? 1 : -1);
    //console.log(cat_list);
  }
  
  /*
   * Extract sub-categories from full item array (filter/map/sort) - filtered by parent category
   */
   function populate_subcats(cat) {
    if (!cat) {
      cat = "";
    }

    if (cat === "") {
      subcats = [];
      $('#subcat').attr("disabled", true);
    } else {
      subcats = all_items.filter(function (value, index, self) {
        if (!cat || cat === "") {
          return true;
        } else {
          return value.cat === cat;
        }
      }).filter(function (value, index, self) {
        return self.findIndex(i => i.subcat === value.subcat) === index;
      }).map(obj => {
        let newObj = {}
        newObj.key = obj.subcat
        newObj.value = obj.subspecialty
        return newObj
      }).sort((a, b) => (a.value.toUpperCase() > b.value.toUpperCase()) ? 1 : -1);
      $('#subcat').attr("disabled", false);
    }

    /*
     * create function to update subcats when cat changes
     */
     $('#cat').change(function() {
      populate_subcats(this.value)
      $('#subcat').empty().append($("<option></option>").attr("value", "").attr("selected", "true").text("Select"));
      if (this.value === "") {
        // no category set - disable
        $('#subcat').attr("disabled", true);
        return;
      } else {
        // enable subcat - append subcats
        $('#subcat').attr("disabled", false);
        $.each(subcats, function(index, cat) {
          $('#subcat').append($("<option></option>")
           .attr("value", cat.key).text(cat.value));
        });
      }
    })
   }
   
  /*
   * Render publications navigation from journal categories.
   */
   function render_category_form() {
    $.each(all_cats, function (index, cat) {
      $('#catlist').append(
        '<form method="GET" action="results.html" style="float: left;">' +
        '<input type="hidden" name="cat" value="' + cat.key + '"/>' +
        '<input style="margin-right: 1rem;" type="submit" class="btn btn-primary shadow px-5 py-2 mt-2 rounded d-block d-sm-inline-block" value="' + cat.value + '">' +
        '</form>'
        );
    });
  }
  
  /*
   * Render form options. [TODO - categories]
   */
   function render_search_form(cat, query, items) {
    $.each(subcats, function (index, subcat) {
      $('#subcat').append(
        '<option value="' + subcat.key + '">' + subcat.value + '</option>'
        );
    });
    
    // set current value
    $('#subcat').val(subCatQuery);
  }
  
  /*
   * Render search summary.
   */
   function render_search_summary(cat, query, items) {
    if (query) {
      $('#datasummary').html('<span style="display: inline; font-size: 28px; font-weight: bold;">Search results for "'+query+'"</span><hr>');
    } else {
      //$('#datasummary').html('<span style="display: inline; font-size: 28px; font-weight: bold;">&nbsp;</span>');
    }
  }
  
  /*
   * Render category summary [NO LONGER REQUIRED?]
   */
   function render_search_category(cat, query, items) {

    //console.log('cat: ' + $.inArray(cat, all_cats));
    //console.log('cat: ' + all_cats[cat-1].name);
    
    // if (cat) {
    //   $('#datacategory').html(
    //     '<span style="display: inline; font-size: 28px; font-weight: bold;">&quot' + all_cats[cat-1].name + '&quot; Journals</span>&nbsp;&nbsp;&nbsp;' +
    //     '<span style="color: gray; font-size: 14px; font-weight: 500;">' + '???' + ' RESULTS FOUND</span><br><br>' +
    //     '<div style="box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);">' +
    //     '  <div class="col-lg-12">' +
    //     '    <div class="row" style="padding: 2%; font-weight: bold; font-size: 14px;">' +
    //     '      <div class="col-lg-3">' +
    //     '        <span>GLOBAL REACH<br><span style="font-size: 24px">6</span></span>' +
    //     '      </div>' +
    //     '      <div class="col-lg-3">' +
    //     '        <span>REGIONAL BREAKDOWN</span><br>' +
    //     '            <span><span style="font-size: 22px">10% </span>APAC</span><br>' +
    //     '            <span><span style="font-size: 22px">40% </span>EMEA</span><br>' +
    //     '           <span><span style="font-size: 22px">30% </span>Americas</span><br>' +
    //     '           <span><span style="font-size: 22px">20% </span>ANZ</span>' +
    //     '         </div>' +
    //     '         <div class="col-lg-3">' +
    //     '           <span>NUMBER OF JOURNALS<br><span style="font-size: 26px">16</span><br><br>NUMBER OF JOURNALS RANKING TOP 10 IN THE JCR<br><span style="font-size: 26px">5</span></span>' +
    //     '          </div>' +
    //     '          <div class="col-lg-3">' +
    //     '            <span>NUMBER OF SOCIETY PARTNERS<br><span style="font-size: 26px">10</span><br><br>E-NEWSLETTER SUBSCRIBERS<br><span style="font-size: 26px">6.27k</span></span>' +
    //     '          </div>' +
    //     '        </div>' +
    //     '      </div>' +
    //     '  </div><br>');
    // }
  }
  
  /*
   * Filter items and render search results
   */
   function render_search_results(cat, query, items) {
    
    let results = all_items.filter(function (value, index, self) { // filter by cat 
      if (!catQuery || catQuery === "") {
        return true;
      } else {
        return value.cat == catQuery;
      }
    }).filter(function (value, index, self) { // filter by subcat
      if (!subCatQuery || subCatQuery === "") {
        return true;
      } else {
        //console.log(value.subcat + " = " + subCatQuery + " : " + (value.subcat == subCatQuery))
        return value.subcat == subCatQuery;
      }
    }).filter(function (value, index, self) { // filter by query
      if (!titleQuery || titleQuery === "") {
        return true;
      } else {
        //var catRegex = new RegExp(cat, "i");
        var regex = new RegExp(titleQuery, "i");
        return value.name.search(regex) != -1;
      }
    })
    //console.log(results);
    
    $.each(results, function (index, value) {
      $('#datalist').append(
        '<div class="itemlist">'+
        '<span><h3 style="display:inline;">'+value.name+'</h3><h6 style="display:inline; margin-left: 1%;"><a <a target="_blank" rel="noopener noreferrer" href="assets/media-kits/'+value.mediaKitLink+'">'+value.mediaKit+'</a>&nbsp; <a href="'+value.journalLink+'">View Journal Website</a></h6></span>'+
        '<div class="col-lg-12" style="background-color: white;"><br>'+
        '<div class="row">'+
        '<div class="col-lg-2" style="margin-right: 2%;">'+
        '<a href="#" class="thumbnail"><img style="height: 210px; width: 160px;" src="covers/'+value.journalImage+'"></a>'+
        '</div>'+
        '<div class="col-lg-2">'+
        '<div><span><strong>FREQUENCY <br></strong>'+value.frequency+'</span></div><br>'+
        '<div><span><strong>VOLUMES <br></strong>'+value.volume+'</span></div><br>'+
        '<div><span><strong>IMPACT FACTOR <br></strong>'+value.impact+'</span></div><br>'+
        '<div><span><strong>SOCIETIES <br></strong>'+value.society+'</span></div>'+
        '</div>'+
        '<div class="col-lg-3">'+
        '<div><span><strong>ANNUAL UNIQUE VISITORS <br></strong>'+value.auv+'</span></div><br>'+
        '<div><span><strong>AVERAGE MONTHLY VISITS <br></strong>'+value.amv+'</span></div><br>'+
        '<div><span><strong>ISI JOURNAL CITATION REPORTS© RANKING <br></strong>'+value.ranking+'</span></div>'+
        '</div>'+
        '<div class="col-lg-4">'+
        '<div class="result-field"><span><strong>SPECIALTY<br></strong>'+value.field+'</span></div><br>'+
        '<div class="result-field"><span><strong>SUB-SPECIALTY<br></strong>'+value.subspecialty+'</span></div><br>'+
        '<div><span><strong>AUDIENCE <br></strong>'+value.audience+'</span></div>'+
        '</div>'+
        '</div><br>'+
        '</div>'+
        '</div>'+
        '<hr>'
        );
    });
  }

/*------------------------------------
  HT Window load and functions
  --------------------------------------*/
  $(document).ready(function() {
    fullScreen(),
    owlcarousel(),
    counter(),
    dropdown(),
    magnificpopup(),
    scrolltop(),
    fxheader(),
    databgcolor(),  
    contactform(),
    progressbar(),
    parallax(),
    countdown(),
    rangeslider(),
    btnproduct(),
    lightSlider(),
    particles();
    load_data();
  });

  // $window.resize(function() { });

  $(window).on('load', function() {
    preloader(),
    isotope(),
    wowanimation();
  });


// Custom JS

function backgroundColor() {
  document.getElementById("underline-1").style.background = "#000000";
  document.getElementById("underline-1").style.height = "3px";
  document.getElementById("underline-2").style.background = "#858585";
  document.getElementById("underline-2").style.height = "2px";
  document.getElementById("underline-3").style.background = "#858585";
  document.getElementById("underline-3").style.height = "2px"
  document.getElementById("underline-1").style.background = "#000000";
}

function backgroundColorTwo() {
  document.getElementById("underline-1").style.background = "#858585";
  document.getElementById("underline-1").style.height = "2px";
  document.getElementById("underline-2").style.background = "#000000";
  document.getElementById("underline-2").style.height = "3px";
  document.getElementById("underline-3").style.background = "#858585";
  document.getElementById("underline-3").style.height = "2px"
}

function backgroundColorThree() {
  document.getElementById("underline-1").style.background = "#858585";
  document.getElementById("underline-1").style.height = "2px";
  document.getElementById("underline-2").style.background = "#858585";
  document.getElementById("underline-2").style.height = "2px";
  document.getElementById("underline-3").style.background = "#000000";
  document.getElementById("underline-3").style.height = "3px";
}

// function onSpotOne(){
//   document.getElementById("underline-1").style.background = "#000000";
//   document.getElementById("underline-1").style.height = "3px";
// }

// function outSpotOne(){
//   document.getElementById("underline-1").style.background = "#858585";
//   document.getElementById("underline-1").style.height = "2px";
// }
// function onSpotTwo(){
//   document.getElementById("underline-2").style.background = "#000000";
//   document.getElementById("underline-2").style.height = "3px";
// }

// function outSpotTwo(){
//   document.getElementById("underline-2").style.background = "#858585";
//   document.getElementById("underline-2").style.height = "2px";
// }
// function onSpotThree(){
//   document.getElementById("underline-3").style.background = "#000000";
//   document.getElementById("underline-3").style.height = "3px";
// }

// function outSpotThree(){
//   document.getElementById("underline-3").style.background = "#858585";
//   document.getElementById("underline-3").style.height = "2px";
// }

// Navigation hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
      );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}