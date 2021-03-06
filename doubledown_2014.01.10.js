//
// Double Down ($$) JavaScript Library
// Written by Kendall Purser
// 08/23/2012 - 09/21/2012
// Version: doubledown_2014.01.10.js 
// 
// Objectives:
// 1- To provide cleaner/additional functionality through a small JavaScript library.
// 2- Fix some of the less graceful parts of JavaScript.
//

var $$,dd;

// Start library
$$ = {

// check that the document is ready before running any JavaScript
  ready : function(x){
  	t = setInterval(function(){
  		if(document.readyState === "complete"){
  			return x;
  			clearInterval(t);
  		},1000)
  	}
  	// maybe try this instead
  	//window.onload = function (x);
  },

// $$.error(code,message) to handle IE(8) console.log issues
// "code" can be a line number or some other numeric tracking system
// tested 12/19/2012 on Chrome 23 and IE 9
// IE 10 has fixed the console.log issue, so this will be useless when IE10 is the trailing edge browser
  error : function(code,message){
  	if (typeof console === "undefined" || typeof console.log === "undefined") {
       	alert(code + ":" + message);
       } else {
       	console.log(code + " : " + message);
       }

  },
  
// $$.redirect(path, pathtype, offset)
// -Allows the user to do a relative redirect
// -Redirects to a child or parent directory
// -Link should include preceeding "/" ie- /us/en/index.html
// Pathtype: 
//  	0- absolute
//  	1- relative
// Offset: 
//  	Lets the user define if an extra "/file.html" needs removed from the location path, default is 1, so use "-1" if no file name needs removed. Can be used instead of multiple "../".

  redirect : function (link, path_type, offset) {
  	var x, link_parse, parent_count;
  	
  	if (path_type === undefined) {
  		pathtype = 1;
  	} else {
  		pathtype = path_type;
  	}

  	if (pathtype === 1) {
// relative path
  		if (offset === undefined) {
  			parent_count = 1;
  		} else {
  			parent_count = offset;
  		}

// find out how many parents there are and remove them from the link
  		link_parse = link.split("/");
  		for (i = 0; i < link_parse.length; i += 1){
  			if (link_parse === "..") {
  				parent_count += 1;
  				link_parse.shift();
  			}
  		}
  		link = link_parse.join("/");

// remove correct number of parents and add link
  		x = window.location.href;
  		for (i = 0; i < parent_count; i += 1) {
  			x = x.slice(0, x.lastIndexOf("/"));
  		}
  		x = x + link;

  	} else if (pathtype === 0) {
// absolute path
  		x = link;
  	}
  	window.location.href = x;
  },

// $$.get(id or name or class,value,return variable)
// getElementsByClassName is supported in IE 9 and later
  get : function(incget){
  	var inc, get, give_me;
  	inc = incget[0];
  	get = incget.slice(1, incget.length - 1)
  	if(inc === "i" || inc === "#"){
  		give_me = document.getElementById(get);
  	} else if(inc === "n" || inc === "_"){
  		give_me = document.getElementsByName(get);
  	} else if(inc === "c" || inc === "."){
  		give_me = document.getElementsByClassName(get);
  	}
  	return give_me;
  },
  
  
// $$.arrayCheck(in_array,obj)
// Returns true of value is in the array, or false if it isn't
  arrayCheck : function(in_array,obj) {
	var i = in_array.length;
	while (i--) {
		if (in_array[i] == obj) {
			return true;
		}
	}
	return false;
   },
	
// $$.arrayTotal(in_array,return variable)
// Adds numeric values of a mixed array
// in_array = array to use
  arrayTotal : function(in_array){
  	var array_total;
  	for(i=0;i<in_array.length;i++){
  		//check that each element is a number first
  		if (typeof in_array[i] === number){
    			array_total += in_array[i];
    		}
     	//console.log(pt_total);
  	}
  	return array_total;
  },

// $$.arrayConcat(in_array,join,return variable)
// in_array = array to use
// join = what to join the strings with  (similar to .join("");)
  arrayConcat : function(in_array,join){
  	var array_total;

  	if (join === undefined) {
  		join = " ";
  	} 

  	for(i=0;i<in_array.length;i++){
  		//check that each element is a string first
  		if (typeof in_array[i] === string){
    			array_total += in_array[i] + join;
    		}
     	//this.error(pt_total);
  	}
  	return array_total;
  },

// $$.arraySort(array,mode) Make .sort easier to use
// 1- alphabetic (asc)
// 2- reverse alphabetic (desc)
// 3- numeric (asc)
// 4- reverse numeric (desc)
  arraySort : function (in_array,mode){
  	if(mode === 1){
  		in_array.sort();
  	} else if(mode === 2){
  		in_array.sort();
  		in_array.reverse();
  	} else if(mode === 3){
  		in_array.sort(function(a,b){return a-b});
  	} else if(mode === 4){
  		in_array.sort(function(a,b){return b-a});
  	}
  },
//
// Translate text via JSON object
// key= id of container
// value = translated text
//
//   $$.translate({
//  	"key" : "value",
//  	"myId" : "Translation goes here"
//  	"myId2" : "Another translation goes here"
//  })
// tested 2012 on FF16, Chrome23, IE8 & 9 
//
  translate: function (trans_in){
    var i;
      for (i in trans_in){
        document.getElementById(i).innerHTML = trans_in[i];
      }
  },
   },
// Add a timestamp to beat the cache
  timestamp : new Date().getTime()
};


// Set custom identifier to avoid collisions
// Remember to add the identifier to the var statement on line 12
dd = $$;
