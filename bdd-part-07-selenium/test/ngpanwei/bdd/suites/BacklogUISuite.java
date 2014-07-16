package ngpanwei.bdd.suites;

import ngpanwei.bdd.tests.BacklogFeatureTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ BacklogFeatureTest.class, 
				BacklogUICleaner.class })
public class BacklogUISuite {

	
}
