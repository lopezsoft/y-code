<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <base href="/">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Last-Modified" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
    <meta charset="utf-8">
    <title>ASAIE - EXODO</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="LOPEZSOFT S.A.S">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <style type="text/css">@font-face{font-family:'Montserrat';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Montserrat';font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgjNW0WA93qphgZW-joXVR6VC3IiYFjfo"></script>

    <!-- Vuexy loading Screen CSS -->
    <style type="text/css">
        #loading-bg {
            width: 100%;
            height: 100%;
            background: #fff;
            display: block;
            position: absolute;
            z-index: 99999;
            pointer-events: none;
        }

        .loading-logo {
            position: absolute;
            left: calc(50% - 45px);
            top: 40%;
        }

        .loading {
            position: absolute;
            left: calc(50% - 35px);
            top: 50%;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: 3px solid transparent;
        }

        .loading .effect-1,
        .loading .effect-2 {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-left: 3px solid rgba(121, 97, 249, 1);
            border-radius: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        .loading .effect-1 {
            animation: rotate 1s ease infinite;
        }

        .loading .effect-2 {
            animation: rotateOpacity 1s ease infinite 0.1s;
        }

        .loading .effect-3 {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-left: 3px solid rgba(121, 97, 249, 1);
            -webkit-animation: rotateOpacity 1s ease infinite 0.2s;
            animation: rotateOpacity 1s ease infinite 0.2s;
            border-radius: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        .loading .effects {
            transition: all 0.3s ease;
        }

        @keyframes rotate {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(1turn);
                transform: rotate(1turn);
            }
        }

        @keyframes rotateOpacity {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                opacity: 0.1;
            }

            100% {
                -webkit-transform: rotate(1turn);
                transform: rotate(1turn);
                opacity: 1;
            }
        }
    </style>
    <!-- / Vuexy loading Screen CSS -->
    <style>@charset "UTF-8";:root{--blue:#56abe0;--indigo:#6610f2;--purple:#7367f0;--pink:#e83e8c;--red:#ea5455;--orange:#ee811b;--yellow:#ffc107;--green:#159950;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#b8c2cc;--gray-dark:#1e1e1e;--primary:#2556a3;--secondary:#82868b;--success:#159950;--info:#56abe0;--warning:#ee811b;--danger:#ea5455;--light:#f6f6f6;--dark:#4b4b4b;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:"Montserrat", Helvetica, Arial, serif;--font-family-monospace:"Montserrat", Helvetica, Arial, serif}*,*:before,*:after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(34,41,47,0)}body{margin:0;font-family:Montserrat,Helvetica,Arial,serif;font-size:1rem;font-weight:400;line-height:1.45;color:#6e6b7b;text-align:left;background-color:#f8f8f8}img{vertical-align:middle;border-style:none}@-webkit-keyframes progress-bar-stripes{0%{background-position:.857rem 0}to{background-position:0 0}}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@media print{*,*:before,*:after{text-shadow:none!important;box-shadow:none!important}img{page-break-inside:avoid}@page{size:a3}body{min-width:992px!important}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}@-webkit-keyframes slideIn{0%{transform:translateY(1rem);opacity:0}to{transform:translateY(0);opacity:1}0%{transform:translateY(1rem);opacity:0}}html{font-size:14px;height:100%;letter-spacing:.01rem}html body{height:100%;background-color:#f8f8f8;direction:ltr}@media screen and (min-width: 0px){head{font-family:"xs 0px"}body:after{content:"xs - min-width: 0px"}}@media screen and (min-width: 544px){head{font-family:"sm 544px"}body:after{content:"sm - min-width: 544px"}}@media screen and (min-width: 768px){head{font-family:"md 768px"}body:after{content:"md - min-width: 768px"}}@media screen and (min-width: 992px){head{font-family:"lg 992px"}body:after{content:"lg - min-width: 992px"}}@media screen and (min-width: 1200px){head{font-family:"xl 1200px"}body:after{content:"xl - min-width: 1200px"}}head{clear:both}head title{font-family:"xs 0px, sm 544px, md 768px, lg 992px, xl 1200px"}body:after{display:none}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes modal-fade{0%{top:-50px;opacity:0}to{top:0;opacity:1}}@-webkit-keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}</style><link rel="stylesheet" href="styles.9141220a2826e6c7.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.9141220a2826e6c7.css"></noscript>
</head>
<body>
<!-- Vuexy loading Screen -->
<core-loading-screen id="loading-bg">
    <div class="loading-logo">
        <img src="assets/images/logo/logo.png" alt="Logo">
    </div>
    <div class="loading">
        <div class="effect-1 effects"></div>
        <div class="effect-2 effects"></div>
        <div class="effect-3 effects"></div>
    </div>
</core-loading-screen>
<!-- / Vuexy loading Screen -->

<!-- Vuexy root component -->
<app-root> </app-root>
<!-- / Vuexy root component -->
<script src="runtime.2348ee09c680fd6f.js" type="module"></script><script src="polyfills.7d562ff1594ab6e9.js" type="module"></script><script src="scripts.2a5a61e2e38ab1ad.js" defer></script><script src="main.81279908b3bc20da.js" type="module"></script>

</body>
</html>
