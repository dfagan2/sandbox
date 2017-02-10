var codepenConfig = {
	title                 : document.title,
	private               : true,
	editors               : "111", // Set which editors are open. In this example HTML open, CSS closed, JS open
	layout                : "left", // top | left | right
	css_starter           : "neither", //"normalize" || "reset" || "neither"
	css_prefix            : "neither", //"autoprefixer" || "prefixfree" || "neither"
	js_pre_processor      : "none", //"none" || "coffeescript" || "babel" || "livescript" || "typescript"
	css_external          : "", //"http://yoursite.com/style.css", // semi-colon separate multiple files
	js_external           : "", //"http://yoursite.com/script.js" // semi-colon separate multiple files
};

function setConfigs (prefs) {
	if (typeof prefs === 'object') {
		Object.keys(prefs).forEach(function (key) {
			codepenConfig[key] = prefs[key];
		});
	}
}

setConfigs(codepenPreferences);

function callAjax(url, callback){
	var xhr;
	// compatible with IE7+, Firefox, Chrome, Opera, Safari
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == XMLHttpRequest.DONE ) {
			if (xhr.status == 200) {
				callback(xhr.responseText);
			} else {
				alert('An error occured in initializing codepen config');
			}
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}


var widgetData = {
	html: document.getElementById("widget-container").innerHTML,
	css: '',
	js: ''
};

callAjax('main.css', function(response){
	widgetData.css = response;

	callAjax('main.js', function(response){
		widgetData.js = response;

		setConfigs(widgetData);

		// Quotes will screw up the JSON
		var JSONstring = JSON.stringify(codepenConfig).replace(/"/g, "&​quot;").replace(/'/g, "&apos;");

		var frame = 
		'<div class="widget-name">' + document.title + '</div>' + 
		'<form action="http://codepen.io/pen/define" method="POST" target="_blank">' + 
		'<input type="hidden" name="data" value=\'' + 
		JSONstring + 
		'\'>' + 
		'<input type="image" src="sandbox-resources/codepen.png" value="Create New Pen with Prefilled Data" class="codepen-mover-button">' +
		'</form>';

		document.getElementById("widget-frame").innerHTML = frame;
	});
});







