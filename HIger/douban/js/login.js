
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
});

