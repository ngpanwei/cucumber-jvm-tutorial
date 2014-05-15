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

import java.util.Date;
import java.util.List;

import ngpanwei.backlog.Backlog;
import ngpanwei.backlog.Task;
import cucumber.api.Format;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.* ;

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
