$(document).ready(function(){

  /*setInterval(gradienBackground, 10000);

  /* Quote */
  getQuote();
  gradienBackground();
  $("#newQuote").on('click', getQuote);
  $("#newQuote").on('click', gradienBackground);

  /* Smooth scrolling */
  var scrollLink = $('.smoothScroll');
  scrollLink.click(function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 56
    }, 1000)
  })

  $(window).scroll(function(){
    var scrollLocation = $(window).scrollTop();
    scrollLink.each(function(e){
      var sectionOffset = $(this.hash).offset().top - 57;
      if (sectionOffset <= scrollLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })

  /* Navigation bar color change */
  $(window).scroll(function(){
    var h = $('.intro').height();
    if ($(document).scrollTop() > h){
      $('nav').css('background', 'rgb(64, 64, 64)');
      $('#dropdownConent').css('background', 'rgb(64, 64, 64)');
    } else {
      $('nav').css('background', 'rgba(64, 64, 64,.8)');
      $('#dropdownConent').css('background', 'rgba(64, 64, 64,.8)');
    }
  })

  /* Carousel time */
  $('.carousel').carousel({
    interval: 10000
  })

  $('#weatInfRight').click(function(){
    $('.side1').addClass('active');
    $('.side2').addClass('active');
  })

  $('#weatInfLeft').click(function(){
    $('.side1').removeClass('active');
    $('.side2').removeClass('active');
  })

}) /* DOCUMENT READY END */


function newGradient() {
  var gradientColors = [
    '#26A65B',
    '#2574A9',
    '#F64747',
    '#6C7A89',
    '#fdd835',
    '#5d4037'
  ];
  var g1 = gradientColors[Math.floor(Math.random() * gradientColors.length)];
  var g2 = gradientColors[Math.floor(Math.random() * gradientColors.length)];
  return 'linear-gradient(to top left,' + g1 + ', ' + g2 + ')';
}

function gradienBackground(){
  $('#content1').css('background', newGradient());
}


/* Get random quote */
function getQuote(){
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(result){
    var html = result.quote;
    $("#quoteContent").html(html);
    html = "<strong> - " + result.author + "</strong>";
    $("#quoteAuthor").html(html);
  });
};
