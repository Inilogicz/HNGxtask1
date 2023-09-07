                                                                                                                        // script.js
document.addEventListener("DOMContentLoaded", function () {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Function to update the time and timezone
    function updateTime() {
        const now = new Date();
        
        // Format the time using Intl.DateTimeFormat
        const timeOptions = { 
            hour: "numeric", 
            minute: "numeric", 
            second: "numeric", 
            timeZoneName: "short" 
        };
        const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(now);
        
        // Update the time element
        timeElement.textContent = formattedTime;
    }
    
    // Update the time immediately
    updateTime();
    
    // Update the time every second
    setInterval(updateTime, 1000);
});
