const switcher = $("header button");
const cardPrice = $(".card-price");
const cardSection = $("main");

function ChangePrice() {
    if (switcher.hasClass("active")) {
        cardPrice.eq(0).html("<span class='me-2'>$</span>199.99");
        cardPrice.eq(1).html("<span class='me-2'>$</span>249.99");
        cardPrice.eq(2).html("<span class='me-2'>$</span>399.99");
    }
    else {
        cardPrice.eq(0).html("<span class='me-2'>$</span>19.99");
        cardPrice.eq(1).html("<span class='me-2'>$</span>24.99");
        cardPrice.eq(2).html("<span class='me-2'>$</span>39.99");
    }
}

ChangePrice();

switcher.click(function() {
    switcher.toggleClass("active");
    ChangePrice();
});