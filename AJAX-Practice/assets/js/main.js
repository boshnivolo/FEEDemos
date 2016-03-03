$('.user-form').on('submit', function (e) {
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

      // $.ajax({
      //   url: "https://flickering-fire-2121.firebaseapp.com/assets/info.json",
      //   type: "post",
      //   dataType: "json",
      //   success: function (data){
      //     $("#success").html(data.msg);
      //   },
      //   data: userInfo
      // });

      $.ajax({
        url: "./info.json",
        type: "get",
        dataType: "json",
        success: function(data){
          $("#success").html(data.msg);
        },
        data: "Yay"
      })

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
