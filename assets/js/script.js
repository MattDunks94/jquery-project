/*-------------------------- Function to wait for document to load. --*/
$(document).ready(function () {
    /*----------- on click event handlers, changes the stream cards background color to red. --*/
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    /** Hover effect.
     * Changes the stream nav buttons to red when mouse enters.
     * Returns to original color when mouse leaves.
     */
    $("#stream1_btn").mouseenter(function () {
        $("#stream1_btn").addClass("make-red");
    });
    $("#stream1_btn").mouseleave(function () {
        $("#stream1_btn").removeClass("make-red");
    });
    $("#stream2_btn").mouseenter(function () {
        $("#stream2_btn").addClass("make-red");
    });
    $("#stream2_btn").mouseleave(function () {
        $("#stream2_btn").removeClass("make-red");
    });
    $("#stream3_btn").mouseenter(function () {
        $("#stream3_btn").addClass("make-red");
    });
    $("#stream3_btn").mouseleave(function () {
        $("#stream3_btn").removeClass("make-red");
    });

});