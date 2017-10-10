if ($.validator) {
    $.validator.setDefaults({
        errorElement: "em",
        errorPlacement: function(error, element) {
            error.addClass("help-block");

            if (element.parent().hasClass('input-group')) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            var parent = $(element).parent();
            if (parent.hasClass('input-group')) {
                parent = parent.parent();
            }
            parent.addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            var parent = $(element).parent();
            if (parent.hasClass('input-group')) {
                parent = parent.parent();
            }
            parent.addClass("has-success").removeClass("has-error");
        }
    });
}

if ($.fn.iCheck) {
    $('.ui-icheck').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('form').on('reset', function(e) {
        $(this).find('.ui-icheck').iCheck('uncheck');
    });
}

if ($.fn.dataTable) {
    $.extend(true, $.fn.dataTable.defaults, {
        // "processing": true,
        "serverSide": true,
        "searching": false,
        "ordering": false,
        "select": true
    });
}

$('.collapse-link').click(function() {
    var $panel = $(this).closest('div.panel');
    var $icon = $(this).find('i');
    var $body = $panel.find('div.panel-body');
    $body.slideToggle(200);
    $icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
});