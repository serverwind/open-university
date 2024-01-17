Diagram:

1. browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
{ server activated }
server -> browser: HTML Document (200)
{ server deactivated }

2. browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css  
{ server activated }
server -> browser: CSS file (200)
{ server deactivated }

3. browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
{ server activated }
server -> browser: JS file (200)
{ server deactivated }

4. browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
{ server activated }
server -> browser: JSON file (200)
{ server deactivated }

5. browser -> server: GET https://studies.cs.helsinki.fi/favicon.ico
{ server activated }
server -> browser: Favicon file (404)
{ server deactivated }
