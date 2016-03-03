$('.user-form').on('submit', function (e, $http) {
    e.preventDefault();

    var userInfo = {
      name: $("#name").val(),
      email: $("#email").val()
    };

    console.log(userInfo);
    // $.postJSON("./assets/info.json")
    //   .done(function(msg){
    //     msg = "NOW";
    //     alert("Data Saved: " + msg);
    //   });

      $.ajax({
        url: "http://localhost:8000/AJAX-Practice/assets/info.json",
        type: "post",
        dataType: "json",
        success: function (data){
          $("#success").html(data.msg);
        },
        data: userInfo
      });

      // $.ajax({
      //   method: "POST",
      //   url: "./assets/info.json",
      //   data: userInfo
      // })
      // .done(function( msg ) {
      //   msg = "NOW";
      // alert( "Data Saved: " + msg );

      // $http.post("./assets/info.json", userInfo).then(function(){
      //   $http.get("./assets/info.json");
      //   })

    // });

});
