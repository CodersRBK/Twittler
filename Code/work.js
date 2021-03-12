$(document).ready(function(){
    var $div = $('div');
    
    $("#btn").click(function(){
        $div.html('');
        var index = streams.home.length - 1;
        console.log(index)
        while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message+ '  ' + tweet.created_at);
            $tweet.appendTo($div);
            index -= 1;
          }
    });
  }); 