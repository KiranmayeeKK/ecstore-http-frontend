# ECStore Application
## An ecommerece application  with React frontend, the backend code is available at `https://github.com/KiranmayeeKK/ecstore-http-backend.git`

Run the ecstore backend application before running this.

## Configuration
1. Create .env file in the ecs_client 
2. In ecs_client/.env file, initialize REACT_APP_SERVER_URL variable to backend server `checkCredential` page
ex: REACT_APP_SERVER_URL=http://.../checkCredential

## Runninng the applications
use `npm install` and `npm start` commands to run the applications

## Checking the functionality
1. Open `http://ecstore.com:3000` (to use a domain name, add it to the hosts file of the system 127.0.0.1	ecstore.com
::1	ecstore.com) or `http:\\localhost:3000` in the web / mobile browser
2. Select the items and add them to cart
3. Click on cart to view the items added to cart
4. If any of the added items are adult products, it asks for credential
5. Upload `credential.json` file (received from the bank) and click upload button
6. On Upload, the request is sent to backend server where it checks its validity with the Ecommerce SSI bridge 
7. On successful verification, the `proceed to checkout` button is enabled which when clicked redirects to payment page
8. If credential verification is unsuccessful, corresponding error message is displayed to the front end like `Invalid credential, please upload a valid credential`

