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
package ngpanwei.backlog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

public class Backlog {

	private HashMap<String,Task> taskMap ;
	
	public Backlog() {
		taskMap = new HashMap<String,Task>() ;
	}
	
	public Task add(String taskName) {
		Task newTask = new Task(taskName) ;
		taskMap.put(taskName,newTask) ;
		return newTask ;
	}
	
	public Task getTask(String taskName) {
		Task task = taskMap.get(taskName) ;
		return task ;
	}
	
	public Task setTaskStatus(String taskName, String status) {
		Task task = getTask(taskName) ;
		task.setStatus(status);
		return task ;
	}
	
	public List<Task> getUnompleteTask() {
		List<Task> uncompletedTasks = new ArrayList<Task>() ;
		for(Entry<String,Task> entry : taskMap.entrySet()) {
			Task task = entry.getValue() ;
			if(!task.getStatus().equals(Task.STATUS_DONE)) {
				uncompletedTasks.add(task) ;
			}
		}
		return uncompletedTasks ;
	}
}
