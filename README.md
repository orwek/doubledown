doubledown
==========

A JavaScript library designed to fix some of the less graceful parts JavaScript and add additional functionality.

Example:

$$.error("100","Here is what is wrong");

Will log to the console in Firefox and Chrome, while displaying an alert in Internet Explorer.


API
=

.arrayCheck(in_array,obj)
-

Checks in_array for presence of obj, returns true or false accordingly.


.arrayConcat(in_array,join)
-

Contatenates all the strings in a mixed array.

join = " " (default)


.arraySort(in_array, mode)
-

Makes sorting arrays easier.

Mode: 0 = Alphabetic, 1 = Reverse Alphabetic, 2 = Numeric, 3 = Reverse Numeric


.arrayTotal(in_array)
-

Adds all the numeric values in a mixed array.


.error(code:message)
-

Allows you to report errors in a way that won't crash Internet Explorer.
Shows up in the console if available, and as an alert if the console is not.


.get(incget)
-

Get element by id, class, and name (IE9 and later). Similar to jQuery selector.

\# = id

. = class

_ = name (has limited support)


.ready(x)
-

Code to execute when the page has finished loading


.redirect(link,path_type,offset)
-

Allows the user to do a relative redirect. You will need to include the preceeding "/"

Link: relative or absolute link to redirect to.

Pathtype: 0 = absolute, 1 = relative (default is relative)

Offset: lets the user define the number of path segments need removed from the location path rather than using "../../"


.translate(trans_in)
-

Swap the inner html of any given id using a JSON string.

$$.translate({"key" : "value", "myId" : "Translation goes here", "myId2" : "Another translation goes here"})

.timestamp
-

returns the current time in milisecionds, add to the end of a url to beat the cache