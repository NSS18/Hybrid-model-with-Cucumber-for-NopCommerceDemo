$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/ChangeCurrency.feature");
formatter.feature({
  "name": "User should able to change the currency and able to see all products price with changed currency.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should able to see product prices  with selected currency symbol",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@currencyChange"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NopCom.MyStepdefs.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects currency",
  "keyword": "When "
});
formatter.match({
  "location": "com.NopCom.MyStepdefs.user_selects_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to see product prices with that currency symbol",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NopCom.MyStepdefs.user_should_able_to_see_product_prices_with_that_currency_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});