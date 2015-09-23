<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*"%>

<%
	String requestURL = request.getParameter("req");
	System.out.println("before : " + requestURL);
	String callBack = "callback";
	callBack = request.getParameter("callback");
	requestURL = requestURL.replace("^", "&");
	requestURL = requestURL.replace(" ", "%20");
	 System.out.println(requestURL);
    String responseData = null;
    if (requestURL != null) {
		BufferedReader ireader = null;
		HttpURLConnection connection = null;
		try {
		    URL url = new URL(requestURL);
		    connection = (HttpURLConnection) url.openConnection();
		    connection.connect();
		    ireader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
		    String str;
		    while ((str = ireader.readLine()) != null) {
			responseData = str;
		    }
		    connection.disconnect();
		} catch (Exception e) {
		    e.printStackTrace();
		} finally {
		    if (connection != null)
			connection.disconnect();
		    if (ireader != null)
			try {
			    ireader.close();
			    ireader = null;
			} catch (IOException e) {
			    e.printStackTrace();
			}
		}
		out.print(callBack + "(" + responseData + ")");
    } else
		out.print("Check req Param");
%>

