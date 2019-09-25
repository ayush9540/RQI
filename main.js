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
        // var els = $(".ms-options label");
        // els.addClass("mightOverflow");
        // $(".ms-selectall").trigger("click");
        // $("#instituteInsidePanel span").html("5 selected");
        // $("#deptInsidePanel span").html("5 selected");
        // $("#regionInsidePanel span").html("5 selected");
        // $("#regionName span").html("Select Region(s)");
        // $("#instituteName span").html("Select Institute(s)");
        // $("#departmentName span").html("Select Department(s)");
    });
    // $('select[multiple]').click(function() {
    //     $(".ms-options > label").addClass("mightOverflow");
    //     $(".ms-options-wrap.ms-active .ms-options ul li").addClass("mightOverflow");

    // });
    // $(".ms-options-wrap.ms-active .ms-options ul li").addClass("mightOverflow");
    //$(".ms-options > label").addClass("mightOverflow");

    // $(".ms-options-wrap.ms-active").find("li").addClass("test");

    // var x = $(".ms-options-wrap");
    // if (!x.hasClass("ms-active")) {
    //     $(x).addClass("test");
    //     alert("hi");
    // }

    // $.fn.tooltipOnOverflow = function(options) {
    //     $(this).on("mouseenter", function() {
    //         if (this.offsetWidth < this.scrollWidth) {
    //             options = options || { placement: "auto" }
    //             options.title = $(this).text();
    //             $(this).tooltip(options);
    //             $(this).tooltip("show");
    //         } else {
    //             if ($(this).data("bs.tooltip")) {
    //                 $tooltip.tooltip("hide");
    //                 $tooltip.removeData("bs.tooltip");
    //             }
    //         }
    //     });
    // };

    // $('.mightOverflow').tooltipOnOverflow();



    /* clear & search from input search start */
    $("#inputSearch").click(function() {
        $(this).hide();
        $("#searchbox_name_email").focus();
    });
    $("#searchbox_name_email").click(function() {
        $("#inputSearch").hide();
    });
    $(".close-icon").click(function() {
        $("#inputSearch").show();
    });
    $("#searchbox_name_email").focusout(function() {
        if ($(this).val().length === 0) {
            $("#inputSearch").show();
        }
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

    $("#clear,#clear-inCollapsible").bind("click", function() {
        $("select")[0].selectedIndex = 0;
        $('select[multiple]').multiselect('reset');
    });

    // var x = $(".ms-options-wrap.ms-active");
    // $(x).closest("li").addClass("testClass");

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