# bootstrap-pagination
Bootstrap pagination function make its posibule to type fast pagination if you using Bootstrap.

* Sample *
$('.pagination').pagination({
	total: 25, // max pagenumber
	current: 3, // current page
	url : {
		link : 'callback' // callback({pagenumber}) function you want to call
	}
});
