
$(function () {
    $("#smslogin").click(function () {
        console.info('smslogin');
        $('#smsloginform').show();
        $('#pwdloginform').hide();
        $("#smslogin").removeClass("selected")
        $("#smslogin").addClass("selected")
        $("#pwdlogin").removeClass("selected")
    })
    $("#pwdlogin").click(function () {
        console.info('smslogin');
        $('#pwdloginform').show();
        $('#smsloginform').hide();
        $("#pwdlogin").removeClass("selected")
        $("#pwdlogin").addClass("selected")
        $("#smslogin").removeClass("selected")
    })
    $('.country-code').click(function(){
        $('.chrose-area').toggle();
    })
    $("#cc").click(function(){
        if($(this).hasClass('icon-qrcode')){
            $(this).removeClass('icon-qrcode');
            $(this).addClass('icon-pc');
            $("#qrcodeform").show();
            $("#loginform").hide();
        }else{
            $(this).removeClass('icon-pc');
            $(this).addClass('icon-qrcode');
            $("#loginform").show();
            $("#qrcodeform").hide();
        }
    });
});

