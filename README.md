# ORP - Node.js

Author: Jaroslav Kuchar

## Description
This repository provides minimalistic implementation of server for Open Recommendation Platform (ORP) in <a href="http://nodejs.org/">Node.js</a>. 
The official documentation is available on http://orp.plista.com/documentation .

## Install (Debian, Ubuntu)

**Node.js** 

```
NODE_VERSION="v0.10.24"
apt-get update 
apt-get install -y build-essential
wget http://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}.tar.gz 
tar -zxf node-${NODE_VERSION}.tar.gz
cd node-${NODE_VERSION}
./configure && make && sudo make install
```

**Install dependencies, start server** 

```
npm install 
node server.js
```

## Local Development Environment - Vagrant
```
# start a virtual machine and install node.js
vagrant up
# connect to the virtual machine
vagrant ssh
# cd to shared directory
cd /vagrant
# install depndencies
npm install 
# start server
node server.js
```

## Testing
```
npm test
# or 
./test/test.sh
```

## Licence

(The MIT License)	

Copyright (c) 2014 Jaroslav Kuchar

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.