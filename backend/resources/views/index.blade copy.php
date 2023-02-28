<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <title>Y-Code Accounting</title>
  <base href="/">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
  <script defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k&amp;libraries=places"></script>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
 <!-- Latest compiled and minified CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  <link href="assets/fonts/feather/style.min.css" rel="stylesheet">
  <link href="assets/fonts/simple-line-icons/style.css" rel="stylesheet">
  <link href="assets/fonts/weathericons/css/weather-icons.css" rel="stylesheet">
  <link href="assets/fonts/weathericons/css/weather-icons-wind.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900|Montserrat:300,400,500,600,700,800,900" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="assets/vendor/pace/themes/black/pace-theme-flash.css"/>
  <style type="text/css">
    .pace .pace-activity {
      top: 19px;
      right: 19px;
      display: none;
    }

    .page-loading {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      background: rgba(51, 51, 51, 1.00);
      opacity: 0;
      transition: opacity 1s ease-in-out;
      z-index: -1;
    }

    .loading-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 38px;
      height: 38px;
      margin-left: -19px;
      margin-top: -19px;
    }

    app-root:empty~.page-loading {
      opacity: 1;
      z-index: 1;
    }

  </style>
<link rel="stylesheet" href="styles.css"></head>

<body class="layout-dark">
  <app-root></app-root>
  <div class="page-loading">
    <img src="assets/img/oval.svg" class="loading-icon"/>
  </div>
<script src="runtime.js" defer></script><script src="polyfills-es5.js" nomodule defer></script><script src="polyfills.js" defer></script><script src="scripts.js" defer></script><script src="vendor.js" defer></script><script src="main.js" defer></script></body>

</html>
