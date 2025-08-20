const data = [
    { id: 1, text: "Karim" },
    { id: 2, text: "Ashraf" },
    { id: 3, text: "Ali" }
];
$(document).ready(function () {
    $(".js-example-placeholder-multiple").select2({
        data: data,
        // placeholder: {
        //     id: '',
        //     text: ""
        // },
        allowClear: true,
        tags: true
    });
});
document.querySelector('.search-icon').addEventListener('click', function () {
    const wrapper = document.querySelector('.search-wrapper');
    wrapper.classList.add('expanded');

    // فتح select2 تلقائيًا
    setTimeout(() => {
        $('.js-example-placeholder-multiple').select2('open');
    }, 100); // استنى شوية بعد الظهور
});
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


const forBusinessToggle = document.querySelector('.for-business-toggle');
const dropdownForBusiness = document.querySelector('.dropdownForBusiness');

forBusinessToggle.addEventListener('click', () => {
    dropdownForBusiness.classList.toggle('active');
});



