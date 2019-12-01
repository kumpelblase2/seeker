# seeker

This is an alternative to the browse page on twitch. Twitch only allows "selecting" certain tags to look for, not "filtering"
 out tags or games you don't care about. Not to mention, you cannot hide streams you're not interested in. This is what this 
project is about; providing a browse page that lets you _filter_ streams that you don't care about so you can _actually_ find 
new and interesting streamers.


## Building and running

First, you need an API client ID from Twitch, which you can get by creating an application 
[here](https://dev.twitch.tv/console/apps/create). You can then paste inside `src/api/api-key.js`.

Then you can install the required dependencies using `npm`:
```shell script
$ npm install
```

And start it by running:
```shell script
$ npm run serve
```

Which starts it locally and you can access it via `http://localhost:8080`.
