Cucumber-jvm tutorial Part 04
=============================

In this part 4 of the tutorial, we write both the test code and the actual code.

We update the step definition file 
[test/ngpanwei/bdd/stepdefs/BacklogStepDefs.java](test/ngpanwei/bdd/stepdefs/BacklogStepDefs.java)
````java
public class BacklogStepDefs {
	Backlog backlog = null ;
	@Before
	public void setup() {
		backlog = new Backlog() ;
	}

	@Given("^Backlog 有 任务 \"(.*?)\"$")
	public void backlog_有_任务(String taskName) throws Throwable {
		Task newTask = backlog.add(taskName) ;
		assertNotNull(newTask) ;
	}

	@When("^我完成 \"(.*?)\"$")
	public void 我完成(String taskName) throws Throwable {
		Task task = backlog.setTaskStatus(taskName,Task.STATUS_DONE) ;
		assertNotNull("task should exist in backlog",task) ;
	}

	@Then("^未完成任务是 \"(.*?)\"$")
	public void 未完成任务是(String taskName) throws Throwable {
		List<Task> tasks = backlog.getUnompleteTask() ;
		Task task = tasks.get(0) ;
		assertEquals(task.getName(),taskName) ;
	}
}
````

[TOP](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/README.md)
[1](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-01-skeleton/README.md)
[2](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-02-features/README.md)
[3](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-03-test-skeleton)
[4](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-04-test-code)
[5](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-05-elaborate)

