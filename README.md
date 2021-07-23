# Mantium NodeJS SDK

This is a NodeJS SDK for the [Mantium API](https://developer.mantiumai.com/reference).

## Installation

```
npm install @dabblelab/mantium
```

## Usage

1. Require the SDK:
```javascript
const mantium = require('@dabblelab/mantium');
```
2. Create a new client:
```javascript
const client = new mantium(process.env['MANTIUM_USERNAME'], process.env['MANTIUM_PASSWORD']);
```
> Note: The example above assumes the environment variables `MANTIUM_USERNAME` and `MANTIUM_PASSWORD` are set.
3. Set the client's authorization token:
```javascript
client.token = await client.getToken();
```
4. Use the client:
```javascript
const promptId = "b44bc7de-ab0d-441e-9b8a-f0ddc98e1dfe"; // from mantium dashboard
const text = `In today’s world, technology changes fast, and unless you’re mindful, 
it’s easy to fall behind. For much of the 20th century, hyper specialization was key.
Today however, you need to dabble in a lot of areas to keep up.`;

client.tryPrompt(promptId, text)
    .then(response => console.log(response));
    .catch(error => console.log(error));
```

