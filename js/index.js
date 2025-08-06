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
