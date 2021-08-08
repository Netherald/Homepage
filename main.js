// JQuery (For index.html)
$()
{
    $(document).on('mousewheel', (e) => {
        var wheel = e.originalEvent.wheelDelta;
        if (wheel > 0) {
            $('#article1').removeClass('fadeout').addClass('fadein')
        } else {
            $('#article1').removeClass('fadein').addClass('fadeout')
        }
    })

    var observer = new MutationObserver((mutations => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName == "class") {
                var attributeValue = $(mutation.target).prop(mutation.attributeName);
                if (attributeValue == "fadeout") {
                    setTimeout(() => {
                        $('#neticon').attr('src', "https://cdn.discordapp.com/attachments/796384846704279555/873778377369210900/blank.png")
                        $('#netex').hide()
                        $('#tempo').show()
                    }, 400);
                } else {
                    $('#neticon').attr('src', "https://cdn.discordapp.com/attachments/796384846704279555/873778488421801984/YTIBmHAFO1QECEBF3twRBAjAiDNkSxCADL3BAwgQgAFHsEJHgAB07CdMJgATrmCHigABqMibO4IAARhxhmwJApChN3gAAQIw4AhW.png");
                    $('#netex').show()
                    $('#tempo').hide()
                }
            }
        })
    }))

    $(document).ready(() => {
        observer.observe($('#article1')[0], {
            attributes: true
        })
    })
}