$('document').ready(function() {

  // on page load this hides the cirlces and keeps the div from starting in the collapsed position
  $('circle').fadeOut(0);
  // this allows the circles to animate by fading onto the screen with a random color on each circle
  function addCircleFadeIn() {
    d3.selectAll("circle").transition("elastic")
      .style("fill", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
      });
    $('circle').fadeIn(3000);
  }

  // makes the circles color change randomly with bright colors
  function toggleCircleColor() {
    d3.selectAll("circle").transition("elastic")
      .style("fill", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
      });
  }

  // event for adding the circles to the page
  $('#addCircles').click(function() {
    addCircleFadeIn();
  });

  // event for randomizing the color of the circles
  $('#randomizeColor').click(function() {
    toggleCircleColor();
  });

  // this adds the so-called deleted circle to the ul list and uses a li to do so
  $("circle").dblclick(function() {
    var theDeleted = $(this).attr("name");
    var theColor = $(this).css("fill");
    console.log(theColor);
    $(this).fadeOut("slow");
    $("<li>&bull;<span>" + theDeleted + "</span></li>").appendTo("ul").css("color", "" + theColor + "");
  });

  // on-click events for all the circles, this reveals a tooltip for the circle's unique id
  $('#circle-1').click(function() {
    $('#circle-1').tooltip({
      items: "#circle-1",
      content: "-1-"
    });
    $('#circle-1').tooltip("open");
  });

  $('#circle-2').click(function() {
    $('#circle-2').tooltip({
      items: "#circle-2",
      content: "-2-"
    });
    $('#circle-2').tooltip("open");
  });

  $('#circle-3').click(function() {
    $('#circle-3').tooltip({
      items: "#circle-3",
      content: "-3-"
    });
    $('#circle-3').tooltip("open");
  });

  $('#circle-4').click(function() {
    $('#circle-4').tooltip({
      items: "#circle-4",
      content: "-4-"
    });
    $('#circle-4').tooltip("open");
  });

  $('#circle-5').click(function() {
    $('#circle-5').tooltip({
      items: "#circle-5",
      content: "-5-"
    });
    $('#circle-5').tooltip("open");
  });

  $('#circle-6').click(function() {
    $('#circle-6').tooltip({
      items: "#circle-6",
      content: "-6-"
    });
    $('#circle-6').tooltip("open");
  });

  // slider from jQuery UI kit
  $(function() {
    $("#slider").slider({
      value: 1,
      min: 1,
      max: 3,
      step: 1,
      slide: function(event, ui) {
        $("#amount").val(ui.value);
      },
      change: function() {
        sliderUpdated();
      }
    });
    $("#amount").val($("#slider").slider("value"));
  });
  // slider amount update function
  function sliderUpdated() {
    var amountVal = $("#slider").slider("option", "value");

    d3.selectAll("circle")
      .transition()
      .style("opacity", 1 / amountVal);
  }

}); //end of document ready
