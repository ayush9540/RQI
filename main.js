$(document).ready(function() {
    $('.card-link').click(function() {
        var elem = $("#collapseOne");
        if (!elem.hasClass("inside")) {
            elem.addClass("inside")
            $("#searchBox").hide();
            $("#clear").hide();
        } else if (elem.hasClass("inside")) {
            elem.removeClass("inside")
            $("#searchBox").show();
            $("#clear").show();
        }

    });

    /* clear & search from input search start */
    $('#cancel').click(function() {
        $("#inputSearch").show();
        $(".close-icon").hide();
        $("#searchbox_name_email").val("");
    });
    $("#inputSearch").click(function() {
        $(this).hide();
        $("#searchbox_name_email").focus();
    });
    $("#searchbox_name_email").click(function() {
        $("#inputSearch").hide();
    });
    $('#searchbox_name_email').keypress(function() {
        $("#inputSearch").hide();
    });
    $("#searchbox_name_email").focusout(function() {
        if ($(this).val().length === 0) {
            $("#inputSearch").show();
            $(".close-icon").hide();
        }
    });
    $("#searchbox_name_email").focusin(function() {
        $(".close-icon").show();
        $("#inputSearch").hide();
    });
    /* clear & search from input search end */

    document.getElementById('orgLevel').addEventListener('change', function() {
        $('#clear').removeClass('d-none');
        $('.card-link').removeClass('inactive');
        $('#searchbtn').removeClass('disabled');
        var untName = this.value == 1 ? 'block' : 'none';
        document.getElementById('unitName').style.display = untName;
        var rgnName = this.value == 2 ? 'block' : 'none';
        document.getElementById('regionName').style.display = rgnName;
        var instName = this.value == 3 ? 'block' : 'none';
        document.getElementById('instituteName').style.display = instName;
        var deptName = this.value == 4 ? 'block' : 'none';
        document.getElementById('departmentName').style.display = deptName;

        if (this.value == '2') {
            $("#regionInsidePanel").hide();
        } else {
            $("#regionInsidePanel").show();
        }

        if (this.value == '3') {
            $("#instituteInsidePanel").hide();
            $("#regionInsidePanel").hide();
        } else {
            $("#instituteInsidePanel").show();
        }

        if (this.value == '4') {
            var elem = $("#collapseOne");
            elem.removeClass("inside");
            $('.card-link').addClass('inactive');
            $("#deptInsidePanel").hide();
            $("#instituteInsidePanel").hide();
            $("#regionInsidePanel").hide();
            $("#collapseOne").removeClass("in").addClass("collapse");
            $("#searchBox").show();
            $("#clear").show();

        } else {
            $("#deptInsidePanel").show();
            $('.card-link').removeClass('inactive');
        }
    });
});

$(function() {
    $(".close-icon").hide();

    $("#clear,#clear-inCollapsible").bind("click", function() {
        $("select")[0].selectedIndex = 0;
        $('select[multiple]').multiselect('reset');
    });

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

    $('select[multiple].active.course').multiselect({
        columns: 1,
        placeholder: 'Select Course(s)',
        search: true,
        searchOptions: {
            'default': 'Search here...'
        },
        selectAll: true
    });
});