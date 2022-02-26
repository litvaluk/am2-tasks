# Task 2

Simple website with a button and a text. When the button is clicked, a javascript function is triggered, that fetches a large file (~166MB) from https://cdn.jsdelivr.net/pyodide/v0.16.1/full/scipy.data using XHR. The text under the button shows current status of the fetch operation. These statuses can be shown:

* READY - when the page is loaded
* LOADING - when the open method was called
* LOADED - when the send method was called
* DOWNLOADING - while the data is being downloaded
* FINISHED DOWNLOADING - when the data has been downloaded

![Screenshot](screenshot.png)
