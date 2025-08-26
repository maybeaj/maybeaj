"use strict";

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const { v4: uuidv4 } = require("uuid");

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const USERS_TABLE = process.env.USERS_TABLE;

exports.getUser = async (event) => {
	const id = event.pathParameters.id;
  const result = await ddb.send(new GetCommand({
    TableName: USERS_TABLE,
    Key: { id}
  }));

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          message: `User not found: ${id}`,
        },
        null,
        2
      ),
    };
  }
	// const queryParams = event.queryStringParameters;
	// const userType = queryParams.userType;
	return {
		statusCode: 200,
		body: JSON.stringify(
			result.Item,
		),
	};
};

exports.createUser = async (event) => {
  try {
    // 디버깅용: 실제 들어온 이벤트 확인
    // console.log(JSON.stringify(event, null, 2));

    const body = event?.body ? JSON.parse(event.body) : null;
    if (!body || !body.name || !body.email) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "name and email are required" }),
      };
    }

    const id = uuidv4();
    const user = { id, name: body.name, email: body.email };

    await ddb.send(new PutCommand({ TableName: USERS_TABLE, Item: user }));

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "User created successfully", user }),
    };
  } catch (err) {
    console.error("createUser error:", err);
    return { statusCode: 500, body: JSON.stringify({ message: "Internal Server Error" }) };
  }
};


exports.updateUser = async (event) => {
	const id = event.pathParameters.id;
	const body = JSON.parse(event.body || "{}");

  const result = await ddb.send( new UpdateCommand({
    TableName: USERS_TABLE,
    Key: { id },
    UpdateExpression: "set #name = :name, #email = :email",
    ExpressionAttributeNames: {
      "#name": "name",
      "#email": "email"
    },
    ExpressionAttributeValues: {
      ":name": body.name,
      ":email": body.email
    },
    ReturnValues: "ALL_NEW",
  }));

	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: `User ${id} updated`,
        user: result.Attributes,
			}),
	};
};

exports.deleteUser = async (event) => {
	const id = event.pathParameters.id;
  await ddb.send(new DeleteCommand({
    TableName: USERS_TABLE,
    Key: { id }
  }));
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: `User ${id} deleted`,
			}
		),
	};
};
