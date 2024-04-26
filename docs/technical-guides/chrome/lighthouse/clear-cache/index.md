# Lighthouse | Clear Cache

Summary - Prior to running a Lighthouse report you might see an alert about "stored data" affecting the metrics of the report. This The alert might look like this:


*There may be stored data affecting loading performance in this location: IndexDB. Audit this page in an incognito window to prevent those resources from affecting your scores.* 

This aricle is how to clear that alert and run your report

### Steps
1. Open the Developer Tools
2. Go to the "Lighthouse" tab
3. You see the troublesome alert  
![Image from images folder](~@source/images/chrome/lighthouse/clear-cache/lighthouse_clear-cache_alert.png)
4. Find the "Application" tab  - Click it  
![Image from images folder](~@source/images/chrome/lighthouse/clear-cache/lighthouse_clear-cache_application.png)
1. Find the "Clear Site Data" btn - Click it  
![Image from images folder](~@source/images/chrome/lighthouse/clear-cache/lighthouse_clear-cache_clear-site-data.png)
1. Go back to the Lighthouse section
2. You should no longer see the alert