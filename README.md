<h1>
  Digital Asset Sandbox <img align="right" src="box.png"> 
</h1>
HTML, CSS, JS for reusable widgets that we commonly see in the front-end development landscape. Peruse the widgets within this repo to pull down and tweak as necessary for your project. Then, when you are done with your project, step back and look at what was built that could be extracted, isolated, and shared with the team as springboards for their work. Follow the guide below in those instances to contribute and grow the library.

Each widget will have screenshots in the README for easy browsing, a link to a live GitHub Preview to test interactions, and an *Edit on Codepen* button on that page to prefill a Codepen for easy tweaks to test viability for your project.

# Contributing

For each widget you want to add to the library, you'll be creating a new folder, named appropriately, and adding it to the repo underneath the "widgets" directory. From a code standpoint, you'll need to distill it down to 3 main files: HTML, CSS, JS - as if you were creating a codepen. Chances are, if its too complex to boil down that way, it's not a good fit for this initiatve.

To keep these widgets agnostic, the setup should point to a single, processed CSS file, and a single ES5 Javascript file for your custom code. However you want to maintain those assets is fine (SASS, Babel, etc), just place your pre-processed files in the "resources" folder, and make sure their respective compiled version lives at the root.

1. For each contribution, copy the "template" directory into a new folder underneath "widgets". Name it appropriately.
2. Ensure your widget's main CSS file is named `main.css` and lives at the root of your widget's folder
3. Ensure your widget's main JS file is named `main.js` and lives at the root of your widget's folder
4. Make the following edits to the index.html file...

#### Include your markup.

```html
// index.html
...
<section id="widget-container">
	<!-- place widget HTML here. inside "inner" if you want padding or replace "inner" for full bleed -->
	<div class="inner">Testing</div>
</section>
...
```

#### Configure your codepen preferences, by modifying the following object on page.

```js
// index.html
...
// note that html, css, and js will be plugged in automatically
var codepenPreferences = {
	editors               : "111", // Set which editors are open. In this example HTML open, CSS closed, JS open
	css_starter           : "neither", //"normalize" || "reset" || "neither"
	css_prefix            : "neither", //"autoprefixer" || "prefixfree" || "neither"
	js_pre_processor      : "none", //"none" || "coffeescript" || "babel" || "livescript" || "typescript"
	css_external          : "", // e.g.: "http://yoursite.com/style.css". semi-colon separate multiple files
	js_external           : "", // e.g.: "http://yoursite.com/script.js". semi-colon separate multiple files
};
...
```

**Note:** if your widget requires a thirdy party library, like jQuery, rather than baking it into the `main.js` file, feel free to insert a `<script>` tag just above the `main.js` that points to that library, just make sure to also include that reference in the above `codepenPreferenes.js_external` setting. This will ensure that that library gets referenced for both your GitHub preview, as well as the resulting CodePen when the user clicks the *Edit on Codepen* button.

5. Update the `README.md` template at the root of your widget's folder
* Include a quick description of the widget, possible use cases, and any interesting nuances
* Include screenshots of your component for easy browsing
* Update the GitHub Preview Link in the format of: `http://htmlpreview.github.io/?[repo-url-for-your-widget]
6. Submit a Pull Request for your addition!


