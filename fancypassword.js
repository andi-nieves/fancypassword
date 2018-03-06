
$.fn.fancypassword = function(options){
		
    $.fn._fancypassword = function(password){
        if($(this).closest(".showpass").length>0){
            return;
        }
        let _this = $(this);
        let additionalbtn = '';
        let charSets = "";
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

        if(settings.letters){
            charSets += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if(settings.numbers){
            charSets += '0123456789';
        }

        if(settings.specialchars){
            //let c = '^°!"§$%&/()=?`*+~\'#,;.:-_';
            let c = '-_!@#$%^&*()';
            if(settings.specialcharsallowed!=""){
                c = settings.specialcharsallowed;
            }
            charSets += c;
        }

        if(settings.generator){
            additionalbtn = '<button type="button" style="margin-right: 0" class="btn btn-default generatepass"><i class="glyphicon glyphicon-refresh"></i></button>';
        }

        _this.wrap(
                '<div class="input-group showpass">'+
                '</div>'
            );
        _this.after(
                '<span class="input-group-btn">' +
                additionalbtn +
                '<button type="button" class="btn btn-default showpass"><i class="glyphicon glyphicon-eye-open"></i></button>'+
                '</span>'
            );
        _this.attr("type","password");
        
        let generatePassword = function(length) {
            charSet = charSets;
            return Array.apply(null, Array(length || 10)).map(function() { 
                return charSet.charAt(Math.random() * charSet.length);
            }).join(''); 
        }

        _this.closest("div.showpass").on("click","button.generatepass",function(){
            let pass = settings.filter( settings.filter( generatePassword(10) ) );
            if(settings.toall){
                _this.closest("form").find("input[type='password']").val(pass);
            }
            _this.val(pass);
        });

        _this.closest("div.showpass").on("click","button.showpass",function(){
            var type = _this.attr("type");
            _this.attr("type",type=="text" ? "password" : "text");
            if(type=="text"){
                $(this).html('<i class="glyphicon glyphicon-eye-open"></i>');
                settings.onpasswordhide();
            }else{
                $(this).html('<i class="glyphicon glyphicon-eye-close"></i>');
                
                settings.onpasswordshow();
            }
        });
    }

    $.each($(this),function(){

        $(this)._fancypassword(options);

    });

}
$(document).on('ready',function(){
    $(".fancypassword").fancypassword();
});
