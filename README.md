# fancypassword
Make your lousy password input fancy

Requirements:
jQuery
Bootstrap css

Initialization:

Basic usage:
$("#yourpassword").fancypassword();

Fancy password settings:

let settings = $.extend({
    generator: false,
    numbers: true,
    letters: true,
    specialchars: false,
    specialcharsallowed: "",
    filter: function(generatedpassword){return generatedpassword;},
    onpasswordhide: function(e){},
    onpasswordshow: function(e){},
    toall: false
},options);


