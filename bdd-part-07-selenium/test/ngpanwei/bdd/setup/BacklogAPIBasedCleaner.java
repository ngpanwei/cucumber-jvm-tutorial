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
package ngpanwei.bdd.setup;

import java.util.List;

import ngpanwei.backlog.app.backlog.Backlog;
import ngpanwei.backlog.app.backlog.IBacklogEnv;
import ngpanwei.backlog.app.backlog.IBacklogService;
import ngpanwei.backlog.app.backlog.Task;
import ngpanwei.backlog.web.SimplestServer;

import org.junit.Test;

import static org.junit.Assert.* ;
public class BacklogAPIBasedCleaner {

	private IBacklogEnv backlogEnv ;
	@Test
	public void emptyBacklog() throws Exception {
		IBacklogService  backlog = (Backlog)SimplestServer.appContext().getBean("backlog") ;
		IBacklogEnv backlogEnv = (IBacklogEnv)SimplestServer.appContext().getBean("backlog") ;
		
		List<Task> list = backlog.getTasks() ;
		assertNotEquals("list should not be empty before cleaning",0,list.size()) ;
		backlogEnv.reset();
		list = backlog.getTasks() ;
		assertEquals("list should be empty",0,list.size()) ;
	}
}
