(function($) {
    $(document).ready(function() {
        var loc = window.location.href;
                if (loc.includes('theme')) {
                    $('body').addClass('theme');
                }
                else if (loc.includes('time%20periods')) {
                    $('body').addClass('time-periods');
                };

                var linkIDs = document.getElementsByClassName('nav-header');
                    console.log(linkIDs);
                    for (var i=0; i<linkIDs.length; i++) {
                        var linkName = linkIDs[i].innerHTML.toLowerCase();
                        $(linkIDs[i]).addClass(linkName);         
                    };
                
                $('.menu a.plimoth').attr('target', '_blank');

    });
})(jQuery)