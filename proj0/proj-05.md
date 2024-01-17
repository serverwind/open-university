Diagram:

browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/spa

{ server activated }

server -> browser: HTML Document (200)

{ server deactivated }


browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css  

{ server activated }

server -> browser: CSS file (200)

{ server deactivated }


browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

{ server activated }

server -> browser: JS file (200)

{ server deactivated }


browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json

{ server activated }

server -> browser: JSON file (200)

{ server deactivated }


browser -> server: GET https://studies.cs.helsinki.fi/favicon.ico

{ server activated }

server -> browser: Favicon file (404)

{ server deactivated }
