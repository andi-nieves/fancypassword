# fancypassword
Make your lousy password input fancy

Requirements:
- jQuery
- Bootstrap css

Initialization:

Basic usage:
ID Selector:
```
$("#yourpassword").fancypassword();
```

Class Selector: (Multiple elements)
```
$(".yourpassword").fancypassword();
```
Apply to all password input
```
$("input[type='password']").fancypassword();
```
Using class:
```
<input type="password" class="fancypassword">
```

Fancy password settings:
```
let settings = $.extend({
    generator: false, //show password generator button
    numbers: true,
    letters: true,
    specialchars: false,
    specialcharsallowed: "",
    filter: function(generatedpassword){return generatedpassword;},
    onpasswordhide: function(e){},
    onpasswordshow: function(e){},
    toall: false //if true, copy the generated password to the other password input in the same form
},options);
```
Show password generator button
```
$(".fancypassword").fancypassword({specialchars:true,generator: true});
```
View samples here<br>
<a href="https://andi-nieves.github.io/fancypassword/">https://andi-nieves.github.io/fancypassword/</a><br>
Powered by:<br>
![andinieves](https://avatars0.githubusercontent.com/u/16531944?s=96&v=4)
