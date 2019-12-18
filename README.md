# seeker

This is an alternative to the browse page on twitch. Twitch only allows "selecting" certain tags to look for, not "filtering"
 out tags or games you don't care about. Not to mention, you cannot hide streams you're not interested in. This is what this 
project is about; providing a browse page that lets you _filter_ streams that you don't care about so you can _actually_ find 
new and interesting streamers.

## Live

You can use the live version here: [https://blog.eternalwings.de/seeker/](https://blog.eternalwings.de/seeker/)

## Building and running

First, you need an API client ID from Twitch, which you can get by creating an application 
[here](https://dev.twitch.tv/console/apps/create). You can then provide it inside the environment 
variable `TWITCH_CLIENT_ID` when starting the application.

Then you can install the required dependencies using `npm ci` and start it using `npm run serve`:
```shell script
$ npm ci
$ TWITCH_CLIENT_ID=<your-key-here> npm run serve
```

Which starts it locally and you can access it via `http://localhost:8080`.

## Deploying to GitHub Pages

You want to have your own version deployed to github pages (to reference in PR for example)? This can be easily done. Make sure
 you have everything commit to master to not lose any changes.

First, create a `gh-pages` branch using `git checkout --orphan gh-pages` and make an initial commit by `git commit --allow
-empty -m "Init"`. Go back to master ( `git checkout master` ) and now we add the `gh-pages` branch into the `dist` folder by
 using git worktree: `git worktree add dist gh-pages`. Make sure that you don't have a `dist` directory so delete it if
 necessary. When we now run `npm run build`, it will create a production build inside the `dist` directory. Lastly, change into
 that directory, commit the changes and push them. Shortly after, you can access it under 
 `<your-github-username>.github.io/seeker`. The full script is this:

```shell script
$ git checkout --orphan gh-pages
$ git commit --allow-empty -m "Init"
$ git checkout master
$ git worktree add dist gh-pages
$ npm run build
$ cd dist
$ git commit
$ git push origin gh-pages
```
