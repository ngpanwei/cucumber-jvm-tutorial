Cucumber-jvm tutorial Part 02
=============================

This is the second part of the tutorial where we explore requirements. 
In this tutorial, we use the example of a backlog management system.

### requirements
We explore the requirements using mind-mapping and store the results in the opportunity.xmind file. 

![MindMap](help/BDD-Part-02-01-Mind-Map.png)  
We explore a number of features and each feature has a number of scenarios expressed 
using natural language in the Gherkin format (i.e. Given, When Then, etc.) 

We then zoom in to a feature (using F6 in XMind) and export the feature to a *.feature file.
[BacklogManagement.feature](requirements/features/BacklogManagement.feature)
````
Feature: 管理任务
	Description
		In order to 保证项目进度
		As a Scrum Master
		I want to 记录任务，搜索未完成任务
	Considerations
		在多项目情况
		import 大批量 Excel task list

Scenario: 有未完成任务
	Given Backlog 有 任务 "Task123"
	Given Backlog 有 任务 "TaskAB"
	When 我完成 "Task123"
	Then 未完成任务是 "TaskAB"

Scenario: 有些任务达到某个状态
````

If you right click on test/ngpanwei/bdd/tests/FeatureTest.java
and select Run As --> JUnit Test, you will see the following in the console window.
````java
2 Scenarios (1 undefined, 1 passed)
4 Steps (4 undefined)
0m0.000s


You can implement missing steps with the snippets below:

@Given("^Backlog 有 任务 \"(.*?)\"$")
public void backlog_有_任务(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^我完成 \"(.*?)\"$")
public void 我完成(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^未完成任务是 \"(.*?)\"$")
public void 未完成任务是(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}
````
You can use the above generated code to write your first test.
Proceed to [Part 3](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-03-test-skeleton)
where we show you how to use the above generated code to create your test definition skeleton.

[TOP](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/README.md)
[1](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-01-skeleton/README.md)
[2](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-02-features/README.md)
[3](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-03-test-skeleton/README.md)
[4](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-04-test-code/README.md)
[5](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-05-elaborate/README.md)
[6](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-06-spring/README.md)
[7](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-07-selenium/README.md)
