# jquery.overflown.js

With `.overflown()` you can query a dom element and find out if it is being overflown, meaning if any of its children is overflowing the parent.

This might for instance be useful for navigation-menues where you'd like to display a hamburger-button or alike if all navigation-entries wouldn't fit in the container (and you don't want to linewrap your navigation-menue).


### Usage

	if ( $(".nav").overflown(direction) ){
		$(".nav").addClass("overflown");
	}
	
Where `direction` is optional and can either be left out or be `"x"` or `"y"` to limit to the x- or y-axis. So if you'd like to specifically find out if an element is being overflown vertically, you'd use `.overflown("y")`, otherwise just use `.overflown()`

To use jquery.overflown, jQuery 1.7 or newer ist required and you'd include it in your document, something like this:

	// load jQuery first
	<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	// then load the .overflown() plugin
	<script src="jquery.overflown.js"></script>

### [See the jquery.overflown.js demo](https://zetasoftware.github.io/jquery-overflown-plugin/demo.html)

### License
jquery.overflown.js was written by <a href="https://www.zeta-software.de/">Zeta Software GmbH</a> for use in <a href="https://www.zeta-producer.com/">Zeta Producer</a> and is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License (MIT) </a>. This license is also supplied with the release and source code. 
As stated in the license, absolutely no warranty is provided.
