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
package ngpanwei.backlog.app.backlog;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ngpanwei.backlog.web.SimplestServer;

@SuppressWarnings("serial")
public class BacklogServlet extends HttpServlet {
	private IBacklogService backlog ;
	@Override
	public void init(ServletConfig config)
	          throws ServletException {
		backlog = (Backlog)SimplestServer.appContext().getBean("backlog") ;
	}
	public void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.err.println("Current thread: ["+Thread.currentThread()+"] "
				+"["+this+"]") ;
		String action = request.getParameter("action");
		if(action!=null&&action.equals("add")) {
			String taskName = request.getParameter("taskName");
			if(taskName!=null&&taskName.trim().length()>0) {
				System.err.println("Adding Task");
				synchronized(backlog) {
					backlog.add(taskName) ;
				}
			}
		}
		List<Task> tasks = null ;
		synchronized(backlog) {
			tasks = backlog.getTasks() ;
		}
	    request.setAttribute("tasks", tasks);
	    RequestDispatcher view = request.getRequestDispatcher("/tasks.jsp");
	    view.forward(request, response);		
	}
	public void doGet2(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.err.println("Current thread: ["+Thread.currentThread()+"] "
				+"["+this+"]") ;
		String action = request.getParameter("action");
		if(action!=null&&action.equals("add")) {
			String taskName = request.getParameter("taskName");
			if(taskName!=null&&taskName.trim().length()>0) {
				System.err.println("Adding Task");
				synchronized(backlog) {
					backlog.add(taskName) ;
				}
			}
		}
		
		PrintWriter out = response.getWriter();
		out.println("<html><h1>Backlog</h1><hr/>");
		out.println("New Task <form action='/task' method='post'>"
				  + "<input name='action' value='add' type='hidden' />"
				  + "<input name='taskName' /><input type='submit' value='add'></form>") ;
		if(backlog!=null) {
			List<Task> tasks = null ;
			synchronized(backlog) {
				tasks = backlog.getTasks() ;
			}
			if(tasks.size()<1) {
				out.println("<h1>No Backlog Items</h1><hr/>");
			} else {
				out.println("<table><tr><td>Task Name</td><td>Status</td></tr>");
				for(Task task : tasks) {
					out.println("<tr>") ;
					out.println("<td>"+task.getName()+"</td>");
					out.println("<td>"+task.getStatus()+"</td>");
					out.println("</tr>") ;
				}
				out.println("</table>");
			}
		} else {
			System.err.println("Backlog is null");
		}
		out.println("<table>");
		
		out.println("</table>");
		out.println("</html>");
		out.close() ;
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		doGet(request, response);
	}

}
