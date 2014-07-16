$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "id": "login-to-the-website",
  "description": "As a user I want to login to the website from any visitor.",
  "name": "Login to the website",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4487000,
  "status": "passed"
});
formatter.before({
  "duration": 1267000,
  "status": "passed"
});
formatter.scenario({
  "id": "login-to-the-website;login-successful",
  "tags": [
    {
      "name": "@Unit",
      "line": 4
    },
    {
      "name": "@Sample",
      "line": 4
    }
  ],
  "description": "",
  "name": "login successful",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "user is on any page",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "user enters \"username\" and \"password\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "submit login",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "the user has logged in successfully",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "LoginUnitSteps.user_is_on_any_page()"
});
formatter.result({
  "duration": 166523000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "LoginUnitSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1909000,
  "status": "passed"
});
formatter.match({
  "location": "LoginUnitSteps.submit_login()"
});
formatter.result({
  "duration": 239000,
  "status": "passed"
});
formatter.match({
  "location": "LoginUnitSteps.the_user_has_logged_in_successfully()"
});
formatter.result({
  "duration": 206000,
  "status": "passed"
});
});