# Batch 3 Assignment 4 (2 - Mechanical Keyboard Shop Backend Server)

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run start:dev or npm run start:prod`.

### Installation Steps

1. **Clone Frontend the repository**:
   Open your terminal and run the following command to clone the repository to your local machine:

   ```bash
   git clone https://github.com/habibeth/assignment5-client

   ```

2. **Clone the Backend repository**:
   Open your terminal and run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/habibeth/assignment5-server
   ```

## Configuration:

- Environment Variables:
  - `NODE_ENV`: Select your project mode.
  - `PORT`: Port number for server listening.
  - `DATABASE_URL`: Provide MongoDB Mongoose Database URL.
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `BYCRYPT_SALT_ROUND`: Provide Bcrypt Salt Round.
  - `JWT_ACCESS_SECRET`: Provide Access Secret text.
  - `JWT_ACCESS_EXPIRES_IN`: Access Token expiry duration.
  - `JWT_REFRESH_SECRET`: Provide refresh Secret text.
  - `JWT_REFRESH_EXPIRES_IN`: Refresh Token expiry duration.
  - `CLOUDINARY_CLOUD_NAME`: Cloudnary Cloud Name.
  - `CLOUDINARY_API_KEY`: Cloudnary API Key.
  - `CLOUDINARY_API_SECRET`: Cloudnary API Secret.

## Usage:

Check src/app/DB/index.ts File and Give Seed admin information!

## Dependencies:

- `@types/cookie-parser`: Dependencies For Cache cookie Received,
- `bcrypt`: For Encrypt Password.,
- `cloudinary`: Online image Upload,
- `cookie-parser`: Parse cookie for browser Cookie,
- `cors`: Express middleware for CORS .,
- `dotenv`: For Environment file ex: .env.,
- `express`: Node JS Web Framework.,
- `http-status`: Status Code for Response,
- `httpstatus`: For Status code for Website.,
- `jsonwebtoken`: For Secure Website. To verify user by token.,
- `lint-staged`: For Correct Coding ,
- `mongoose`: No SQL MongoDB Database ODM Library.,
- `multer`: Cloudnary Image Upload file Middleware,
- `zod`: For Schema Validation.
"# assignment5-server" 
"# assignment5-server" 
