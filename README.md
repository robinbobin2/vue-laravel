## Test assignment
### Backend
* `cd backend`
* `composer install`
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