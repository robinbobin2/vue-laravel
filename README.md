## With docker
* `cd backend`
* `mv .env.example .env`
* ```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```
* `cd ../`
* `docker-compose up -d`
* `./backend/vendor/bin/sail artisan migrate:refresh --seed`
* `./backend/vendor/bin/sail test`
* Access apps: 
    * Frontend: `http://localhost:8080`
    * Backend: `http://localhost:8000`

## Without docker

### Backend
* `cd backend`
* Configure the `.env` file
* `composer update`
* `php artisan migrate:refresh --seed`
* `php artisan test` 
* `php artisan serve`
### Frontend
* `cd frontend`
* `npm install`
* `npm test`
* `npm run serve`

### API
The API variable is stored `frontend/src/main.js` and points to http://localhost:8000 by default