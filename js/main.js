        	var mycarouselElem = $("#mycarousel");
			mycarouselElem.carousel( { interval: 1500 } );

			$("#carousel-background").click(function(){
                $(".carousel-inner img").toggleClass( "width100pct" );
            });			

			$("#carousel-pause").click(function(){
				var elem = $( "#carousel-pause > span" );
				if ( elem.hasClass( "fa-pause" ) ) 		
				{ // then doing pause
					mycarouselElem.carousel('pause');
				} else {  // else doing cycle							 
					mycarouselElem.carousel('next');
					mycarouselElem.carousel('cycle');
				}
				elem.toggleClass( "fa-pause" );
				elem.toggleClass( "fa-play" );
            });