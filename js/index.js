// const data = [
//     { id: 1, text: "Karim" },
//     { id: 2, text: "Ashraf" },
//     { id: 3, text: "Ali" }
// ];
// $(document).ready(function () {
//     $(".js-example-placeholder-multiple").select2({
//         data: data,
//         // placeholder: {
//         //     id: '',
//         //     text: ""
//         // },
//         allowClear: true,
//         tags: true,
//     });
// });
$(document).ready(function () {
    var data = {
        "ale": [
            "Affligem Blonde", "Amsterdam Big Wheel", "Amsterdam Boneshaker IPA", "Amsterdam Downtown Brown", "Amsterdam Oranje Summer White",
            "Anchor Liberty Ale", "Beaus Lug Tread Lagered Ale", "Beerded Lady", "Belhaven Best Ale", "Big Rock Grasshopper Wheat",
            "Big Rock India Pale Ale", "Big Rock Traditional Ale", "Big Rock Warthog Ale", "Black Oak Nut Brown Ale", "Black Oak Pale Ale",
            "Boddingtons Pub Ale", "Boundary Ale", "Caffreys", "Camerons Auburn Ale", "Camerons Cream Ale", "Camerons Rye Pale Ale", "Ceres Strong Ale",
            "Cheval Blanc", "Crazy Canuck Pale Ale", "Creemore Springs Altbier", "Crosswind Pale Ale", "De Koninck", "Delirium Tremens",
            "Erdinger Dunkel Weissbier", "Erdinger Weissbier", "Export", "Flying Monkeys Amber Ale", "Flying Monkeys Antigravity",
            "Flying Monkeys Hoptical", "Flying Monkeys Netherworld", "Flying Monkeys Smashbomb", "Fruli", "Fullers Extra Spec Bitter",
            "Fullers London Pride", "Granville English Bay Pale", "Granville Robson Hefeweizen", "Griffon Pale Ale", "Griffon Red Ale",
            "Hacker-Pschorr Hefe Weisse", "Hacker-Pschorr Munchen Gold", "Hockley Dark Ale", "Hoegaarden", "Hops & Robbers IPA", "Houblon Chouffe",
            "James Ready Original Ale", "Kawartha Cream Ale", "Kawartha Nut Brown Ale", "Kawartha Premium Pale Ale", "Kawartha Raspberry Wheat",
            "Keiths", "Keiths Cascade Hop Ale", "Keiths Galaxy Hop Ale", "Keiths Hallertauer Hop Ale", "Keiths Hop Series Mixer",
            "Keiths Premium White", "Keiths Red", "Kilkenny Cream Ale", "Konig Ludwig Weissbier", "Kronenbourg 1664 Blanc", "La Chouffe",
            "La Messager Red Gluten Free", "Labatt 50 Ale", "Labatt Bass Pale Ale", "Lakeport Ale", "Leffe Blonde", "Leffe Brune",
            "Legendary Muskoka Oddity", "Liefmans Fruitesse", "Lions Winter Ale", "Maclays", "Mad Tom IPA", "Maisels Weisse Dunkel",
            "Maisels Weisse Original", "Maredsous Brune", "Matador 2.0 El Toro Bravo", "Mcauslan Apricot Wheat Ale", "Mcewans Scotch Ale",
            "Mill St Belgian Wit", "Mill St Coffee Porter", "Mill St Stock Ale", "Mill St Tankhouse Ale", "Molson Stock Ale", "Moosehead Pale Ale",
            "Mort Subite Kriek", "Muskoka Cream Ale", "Muskoka Detour IPA", "Muskoka Harvest Ale", "Muskoka Premium Dark Ale", "Newcastle Brown Ale",
            "Niagaras Best Blonde Prem", "Okanagan Spring Pale Ale", "Old Speckled Hen", "Ommegang Belgian Pale Ale", "Ommegang Hennepin", "PC IPA",
            "Palm Amber Ale", "Petrus Blonde", "Petrus Oud Bruin Aged Red", "Publican House Ale", "Red Cap", "Red Falcon Ale", "Rickards Dark",
            "Rickards Original White", "Rickards Red", "Rodenbach Grand Cru", "Schofferhofer Hefeweizen", "Shock Top Belgian White",
            "Shock Top Raspberry Wheat", "Shock Top Variety Pack", "Sleeman Cream Ale", "Sleeman Dark", "Sleeman India Pale Ale", "Smithwicks Ale",
            "Spark House Red Ale", "St. Ambroise India Pale Ale", "St. Ambroise Oatmeal Stout", "St. Ambroise Pale Ale", "Stereovision Kristall Wheat",
            "Stone Hammer Dark Ale", "Sunny & Share Citrus Saison", "Tetleys English Ale", "Thirsty Beaver Amber Ale", "True North Copper Altbier",
            "True North Cream Ale", "True North India Pale Ale", "True North Strong", "True North Wunder Weisse", "Twice As Mad Tom IPA",
            "Unibroue La Fin Du Monde", "Unibroue Maudite", "Unibroue Trois Pistoles", "Upper Canada Dark Ale", "Urthel Hop-It Tripel IPA",
            "Waterloo IPA", "Weihenstephan Kristalweiss", "Wellington Arkell Best Bitr", "Wellington County Dark Ale", "Wellington Special Pale", "Wells IPA", "karim"
        ],
    };

    typeof $.typeahead === 'function' && $.typeahead({
        input: ".js-typeahead",
        minLength: 1,
        maxItemPerGroup: 5,
        backdrop: {
            "background-color": "rgba(0, 0, 0, 0.4)"
        },
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            data: data.ale,
            // Ale: {
            //     data: data.ale
            // },
        },
        callback: {
            onReady: function (node) {
                this.container.find('.' + this.options.selector.dropdownItem + '.group-ale a').trigger('click')
            },
            onDropdownFilter: function (node, query, filter, result) {
                console.log(query)
                console.log(filter)
                console.log(result)
            }
        },
        debug: true
    });
});
// document.querySelector('.search-icon').addEventListener('click', function () {
//     const wrapper = document.querySelector('.search-wrapper');
//     wrapper.classList.add('expanded');

//     setTimeout(() => {
//         $('.js-example-placeholder-multiple').select2('open');
//     }, 100);
// });

var dropdownContainer = $('.dropdown');
var dropdownMenu = $('.dropdown-menu');
dropdownContainer.on('click', toggleDropdown);
function toggleDropdown() {
    if (dropdownMenu.css('display') === 'block') {
        dropdownMenu.css('display', 'none');
    } else {
        dropdownMenu.css('display', 'block');
    }
}
$(window).on('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        dropdownMenu.css('display', 'none');
    }
});
var dropdownContainer1 = $('.dropdown-1');
var dropdownMenu1 = $('.dropdown-menu-1');
dropdownContainer1.on('click', toggleDropdown1);
function toggleDropdown1() {
    if (dropdownMenu1.css('display') === 'block') {
        dropdownMenu1.css('display', 'none');
    } else {
        dropdownMenu1.css('display', 'block');
    }
};
$(window).on('click', function (e) {
    if (!e.target.closest('.dropdown-1')) {
        dropdownMenu1.css('display', 'none');
    }
});

var forBusinessToggle = $('.for-business-toggle');
var dropdownForBusiness = $('.dropdownForBusiness');
forBusinessToggle.on('click', toggleBusiness);
function toggleBusiness() {
    if (dropdownForBusiness.css('display') === 'block') {
        dropdownForBusiness.css('display', 'none')
    } else {
        dropdownForBusiness.css('display', 'block');
    }
};
$(window).on('click', function (e) {
    if (!e.target.closest('.for-business-toggle')) {
        dropdownForBusiness.css('display', 'none');
    }
});




