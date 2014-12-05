/** 
 *  Copyright (c) 2014  Ng Pan Wei
 *  
 *  Permission is hereby granted, free of charge, to any person 
 *  obtaining a copy of this software and associated documentation files 
 *  (the "Software"), to deal in the Software without restriction, 
 *  including without limitation the rights to use, copy, modify, merge, 
 *  publish, distribute, sublicense, and/or sell copies of the Software, 
 *  and to permit persons to whom the Software is furnished to do so, 
 *  subject to the following conditions: 
 *  
 *  The above copyright notice and this permission notice shall be 
 *  included in all copies or substantial portions of the Software. 
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
 *  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN 
 *  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
 *  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 *  SOFTWARE. 
 */
package ngpanwei.bdd.stepdefs;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import ngpanwei.bdd.web.BaseUIStepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BacklogStepDefs extends BaseUIStepDefs {
	private String baseUrl;
	private boolean acceptNextAlert = true;
	private StringBuffer verificationErrors = new StringBuffer();

	@Before
	public void setUp() throws Exception {
		driver = new FirefoxDriver();
		baseUrl = "http://localhost:8080/";
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(baseUrl + "task");
	}

	@After
	public void tearDown() throws Exception {
		driver.quit();
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
	}

	@Given("^团队有任务 \"([^\"]*)\"$")
	public void teamGivenTask(String taskName) throws Throwable {
		driver.findElement(By.name("taskName")).clear();
		driver.findElement(By.name("taskName")).sendKeys(taskName);
		driver.findElement(By.cssSelector("input[type=\"submit\"]")).click();
	    assertTrue(isElementPresent(By.id("task-0")));
	}

	@When("^团队完成 \"([^\"]*)\"$")
	public void teamCompleteTask(String taskName) throws Throwable {
		// Express the Regexp above with the code you wish you had
		// throw new PendingException();
	}

	@Then("^团队的未完成任务是 \"([^\"]*)\"$")
	public void 团队的未完成任务是(String arg1) throws Throwable {
		// Express the Regexp above with the code you wish you had
		// throw new PendingException();
	}

	@Given("^团队有优先级 \"([^\"]*)\" 的任务 \"([^\"]*)\"$")
	public void 团队有优先级_的任务(String arg1, String arg2) throws Throwable {
		// Express the Regexp above with the code you wish you had
		// throw new PendingException();
	}

	@Then("^团队的未完成 \"([^\"]*)\" 优先级 任务是 \"([^\"]*)\"$")
	public void 团队的未完成_优先级_任务是(String arg1, String arg2) throws Throwable {
		// Express the Regexp above with the code you wish you had
		// throw new PendingException();
	}

}
