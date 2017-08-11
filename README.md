[![Build Status](https://travis-ci.org/GoingOK/goingok-client.svg?branch=master)](https://travis-ci.org/GoingOK/goingok-client) [![Known Vulnerabilities](https://snyk.io/test/github/goingok/goingok-client/badge.svg)](https://snyk.io/test/github/goingok/goingok-client)[![https://img.shields.io/badge/license-Apache%202.0-blue.svg](https://img.shields.io/badge/license-Apache%202.0-lightgrey.svg)](http://www.apache.org/licenses/LICENSE-2.0)

# goingok-client

This is the client side code for a full stack providing [GoingOK](http://goingok.org), a web application for personal reflective writing. The application was developed by [Andrew Gibson](http://andrewresearch.net) as part of his Doctoral research on Reflective Writing Analytics. It is now an open source project.

This repo is a javascript client based on Angular and ngrx that calls the REST API provided by [goingok-server](https://github.com/GoingOK/goingok-server).

### Quick Start

The client can be run without the server backend, but (currently) lacks the core functionality of the profile page. It is written using [angular-cli](https://cli.angular.io), so to get it started, follow these steps...

1. Ensure that you have ```node```, ```npm``` installed

2. Build the ```node_modules``` directory by running ```npm install``` in the root directory

3. Now run the application locally using the angular-cli: ```ng serve```

4. You should be able to connect by browsing to ```http://localhost:4200```


### Documentation

For more detailed documentation on both client and server components, see the current [docs](http://goingok.org/docs/).

### Submitting bugs and suggestions

Please use [GitHub issues](../../issues) to notify us of a bug or to request a new feature. Before adding a new request, *please* search the existing issues to see if there is one the same or similar to yours. If so, add a [reaction](//github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) (like :+1: or :-1:) to the issue and post any additional relevant comments that will be helpful.

### Contributing

Contributions to the code are welcome. Please read [CONTRIBUTING](CONTRIBUTING.md) for more information.

### License

 > &copy; Andrew Gibson 2012-2017
 >
   > Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
   >
   > [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
   >
   > Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.