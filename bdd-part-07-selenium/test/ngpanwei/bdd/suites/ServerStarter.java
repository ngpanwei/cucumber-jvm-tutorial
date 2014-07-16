package ngpanwei.bdd.suites;

import ngpanwei.backlog.web.SimplestServer;
import ngpanwei.bdd.tests.BacklogTestServer;

import org.junit.Test;

public class ServerStarter {
	@Test
	public void startServer() throws Exception {
		BacklogTestServer server = new BacklogTestServer() ;
		server.isService = false ;
		SimplestServer.setServer(server) ;
		SimplestServer.main(null);
	}
}
