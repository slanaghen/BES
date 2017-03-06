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

## AWS
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
