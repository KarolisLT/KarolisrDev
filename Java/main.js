// Šitą butiniai prirašykit be šitos funkcijos nieks neveiks.
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
    // Telefoninio Menu 'Toggle' funkcija
    $('.menu-btn').click(function () {
        // Ši kodo dalelė pasako, kad kai ant mygtuko paspaudžiama prie .navbar .menu klases prisideda 'active' klase
        $('.navbar .menu').toggleClass("active");
        // Ši kodo dalelė pasako, kad kai ant mygtuko paspaudžiama prie .menu-btn i klases prisideda 'active' klase
        $('.menu-btn i').toggleClass("active");
    });
    
    // Typing Animation
    var typed = new Typed(".typing", {
        strings: ["Programuotojas", "Web Dizaineris", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});
