## API Basejump: Timestamp microservice

### [DEMO](https://timestamp-yuchiu.herokuapp.com/)

**************************************************

### User stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

***********************************************

#### Example usage:
https://timestamp-yuchiu.herokuapp.com/timestamp/december%2020,%202017
https://timestamp-yuchiu.herokuapp.com/1513728000

#### Example output:
{ "unix": 1513728000, "natural": "December 20, 2017" }

*****************************************************

### Local Usage 
#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost

```
npm start

```
Server will be running on http://localhost:3000