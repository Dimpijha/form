
$(function () {
  $('div[id="show1"]').hide();

  //show it when the checkbox is clicked
  $('input[id="face_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show1"]').fadeIn();
      } else {
          $('div[id="show1"]').hide();
      }
  });
  $('input[id="face_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show1"]').hide();
      }
  });

  $('div[id="show2"]').hide();

  //show it when the checkbox is clicked
  $('input[id="instagram_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show2"]').fadeIn();
      } else {
          $('div[id="show2"]').hide();
      }
  });
  $('input[id="instagram_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show2"]').hide();
      }
  });


  $('div[id="show3"]').hide();

  //show it when the checkbox is clicked
  $('input[id="twitter_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show3"]').fadeIn();
      } else {
          $('div[id="show3"]').hide();
      }
  });
  $('input[id="twitter_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show3"]').hide();
      }
  });


  $('div[id="show4"]').hide();

  //show it when the checkbox is clicked
  $('input[id="linkedin_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show4"]').fadeIn();
      } else {
          $('div[id="show4"]').hide();
      }
  });
  $('input[id="linkedin_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show4"]').hide();
      }
  });

  $('div[id="show5"]').hide();

  //show it when the checkbox is clicked
  $('input[id="youTube_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show5"]').fadeIn();
      } else {
          $('div[id="show5"]').hide();
      }
  });
  $('input[id="youTube_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show5"]').hide();
      }
  });

  $('div[id="show6"]').hide();

  //show it when the checkbox is clicked
  $('input[id="snapChat_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show6"]').fadeIn();
      } else {
          $('div[id="show6"]').hide();
      }
  });
  $('input[id="snapChat_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show6"]').hide();
      }
  });

  $('div[id="show7"]').hide();

  //show it when the checkbox is clicked
  $('input[id="pinterest_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show7"]').fadeIn();
      } else {
          $('div[id="show7"]').hide();
      }
  });
  $('input[id="pinterest_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show7"]').hide();
      }
  });

  $('div[id="show8"]').hide();

  //show it when the checkbox is clicked
  $('input[id="tiktok_yes"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show8"]').fadeIn();
      } else {
          $('div[id="show8"]').hide();
      }
  });
  $('input[id="tiktok_no"]').on('click', function () {
      if ($(this).prop('checked')) {
          $('div[id="show8"]').hide();
      }
  });

});
