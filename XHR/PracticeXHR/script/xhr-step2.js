// 自分のhostnameに変更する
var path = 'http://localhost:8080/result/';

var sel = $('#bloodTypeBox');
var resArea = $('#resultArea');

sel.on('change', function() {
  var bloodType = $(this).val();
  if (bloodType === 'default') {
    return;
  }
  var url = path + 'type-' + bloodType + '.txt';

  $.get(url)
    .done(function(data) {
      resArea.text(data);
    })
    .fail(function(err) {
      console.error(err);
    });
});
