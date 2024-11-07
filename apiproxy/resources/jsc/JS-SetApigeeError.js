   var faultName = context.getVariable("fault.name");
 context.setVariable("exceptionName", "exceptionName");
 //var apiNo = "001";
 
switch (faultName) {
case "SpikeArrestViolation":
    context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "429");
	context.setVariable("errorDesc", "Too Many Requests");
	context.setVariable("errorMessage", "Spike arrest violation");
	context.setVariable("httpError", "429");
	break;
	
case "QuotaViolation":
	context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "429");
	context.setVariable("errorDesc", "Too Many Requests");
	context.setVariable("errorMessage", "Rate limit quota violation. Quota limit exceeded");
	context.setVariable("httpError", "429");
	break;

case "InvalidApiKey":
    context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "401");
	context.setVariable("errorDesc", "Invalid ApiKey");
	context.setVariable("errorMessage", "Invalid ApiKey");
	context.setVariable("httpError", "401");
	break;
	
case "InvalidApiKeyForGivenResource":
    context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "404");
	context.setVariable("errorDesc", "Resource not found");
	context.setVariable("errorMessage", "Resource not found/Invalid resource");
	context.setVariable("httpError", "404");
	break;
	
case "invalid_access_token":
	context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "401");
	context.setVariable("errorDesc", "Unauthorized");
	context.setVariable("errorMessage", "Unauthorized access. Please provide valid credentials");
	context.setVariable("httpError", "401");
	break;

case "access_token_expired":
	context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "401");
	context.setVariable("errorDesc", "Unauthorized");
	context.setVariable("errorMessage", "The access token provided has expired.");
	context.setVariable("httpError", "401");
	break;
	
case "RaiseFault":
	context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "404");
	context.setVariable("errorDesc", "Resource not found");
	context.setVariable("errorMessage", "Resource not found/Invalid resource");
	context.setVariable("httpError", "404");
	break;
	
default:
	context.setVariable("exceptionName", "exceptionName");
	context.setVariable("errorCode", "500");
	context.setVariable("errorDesc", "Internal Server Error");
	context.setVariable("errorMessage", faultName);
	context.setVariable("httpError", "500");
	break;	
}   