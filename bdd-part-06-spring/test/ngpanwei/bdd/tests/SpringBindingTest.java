package ngpanwei.bdd.tests;

import static org.junit.Assert.assertNotNull;
import ngpanwei.backlog.IBacklogService;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringBindingTest {
	@Test
	public void bindBacklogImplShouldReturnValue() {
		ApplicationContext appContext = new ClassPathXmlApplicationContext(
					new String[] { "ngpanwei/bdd/tests/ApplicationContext.xml" });
		IBacklogService backlog = (IBacklogService) appContext.getBean("backlogImpl") ;
		assertNotNull("Backlog should be bounded",backlog) ;
	}
}
