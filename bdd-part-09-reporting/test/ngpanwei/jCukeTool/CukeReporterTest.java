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
package ngpanwei.jCukeTool;

import ngpanwei.jCukeTool.formatter.CSVFormatter;
import ngpanwei.jCukeTool.formatter.HTMLTableFormatter;
import ngpanwei.jCukeTool.formatter.TextFormatter;
import ngpanwei.jCukeTool.model.World;
import ngpanwei.jCukeTool.util.FileHelper;

import org.junit.Test;

public class CukeReporterTest {
	public World world ;
	public CukeReporterTest() {
		world = new World() ;
	}
	@Test
	public void tabulateCukeResult() throws Exception {
		String content = FileHelper.readFile("results/json/feature-test.json");
		world.parseCukeJson(content);
		CukeReporter generator = new CukeReporter() ;
		generator.generateOutput(new TextFormatter(),world);
		generator.generateOutput(new CSVFormatter(),world);
		generator.generateOutput(new HTMLTableFormatter(),world);
	}
	@Test
	public void tabulateCukeHtml() throws Exception {
		String content = FileHelper.readFile("results/json/feature-test.json");
		world.parseCukeJson(content);
		String table = new CukeReporter().generateOutput(new HTMLTableFormatter(),world);
		String template = FileHelper.readFile("template/cucumber-template.html");
		template = template.replace("@CukeTable@", table) ;
		FileHelper.writeFile("results/html/feature-test.html",template) ;
	}
}
