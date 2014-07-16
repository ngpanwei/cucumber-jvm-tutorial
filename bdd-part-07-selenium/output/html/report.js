$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "login-to-the-website",
  "description": "As a user I want to login to the website from any visitor.",
  "name": "Login to the website",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2240486000,
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
  "location": "LoginUISteps.user_is_on_any_page()"
});
formatter.result({
  "duration": 365685000,
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
  "location": "LoginUISteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 4651322000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.40.0\u0027, revision: \u0027fbe29a9\u0027, time: \u00272014-02-19 20:55:11\u0027\nSystem info: host: \u0027bogon\u0027, ip: \u0027125.211.213.133\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.3\u0027, java.version: \u00271.7.0_25\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat ngpanwei.tests.functional.login.LoginUISteps.user_enters_and(LoginUISteps.java:70)\n\tat ✽.When user enters \"username\" and \"password\"(login.feature:7)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:579)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:337)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:546)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:367)\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat ngpanwei.tests.functional.login.LoginUISteps.user_enters_and(LoginUISteps.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.infinitest.testrunner.JUnit4Runner.runJUnitTest(JUnit4Runner.java:91)\n\tat org.infinitest.testrunner.JUnit4Runner.runTest(JUnit4Runner.java:57)\n\tat org.infinitest.testrunner.TestRunnerProcess.runTest(TestRunnerProcess.java:70)\n\tat org.infinitest.testrunner.TestRunnerProcess.writeTestResultToOutputStream(TestRunnerProcess.java:112)\n\tat org.infinitest.testrunner.TestRunnerProcess.main(TestRunnerProcess.java:89)\n"
});
formatter.match({
  "location": "LoginUISteps.submit_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginUISteps.the_user_has_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19157000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.40.0\u0027, revision: \u0027fbe29a9\u0027, time: \u00272014-02-19 20:55:11\u0027\nSystem info: host: \u0027bogon\u0027, ip: \u0027125.211.213.133\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.3\u0027, java.version: \u00271.7.0_25\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:588)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:442)\n\tat ngpanwei.tests.functional.login.LoginUISteps.afterScenario(LoginUISteps.java:55)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.infinitest.testrunner.JUnit4Runner.runJUnitTest(JUnit4Runner.java:91)\n\tat org.infinitest.testrunner.JUnit4Runner.runTest(JUnit4Runner.java:57)\n\tat org.infinitest.testrunner.TestRunnerProcess.runTest(TestRunnerProcess.java:70)\n\tat org.infinitest.testrunner.TestRunnerProcess.writeTestResultToOutputStream(TestRunnerProcess.java:112)\n\tat org.infinitest.testrunner.TestRunnerProcess.main(TestRunnerProcess.java:89)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:579)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:546)\n\t... 41 more\n"
});
});