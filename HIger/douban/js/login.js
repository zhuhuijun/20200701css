
$(function () {
    $("#smslogin").click(function () {
        console.info('smslogin');
        $('#smsloginform').show();
        $('#pwdloginform').hide();
    })
    $("#pwdlogin").click(function () {
        console.info('smslogin');
        $('#pwdloginform').show();
        $('#smsloginform').hide();

    })
});

