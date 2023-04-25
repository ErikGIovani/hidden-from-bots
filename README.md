<div align="center">
   <img width="15%" src="https://hiddenfrombots.vercel.app/assets/images/bot.png" alt="#">
   <h1>Hidden From Bots</h1
      
**Say goodbye to bots looking for emails and phone numbers**
      
   <p>Normally on the internet there are bots, crawlers or spiders, they are all the same with a different name and are dedicated to searching the internet for data such as emails, phone numbers and other data, although not all of them are bad like of google that is in charge to analyze your site to be able to index it in their search engine, there are others that are, although you can create a robots.txt file and add a configuration to avoid bots, some people can create bots to ignore if there is a robots file .txt and they can scan still your site and collect your email or phone number to be able to send spam, make phone scams or sell that data to companies so they can send you unwanted advertising.</p>

   <p>Luckily with Hidden From Bots you can avoid most of these annoying bots by hiding these elements from the dom.</p>
</div>


<div align="center">
   <h2>Installation</h2>
   
   **NPM**
   
   ```console
   npm i hidden-from-bots
   ```
   **Yarn**
   
   ```console
   yarn add hidden-from-bots
   ```
   **CDN**
   
   ``` js
   https://cdn.jsdelivr.net/npm/hidden-from-bots/+esm
   ```
</div>


<div align="center">
   <h2>Usage</h2>
   
To use **Hidden From Bots** without **Node JS** you need to create a js file and add it to the end of the body tag in your html document and set it to be of type module so it can work.
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hidden From Bots</title>
</head>
<body>
    <script type="module" src="./script.js"></script>
</body>
</html>
```

<div align="center">
   
In your js file you need to import from the CDN **emailHiddenF** if you want to hide an email or **phoneHiddenF** if you want to hide a phone number, in this case I am going to hide an email.
</div>

```js
import { emailHidden } from 'https://cdn.jsdelivr.net/npm/hidden-from-bots/+esm';
```

<div align="center">
   
And then you have to call the function and add the email in quotes inside it.
</div>

```js
import { emailHidden } from 'https://cdn.jsdelivr.net/npm/hidden-from-bots/+esm';

emailHidden('hello@world.com')
```

<div align="center">
   
To finish you need to add a **p** tag with the **data-hidden-from-bots** attribute with the value **email** if it is going to be an email you want to hide and **phone** if it is going to be a phone number.
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hidden From Bots</title>
</head>
<body>
    <p data-hidden-from-bots="email">Email</p>

    <script type="module" src="./script.js"></script>
</body>
</html>
```
<div align="center">
   
Excellent, if you like you can also have an email and phone number at the same time always remembering to use the correct attribute value for each one.
</div>

<div align="center">
   <h2>Advanced Usage</h2>
   
If you want to have several different emails you have to import the **multiEmailHiddenF** function and if you want to have several different phone numbers you have to import the **multiPhoneHiddenF** function.
</div>

```js
import { multiEmailHiddenF } from 'https://cdn.jsdelivr.net/npm/hidden-from-bots/+esm';

multiEmailHiddenF('email1','hello@world.com');
multiEmailHiddenF('email2','hi@world.com');
multiEmailHiddenF('email3','aloha@world.com');
```

<div align="center">
   
And in the value of the **data-hidden-from-bots** attribute put the first parameter of the function.
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hidden From Bots</title>
</head>
<body>
   <p data-hidden-from-bots="email1">Email</p>
   <p data-hidden-from-bots="email2">Email</p>
   <p data-hidden-from-bots="email3">Email</p>

    <script type="module" src="./script.js"></script>
</body>
</html>
```
