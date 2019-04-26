# rpg-book-website

## Create base image
```
docker build . -t react
```

cd  <app-name>

docker run -v $(pwd):/app -it react yarn add @material-ui/core
docker run -v $(pwd):/app -it react yarn add @material-ui/icons 
docker run -v $(pwd):/app -it -p3000:3000 react yarn start
```

http://localhost:3000/

###Document
https://material-ui.com/getting-started/usage/