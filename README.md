# GYKA Single Page Web Application

This is an example application using Vue and the Wordpress Rest API

### Frontend:
* Javascript
    * Vue
        * vue-router
        * vue-resource (Outdated/unsupported HTTP requets library, should have used Axios)
        * vue-loading-overlay
* CSS3: (Need to setup SASS)
    * Skeleton

### Backend:
* Wordpress REST API Install
    * JWT Authentication for WP-API
    * Custom Post Type UI
    * WP-REST-API V2 Menus
    * Advanced Custom Fields
    * ACF to REST API

### Dev environment setup
1. Install Docker on your machine
    * https://www.docker.com
2. In root repo folder, run the following
```
docker-compose up -d
```
3. Get the container id to mysql
```
docker ps
```
4. Replace CONTAINER with container id, replace filename, and run the following to restore database data
```
cat backup2019_02_22.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root wordpress
```
5. In the /frontend-vue folder, run the following
```
npm install
```
6. In the /frontend-vue folder, start the Vue server
```
npm run dev
```

#### Database Backup
```
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
```

#### Database Restore
```
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
```

### Development notes from my first install
1. Turn on wp rest api
    1. Settings -> Permalinks -> Set to Post name
2. Install JWT Authentication for WP-API plugin and activate
3. Add to .htaccess file:
```
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```
4. Add to wp-config.php file:
```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
```
5. Login to WP through API to get auth token:
    * Endpoint: /wp-json/jwt-auth/v1/token
    * JSON: { “username”: “admin” , “password”: “admin” }
6. Install Custom Post Type UI
    * Used to create custom posts
7. Create custom post type - heros
```
/wp-json/wp/v2/heros
/wp-json/wp/v2/heros?per_page=1
/wp-json/wp/v2/heros/9
```
8. Install Advanced Custom Fields to add custom fields to post types
9. Install ACF to Rest API so we can use custom fields in REST API
12. Install WP-REST-API V2 Menus
```
/wp-json/menus/v1/menus — all menus
/wp-json/menus/v1/menus/<slug> — specific menu
```