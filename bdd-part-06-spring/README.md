Cucumber-jvm tutorial Part 06
=============================

In this Part 6 of the tutorial we run cucumber within spring.

We do the necessary spring setup with an [ApplicationContext.xml]() as part of the test infrastructure.
[BacklogManagement.feature](test/ngpanwei/bdd/tests/ApplicationContext.xml) as follows:
````
<beans xmlns="http://www.springframework.org/schema/beans"
     ...>
	<context:component-scan base-package="ngpanwei.backlog" />
</beans>
````
The step definition file [BacklogStepDefs.java](test/ngpanwei/bdd/stepdefs/BacklogStepDefs.java) needs to have the ApplicationContext defined
````java
@ContextConfiguration(locations = "classpath:ngpanwei/bdd/tests/ApplicationContext.xml")
public class BacklogStepDefs {
	@Inject
	private IBacklogService backlog ;
	// ....
}	
````
[TOP](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/README.md)
[1](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-01-skeleton/README.md)
[2](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-02-features/README.md)
[3](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-03-test-skeleton/README.md)
[4](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-04-test-code/README.md)
[5](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-05-elaborate/README.md)
[6](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-06-spring/README.md)
[7](https://github.com/ngpanwei/cucumber-jvm-tutorial/blob/master/bdd-part-07-selenium/README.md)