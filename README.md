# Strib card

Browser based application to make share cards.

## Development

1.  Install Node
1.  Install dependencies: `npm install`
1.  Build-related commands:
    * To run the build, a web browser, and to watch for changes, run: `npm run develop`
      * By default the webpage will be at: [localhost:3000](http://localhost:3000)
    * Or to just run the build once: `npm run build`

## Deploy

To S3:

```
aws s3 sync ./build s3://static.startribune.com/news/tools/strib-card
```

## Credits

Lots of inspiration and some code taken from the [Seattle Times pullquote](https://github.com/seattletimes/pullquote).
