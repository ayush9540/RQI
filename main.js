var assignCategory = {
    A: ["1"],
    B: ["abc", "def", "ghi", "jkl"],
    C: ["bob", "mike", "leo", "raph"],
    D: ["dummy", "dummy"]
}

function changecat(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (categoryId in assignCategory[value]) {
            catOptions += "<option>" + assignCategory[value][categoryId] + "</option>";

        }
        document.getElementById("category").innerHTML = catOptions;
    }
    $('#unitName').removeClass('d-none');
    $('#clear').removeClass('d-none');
}

$(document).ready(function() {
    $('.card-link').click(function() {
        $('#searchBox').toggleClass('d-none');
        $('#clear').toggleClass('d-none');
    });

    // $('#orgLevel').on('change', function() {
    //     $('#selectRegion').toggleClass('d-none', this.value != 'Region');
    // });
});

$(function() {
    $('select[multiple].active.region').multiselect({
        columns: 1,
        placeholder: 'Select Region(s)',
        search: true,
        searchOptions: {
            'default': 'Search here...'
        },
        selectAll: true
    });

    $('select[multiple].active.institute').multiselect({
        columns: 1,
        placeholder: 'Select Institute(s)',
        search: true,
        searchOptions: {
            'default': 'Search here...'
        },
        selectAll: true
    });

    $('select[multiple].active.dept').multiselect({
        columns: 1,
        placeholder: 'Select Department(s)',
        search: true,
        searchOptions: {
            'default': 'Search here...'
        },
        selectAll: true
    });

});