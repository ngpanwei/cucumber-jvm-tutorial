package ngpanwei.bdd.tests;

import ngpanwei.backlog.web.SimplestServer;

public class BacklogTestServer extends SimplestServer {
    public static void main(String[] args) throws Exception
    {
    		server = new BacklogTestServer() ;
    		SimplestServer.main(args);
    }
	public BacklogTestServer() {
		descriptor = "./web/WEB-INF/backlog-web.xml" ;
	}
}
