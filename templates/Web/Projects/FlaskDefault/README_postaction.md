﻿## Getting Started

1. Install node modules `yarn install` or `npm install`.
//{[{
2. Install Python dependencies `yarn install-requirements` or `npm install-requirements`
//}]}
2. Start development server `yarn start` or `npm start`.

## File Structure
//^^
//{[{
The back-end is based on [Flask](https://github.com/pallets/flask). It is served on http://localhost:3001/.
//}]}

```
.
//{[{
├── server/ - Flask server that provides API routes and serves front-end
│ ├── constants.py - Defines the constants for the endpoints and port
│ └── server.py - Configures Port and HTTP Server and provides API routes
//}]}
└── README.md
```

## Additional Documentation

- Bootstrap CSS - https://getbootstrap.com/
//{[{
- Flask - http://flask.pocoo.org/
//}]}
