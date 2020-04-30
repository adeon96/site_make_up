$(document).ready(function() {
  //Header menu
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_nav').toggleClass('active');
  });
  
  //Block with clients
  $('.clients_burger').click(function(event) {
    $('.clients_burger, .client_items').toggleClass('active');
  });

  //Block with team
  $('.team_burger').click(function(event) {
    $('.team_burger, .team_members').toggleClass('active');
  });
});