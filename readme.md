# BES App

## Team
`GET: /team`  
Return a json object with information about the team

`GET: /members`  
Return a json object with information about the members

`GET: /member`  
Return a json object with detailed information about a specific member

`GET: /d4hData` (Under Construction)  
Update the database with complete team and detailed member information from the D4H API.

## Page

### Directions to Call
- receive a BRETSA text message
- parse the message
- create a link from current location to call location
  - optionally allow for directions via station
- send link to map to list of recipients (or send map directly)

### Responder location(s)
- Responder clicks on a button to post location and response status to server
- server captures location and updates map with marker
  - optionally ping phone for updated location periodically

### Call Locations
- receive ALL BRETSA text messages
- create a marker at each incident on map
- allow user to set duration of markers (how long before marker is removed)
- different call types have different marker icons

### Page 
`POST: /page`  
Creates a new page entry from the text message page in the database and uses that information to begin a D4H incident entry

`GET: /directions`  (route via station)  
`GET: /directions?route=direct` (direct route)  
Redirects user to a Google map with directions from your location to the scene location described in the page.  

`GET: /location`  
Redirects user to a Google map with the location of the incident described in the text page.

`GET: /page`  
Return a json object containing the call information from the page.

`POST: /responder` (TBD)  
Adds a member to the list of those responding and estimates arrival time.  
Cordova app?


## Demo Instructions
$ cd gmaps
$ nodemon server.js # start the development http server
$ ngrok http 8080 # create tunnel to dev server (not needed for production) Is this needed at all?

In Browser, go to localhost:8080.
On page, click Send Page (or text page to 970-699-3100 - Twilio account)
(clicking on Send Page to D4H will create a D4H entry which will need to be removed)
Click on Route (via station), Direct or Map

### AWS
Install node/npm
http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html  

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6.9.2

npm install -g nodemon forever 

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/#run-mongodb-community-edition


set DNS A record @ to IP Address

How to get it to run on port 80

Didn't work...
https://gist.github.com/kentbrew/776580
sudo iptables -t nat -L
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
sudo iptables -t nat -L

### For Production
Add query parameter to twilio post instruction in order to being D4H entry as well.


### Under Construction
Embed a google map with directions from station on main static page
