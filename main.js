// var assignCategory = {
//     O: ["1"],
//     R: ["abc", "def", "ghi", "jkl"],
//     I: ["bob", "mike", "leo", "raph"],
//     D: ["dummy", "dummy"]
// }

// function changecat(value) {
//     if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
//     else {
//         var catOptions = "";
//         for (categoryId in assignCategory[value]) {
//             catOptions += "<option>" + assignCategory[value][categoryId] + "</option>";

//         }
//         document.getElementById("category").innerHTML = catOptions;
//     }
//     $('#unitName').removeClass('d-none');
//     
// }

$(document).ready(function() {
    $('.card-link').click(function() {
        $('#searchBox').toggleClass('d-none');
        $('#clear').toggleClass('d-none');
    });
    // $('#orgLevel').on('change', function() {
    //     $('#regionName').toggleClass('d-none', this.value != 'B');
    //     if ($('#regionName').hasClass('d-none')) {
    //         $('#unitName').removeClass('d-none')
    //     } else {
    //         $('#unitName').addClass('d-none')
    //     };
    // });
    document.getElementById('orgLevel').addEventListener('change', function () {
        $('#clear').removeClass('d-none');

        var untName = this.value == 1 ? 'block' : 'none';
        document.getElementById('unitName').style.display = untName;       
        var rgnName = this.value == 2 ? 'block' : 'none';
        document.getElementById('regionName').style.display = rgnName;
        var instName = this.value == 3 ? 'block' : 'none';
        document.getElementById('instituteName').style.display = instName;
        var deptName = this.value == 4 ? 'block' : 'none';
        document.getElementById('departmentName').style.display = deptName;       
    });

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