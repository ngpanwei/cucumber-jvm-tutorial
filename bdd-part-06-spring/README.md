Cucumber-jvm tutorial Part 06
=============================

In this Part 6 of the tutorial we run cucumber within spring.

We do the necessary spring setup with an [ApplicationContext.xml]() as part of the test infrastructure.
[BacklogManagement.feature](test/ngpanwei/bdd/tests/ApplicationContext.xml) as follows:
````
Feature: 管理任务
	Description
		In order to 保证项目进度
		As a Scrum Master
		I want to 记录任务，搜索未完成任务
	Considerations
		在多项目情况

Scenario: 有未完成任务
    Given Sprint 开始日期是 2014-05-23
	Given Backlog 有 任务:
	    | name    | status |
		| Task123 | TODO   |
		| TaskAB  | TODO   |
	When 我完成:
	    | name    | status | date       |
		| Task123 | DONE   | 2014-05-26 |
	Then 未完成任务是:
	    | name    | 
	    | TaskAB  |
````
We have complex inputs like dates and tables. 
We also update the step definition file 
[test/ngpanwei/bdd/stepdefs/BacklogStepDefs.java](test/ngpanwei/bdd/stepdefs/BacklogStepDefs.java)
as follows
````java
public class BacklogStepDefs {
	Backlog backlog = null ;
	@Before
	public void setup() {
		backlog = new Backlog() ;
	}
	@Given("^Sprint 开始日期是 (\\d+-\\d+-\\d+)$")
	public void sprint_开始日期是(@Format("yyyy-MM-dd") Date sprintStartDate) throws Throwable {
		System.err.println("Sprint Start Date : "+Converter.dateString(sprintStartDate)) ;
	}	
	@Given("^Backlog 有 任务:$")
	public void backlog_有_任务(List<TaskDef> taskDefs) throws Throwable {
		for(TaskDef taskDef : taskDefs) {
			System.err.println("New Task "+taskDef.name);
			Task newTask = backlog.add(taskDef.name) ;
			assertNotNull(newTask) ;
		}
	}
	@When("^我完成:$")
	public void 我完成(List<TaskDef> completedTasks) throws Throwable {
		for(TaskDef taskDef : completedTasks) {
			Task task = backlog.getTask(taskDef.name) ;
			task.setName(Task.STATUS_DONE);
		}
	}
	@Then("^未完成任务是:$")
	public void 未完成任务是(List<TaskDef> expectedTaskDefs) throws Throwable {
		for(TaskDef taskDef : expectedTaskDefs) {
			Task task = backlog.getTask(taskDef.name) ;
			assertFalse("Task status should not be DONE",
					task.getStatus().equals(Task.STATUS_DONE)) ;
		}
	}	
}
````
### Step-Definitions for complex inputs, for example dates:
````
    Given Sprint 开始日期是 2014-05-23
````
This is recognized by the step-definitions through regular expressions as follows:
````java
	@Given("^Sprint 开始日期是 (\\d+-\\d+-\\d+)$")
	public void sprint_开始日期是(@Format("yyyy-MM-dd") Date sprintStartDate) throws Throwable {
		System.err.println("Sprint Start Date : "+Converter.dateString(sprintStartDate)) ;
	}	
````
### Step-Definitions for tables
````
	Given Backlog 有 任务:
	    | name    | status |
		| Task123 | TODO   |
		| TaskAB  | TODO   |
````
This is recognized by the following step-definitions.
````java
	@Given("^Backlog 有 任务:$")
	public void backlog_有_任务(List<TaskDef> taskDefs) throws Throwable {
		for(TaskDef taskDef : taskDefs) {
			System.err.println("New Task "+taskDef.name);
			Task newTask = backlog.add(taskDef.name) ;
			assertNotNull(newTask) ;
		}
	}
````
Use an XXXDef for test data structures. In this case, we have [test/ngpanwei/bdd/stepdefs/TaskDef.java]
(test/ngpanwei/bdd/stepdefs/TaskDef.java). This naming convention is used to prevnt confusion between data 
structures in the implementation code versus the test codes.
````java
public class TaskDef {
	String name ;
	String status ;
	@XStreamConverter(Converter.DateConverter.class)
	Date date;	
}
````
### Converter class
The converter class is used to parse special regular expressions.
````java
public class Converter {
	public static final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd") ;
	
	public static String dateString(Date date) {
		return format.format(date) ;
	}
	public static class DateConverter extends Transformer<Date> {
		@Override
		public Date transform(String value) {
			Date date = null ;
			try {
				date = format.parse(value) ;
			} catch (ParseException ignore) {
			}		
			return date;
		}
	}
}
````



[TOP](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/README.md)
[1](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-01-skeleton/README.md)
[2](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-02-features/README.md)
[3](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-03-test-skeleton/README.md)
[4](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-04-test-code/README.md)
[5](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-05-elaborate/README.md)