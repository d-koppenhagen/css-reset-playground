(() => {
  const selectField = document.getElementById('css-rule');

  selectField.addEventListener('change', changeSelection);

  function changeSelection($event) {
    const scriptHintElVisibility = document.getElementById('script-hint').style.visibility;
    console.log(scriptHintElVisibility);
    if ($event && $event.target && $event.target.value) {
      var sheet = window.document.styleSheets[0];
      sheet.insertRule(`* { all: ${event.target.value}; }`, sheet.cssRules.length);
      scriptHintElVisibility = 'visible';
    } else {
      scriptHintElVisibility = "hidden";
    }
  }
})();

