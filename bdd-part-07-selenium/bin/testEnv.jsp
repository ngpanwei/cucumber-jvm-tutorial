<%@ page import="java.util.*" %>
<%@ page import="ngpanwei.backlog.app.backlog.*" %>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Backlog Test Environment</title>
<body>
<h1>System State</h1>
<hr/>
	<form action='/env' method='post'>
	     <input name='env' value='task' type='hidden' />
		 <input name='reset-task' type='submit' value='Reset Backlog'>
	</form>
</body>
</html>