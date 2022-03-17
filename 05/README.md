# Task 5

A company needs to design an AJAX aplication that will access various resources on the Web by using JavaScript code running in a browser. This application is not public and only internal employees of the company can use it. This application will be available at the address http://company.at. Following table shows a list of URL addresses of resources, their formats and HTTP methods that the application will use to access these resources.

| **Resource**                   | **Format** | **GET**           | **DELETE** |
| ------------------------------ | ---------- | ----------------- | ---------- |
| http://company.at/customers    | XML        | XHR               | XHR        |
| http://company.at/suppliers    | JSON       | XHR               | XHR        |
| http://weather.at/innsbruck    | XML        | XHR+CORS          | XHR+CORS   |
| http://people.at/students      | JSON       | XHR+CORS or JSONP | XHR+CORS   |
| http://people.at/{dob}/contact | VCARD      | XHR+CORS          | XHR+CORS   |
