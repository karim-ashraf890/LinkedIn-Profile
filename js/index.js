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
