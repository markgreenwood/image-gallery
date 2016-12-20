# Image Gallery

## Description

Image Gallery provides storage of images via title, link to the image, and a description.
It implements backend persistence via a Mongo database.

## Code Structure

The code is split into a frontend app and backend server in the `/app` and `/server` 
subdirectories, respectively. The build and test can be done separately in the two
directories. For deployment, the build info for `/app` should be changed to target the
`/server/public` directory.

## Motivation

This was written as a lab assignment for Code Fellows 401 class.

## Tests

### Unit Testing

The accompanying test suites can be run using the 'npm test' command from the `/app`
and `/server` subdirectories, as appropriate.

### Sample Data for Demonstration

You can populate a sample database by going to the `/server` subdirectory and running `node loadSampleData.js`. 
Make sure you have an instance of Mongo running first. This will drop the existing database, so make sure you're 
pointing to a database you can use just for testing.

## Contributors

[Mark Greenwood](https://github.com/markgreenwood)

## License

The MIT License (MIT)
Copyright (c) 2016 Mark Greenwood

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
