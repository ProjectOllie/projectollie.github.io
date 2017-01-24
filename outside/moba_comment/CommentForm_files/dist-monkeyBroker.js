var getQueryParams = function(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  var params = {};
  vars.forEach(function(v) {
    var key = v.split('=')[0];
    var value = v.split('=')[1];
    params[key] = value;
  });
  return params;
};

var loadScript = function(url, callback) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
};

var loadMonkeyBrokerAd = function(id, topUrl) {
  var site = {
    id: id,
    topUrl: decodeURIComponent(topUrl),
  };
  loadScript('https://d3pkae9owd2lcf.cloudfront.net/mb105.gz.js', function() {
    MonkeyBroker.site = site;
    MonkeyBroker.addAttribute('mb_ri', 90);
    MonkeyBroker.addSlot({
      sizes: ["300x250"],
      el: document.getElementById('monkey-broker'),
    });
    MonkeyBroker.go();
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  var params = getQueryParams();
  loadMonkeyBrokerAd(params.id, params.topUrl);
});
;