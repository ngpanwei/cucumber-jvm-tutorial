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
package ngpanwei.bdd.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ngpanwei.backlog.app.backlog.Backlog;
import ngpanwei.backlog.app.backlog.IBacklogEnv;
import ngpanwei.backlog.app.backlog.Task;
import ngpanwei.backlog.web.SimplestServer;

/**
 * This servlet provides functionality to reset the database via servlet calls.
 * @author ngpanwei
 */
@SuppressWarnings("serial")
public class TestEnvServlet extends HttpServlet {
	private IBacklogEnv backlogEnv ;
	@Override
	public void init(ServletConfig config)
	          throws ServletException {
		backlogEnv = (IBacklogEnv)SimplestServer.appContext().getBean("backlog") ;
	}
	public void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.err.println("Current thread: ["+Thread.currentThread()+"] "
				+"["+this+"]") ;
		String env = request.getParameter("env");
		if(env!=null&&env.equals("task")) {
			backlogEnv.reset() ;
		}
	    request.setAttribute("reset", env);
	    RequestDispatcher view = request.getRequestDispatcher("/testEnv.jsp");
	    view.forward(request, response);		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		doGet(request, response);
	}

}
