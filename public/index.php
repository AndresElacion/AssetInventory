<?php

// Workaround for Vercel serverless environment
if (isset($_ENV['VERCEL_PROJECT_ID'])) {
    $_ENV['APP_CONFIG_CACHE'] = '/tmp/config.php';
    $_ENV['APP_EVENTS_CACHE'] = '/tmp/events.php';
    $_ENV['APP_PACKAGES_CACHE'] = '/tmp/packages.php';
    $_ENV['APP_ROUTES_CACHE'] = '/tmp/routes.php';
    $_ENV['APP_SERVICES_CACHE'] = '/tmp/services.php';
    $_ENV['VIEW_COMPILED_PATH'] = '/tmp';
}

require __DIR__.'/../vendor/autoload.php';

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
)->send();

$kernel->terminate($request, $response);