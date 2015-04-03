/*!
 * Bootstrap Pagination v1 (http://parisnakitakejser.com)
 * Copyright 2015 - Paris Nakita Kejser.
 */
(function( $ ){
	
	$.fn.pagination = function(options)
	{
		var settings = $.extend({
			total : null,
			current : null,
			url : {
				link : null
			},
			view : {
				next : true,
				previous : true
			}
		}, options );
		
		$(this).empty();
		
		if ( settings.total != null && settings.current != null )
		{
			if ( settings.view.next == true && settings.current != null && settings.current > 1 )
			{
				$( document.createElement('li') )
				.append(
					$( document.createElement('a') )
					.attr('style', 'cursor: pointer;')
					.attr('onclick', settings.url.link +'('+ ( parseInt(settings.current) - 1 ) +')')
					.html('&laquo;')
				)
				.appendTo( $(this) );
			}
		
			for( i = 1; i <= settings.total; i++ )
			{
				$( document.createElement('li') )
				.addClass( ( settings.current == i ? 'active' : '' ))
				.append(
					$( document.createElement('a') )
					.attr('style', 'cursor: pointer;')
					.attr('onclick', settings.url.link +'('+ i +')')
					.html( i )
				)
				.appendTo( $( this ) );
			}
		
			if ( settings.view.previous == true && settings.current != null && settings.current < settings.total  )
			{
				$( document.createElement('li') )
				.append(
					$( document.createElement('a') )
					.attr('style', 'cursor: pointer;')
					.attr('onclick', settings.url.link +'('+ ( parseInt(settings.current) + 1 ) +')')
					.html('&raquo;')
				)
				.appendTo( $(this) );
			}
		}
		else
		{
			$( document.createElement('li') )
			.html('You need to defined total or current settings')
			.appendTo( $(this) );
		}
		
		return this;
	};
	
}(jQuery));