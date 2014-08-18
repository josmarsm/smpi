function formatDate(date) {
    var theDay = date.getDate();
    if (theDay < 10) {
        theDay = "0" + theDay
    }
    var theMonth = date.getMonth() + 1;
    if (theMonth < 10) {
        theMonth = "0" + theMonth
    }
    var theYear = date.getFullYear();
    return theDay + "/" + theMonth + "/" + theYear;
}

function formatDateTime(date) {
    if (date != null) {
	return formatDate(date)+' - '+formatTime(date);
    }
    return "";
}
function formatTime(date) {
	var theHour = date.getHours();
        if (theHour < 10) {
            theHour = "0" + theHour;
        }
        var theMinute = date.getMinutes();
        if (theMinute < 10) {
            theMinute = "0" + theMinute;
        }
        var theSecond = date.getSeconds();
        if (theSecond < 10) {
            theSecond = "0" + theSecond;
        }
	return theHour + ":" + theMinute + ":" + theSecond;
}
