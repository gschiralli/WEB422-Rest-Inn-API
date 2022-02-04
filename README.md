# WEB422-Rest-Inn-API

## Summary 

A RESTful API that allows adminstator to create, read, edit and delete properties. Also allows to create and read customers.

## Production Link : https://intense-spire-46577.herokuapp.com/

## End Points

### POST /customers

The above end point creates a customer. You must submit the customer data in the body of the request (as JSON), The data includes  :

firstName (required),
lastName (required),
email (required),
password (required),
phoneNumbers(optional)

### GET /customers/id

The above end point returns a customer based on the id provided.

### POST /properties

The above end point creates a property. You must submit the property data in the body of the request (as JSON), The data includes  :

title (required),
rentalPrice (required),
description (optional),
type (required),
houseRules(optional),
amenities(required),
location(required),
bestSeller(required),
photoURL(optional)


### GET /properties

The above end point retrieves all the properties in the databse.
The above end point also allows you to filter properties by passing any of the below query string parameters :

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| type      | Property Type(Bungalow, Condo, etc..)          |
| location  | Location of the property                       |



#### GET /properties/types

The above end point returns all the property types.

#### GET /properties/best-sellers

The above end point returns all the properties that are best sellers.

#### GET /properties/id

The above end point returns a property based on the id provided.


### PUT /properties/id

The above end point updates a property based on the id provided. The client application is required to submit the property data in the body of the request (as JSON). Fields that are able to be updated include::

title (required),
rentalPrice (required),
description (optional),
type (required),
houseRules(optional),
amenities(required),
location(required),
bestSeller(required),
photoURL(optional)


### DELETE /properties/id

The above end point deletes a property based on the id provided.


### Rules to Set up Back-End (Locally)

1. Clone source code by running: **git clone GITHUP_PROJECT_URL .** Add clone project to a blank workspace area in your code editor.
2. After Cloning, re-install ALL third party dependencies by running **npm install**.
3. Create a folder within the project called **config**.  This config folder must be on the root.
4. Within the **config** folder, create a file called **keys.env**
5. Within the **keys.env** file, create the below environment variables :
      - **MONGODB_CONNECTION_STRING** - Assign your MongoDB Database Connection String for your Test cases. Ensure that this value points to a different database because the data for this will b wiped after your test cases run.
6. Run application (locally) by running : **npm run dev**
