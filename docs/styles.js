(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".environment{\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    background: #72e72e;\n    text-align: center;\n    margin: 0px auto;\n    position: absolute;\n    width: 100%;\n  }\n\n/* You can add global styles to this file, and also import other style files */\n\n/*\n----AZUL----\n#8fd6ff - azul base muito claro\n#81C1E5 - azul pouco claro\n#6BA0BF - azul medio\n#476B7F - azul escuro\n#243540 - azul muito escuro\n#337ab7 - azul theme\n----AZUL----\n\n----CINZA----\n#808080 - cinza escuro\n#d0d0d0 - cinza claro\n#6b6b6b - cinza link\n----CINZA----\n\n----VERDE----\n#27A822 - verde claro\n#267723 - verde escuro\n----VERDE----\n*/\n\n/* Main page with stikky-footer\n-------------------------------------------------- */\n\n*{\n    transition: all 0.5s linear;\n}\n\nhtml, body {\n    height: 100%;\n    background-color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n    /* The html and body elements cannot have any padding or margin. */\n    border-top: 3px solid #8fd6ff;\n    /*border-top: 3px solid #27A822;*/\n    padding: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: block;\n}\n\n.none{\n    display: none !important;\n}\n\n/* Wrapper for page content to push down footer */\n\n#wrap {\n    padding-bottom: 50px;\n    min-height: 100%;\n    height: auto;\n    /* Negative indent footer by its height */\n    margin: 0 auto -65px;\n    /* Pad bottom by footer height */\n    /*padding: 0 0 60px;*/\n}\n\nhr{\n    border:  0.01em solid #d0d0d0;\n}\n\n.panel{\n    box-shadow: none !important;\n        -webkit-box-shadow: none !important;\n        -moz-box-shadow: none !important;\n        -ms-box-shadow: none !important;\n        -o-box-shadow: none !important;\n}\n\n/* Navbar\n  -------------------------------------------------- */\n\n.navbar .navbar-header .navbar-brand img{\n    height: 50px;\n    width: 50px;\n    margin: -10px auto 0px auto;\n  }\n\n.navbar-static-top {\n    margin-bottom: 10px;\n  }\n\n.navbar .navbar-header{\n      margin: 10px auto 10px auto;\n      border: 0px solid #243540;\n      width: 30px;\n      height: 30px;\n  }\n\n.navbar .navbar-header .navbar-brand{\n    padding: 0px 15px 0px 15px;\n  }\n\n.navbar .navbar-header .navbar-brand i{\n    margin: -5px auto 0px auto !important;\n    width: 30px;\n    height: 35px;\n    padding: 0px;\n  }\n\n.navbar-default {\n    background-color: #ffffff !important;\n    border-color: #ffffff !important;\n  }\n\n/*NAVBAR OCULTO\n  .navbar-default .container{\n      display: block;\n  }*/\n\n/*NAVBAR OCULTO\n  .navbar-default .navbar-brand {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-text {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-nav > li > a {\n    color: #6b6b6b;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #6b6b6b;\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    color: #6b6b6b;\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle {\n    border-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle .icon-bar {\n    background-color: #6b6b6b;\n  }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #6b6b6b;\n  }\n  .navbar-default .navbar-link {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-link:hover {\n    color: #6b6b6b;\n  }\n  \n  span.fa{\n    display: none;\n  }*/\n\nspan.fa{\n    z-index: 1;\n    cursor: pointer;\n    display: inline;\n    margin-top: 5px;\n    margin-left: 20px;\n    padding: 3px;\n    right: 5px;\n    position: fixed;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 5px;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        -ms-border-radius: 5px;\n        -o-border-radius: 5px;\n  }\n\nspan.fa:before{}\n\n/*#wrap{\n    position: relative;\n  }*/\n\nnav.navbar .container{\n    position: absolute;\n    background: white;\n    padding: 20px 10px 10px 0px;\n    height: 100%;\n  }\n\n.backNav{\n    position: fixed;\n    background: rgba(10,23,55,0.5);\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    z-index: 2;\n    display: none;\n  }\n\n.navbar.navbar-default{\n    position: fixed;\n    z-index: 3;\n    height: 100%;\n    width: 140px;\n    top: 0px;\n    right: -140px;\n    border-radius: 0px !important;\n  }\n\n.navbar.navbar-default .container .navbar-header,\n  .navbar.navbar-default .container .navbar-header a{\n    width: 100%;\n    text-align: center;\n  }\n\n.navbar.navbar-default #navbar ul.nav{\n    width: 100%;\n  }\n\n.navbar.navbar-default #navbar ul.nav li{\n    width: 100%;\n  }\n\n.navbar.navbar-default #navbar ul.nav li a{\n    text-align: left;\n  }\n\n@media (max-width: 767px) {\n    /*\n      span.fa{\n        cursor: pointer;\n        display: inline;\n        margin-top: 5px;\n        margin-left: 20px;\n        padding: 3px;\n        right: 15px;\n        position: absolute;\n        background-color: white;\n        border: 1px solid black;\n        border-radius: 5px;\n            -webkit-border-radius: 5px;\n            -moz-border-radius: 5px;\n            -ms-border-radius: 5px;\n            -o-border-radius: 5px;\n      }\n    \n      span.fa:before{}\n    \n      #wrap{\n        position: relative;\n      }\n    \n      nav.navbar .container{\n        position: absolute;\n        background: white;\n        padding: 20px 20px 10px 30px;\n        height: 100%;\n      }\n    \n      .backNav{\n        position: fixed;\n        background: rgba(10,23,55,0.5);\n        height: 100%;\n        width: 100%;\n        top: 0px;\n        z-index: 1;\n        display: none;\n      }\n    \n      .navbar.navbar-default{\n        position: fixed;\n        z-index: 3;\n        height: 100%;\n        width: 140px;\n        top: 0px;\n        right: -140px;\n      }\n    \n      .navbar.navbar-default .container .navbar-header,\n      .navbar.navbar-default .container .navbar-header a{\n        text-align: right;\n        margin: 0px 0px 0px auto;\n      }\n    \n      .navbar.navbar-default #navbar ul.nav li a{\n        text-align: right;\n      }\n    \n      .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #6b6b6b;\n      }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #6b6b6b;\n      }\n      .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n        color: #6b6b6b;\n        background-color: #ffffff;\n      }*/\n    \n    }\n\n/* @media (max-width: 767px) */\n\n/* Custom page CSS\n  -------------------------------------------------- */\n\n.container {\n    width: auto;\n    max-width: 960px;\n    text-align: center;\n  }\n\n.container .text-muted {\n    margin: 20px 0;\n  }\n\n.container a {\n    color: #6BA0BF;\n    cursor: pointer;\n  }\n\n.container a:hover,\n  .container a:focus,\n  .container a:active{\n    /*color: #267723;*/\n    color: #476B7F;\n    text-decoration: none;\n  }\n\n.img-responsive {\n   display: block;\n   height: auto;\n   max-width: 100%;\n  }\n\n.panel-default h4 {\n    text-align: left;\n    line-height: 24px;\n    font-size: 22px;\n  }\n\n.panel-default h5 {\n    text-align: left;\n    line-height: 30px;\n    font-size: 18px;\n  }\n\n.panel-default h6 {\n    font-size: 15px;\n  }\n\n.panel-default h4 a, h5 a {\n    color: #27A822;\n  }\n\n.panel-default h4 a:hover, h5 a:hover {\n    color: #267723;\n  }\n\n.panel{\n    border-style: none;\n  }\n\n.panel-body {\n    padding-top: -10px;\n    text-align: left;\n  }\n\n.blog-post{\n    padding-top: 30px;\n  }\n\n.blog-title{\n    padding-top: 2px;\n  }\n\n.related-posts h4 {\n    text-align: center;\n  }\n\n.page-not-found {\n    padding-top: 20%;\n  }\n\n.disqus {\n    padding-bottom: 15px;\n  }\n\n.blogpost{\n    text-align: left;\n    line-height: 30px;\n    font-size: 18px;\n  }\n\n/*MENU TAB OPTION*/\n\nsection ul#tabMenuOption{\n        text-align: center;\n        margin: 15px auto;\n        padding: 0px 0px 10px 0px;\n        list-style-position: inside;\n        /*border-bottom: 1px solid #d0d0d0;*/\n      }\n\nsection ul#tabMenuOption li{\n        display: inline-block;\n        margin: 5px 2px;\n        border: 1px solid #6b6b6b;\n        padding: 0.25em 0.50em;\n        border-radius: 20px;\n          -webkit-border-radius: 20px;\n          -moz-border-radius: 20px;\n          -ms-border-radius: 20px;\n          -o-border-radius: 20px;\n      }\n\n/*   section ul#tabMenuOption li a#ongame{}\n       section ul#tabMenuOption li a#viewit{}\n       section ul#tabMenuOption li a#ongame img{}\n       section ul#tabMenuOption li a#viewit img{}\n      */\n\nsection ul#tabMenuOption li a,\n      section ul#tabMenuOption li a:hover{\n        line-height: normal;\n        text-decoration: none;\n      }\n\nsection ul#tabMenuOption li a{\n        color: #233540;\n      }\n\nsection ul#tabMenuOption li.active{\n        background: #6b6b6b;\n        /*background: #8fd6ff;*/\n      }\n\nsection ul#tabMenuOption li.active a{\n        color: white;\n      }\n\nsection #boxContent .showHide{\n        display: block !important;\n      }\n\nsection #boxContent ul.contentMenuOption{\n        display: none;\n      }\n\n/*section #boxContent section{\n        display: none;\n        text-align: center;\n        padding: 0px;\n        border: 1px solid #d0d0d0\n      }*/\n\nsection #boxContent ul{\n        margin: 0px auto;\n        padding: 0px;\n      }\n\nsection #boxContent ul li{\n        margin: 0px 10px;\n        display: inline-block;\n        vertical-align: middle;\n      }\n\n/*MENU TAB OPTION*/\n\n/*Configuração imagens e legendas*/\n\nsection #boxContent figure{\n        background: white;\n        border: 0px solid #8fd6ff;\n        text-align: center;\n        margin: 10px auto;\n        padding: 10px;\n      /*Medidas Responsivo\n        min-width: 240px;*/\n        max-width: 320px;\n        width: 100%;\n        height: auto;\n      }\n\nsection #boxContent figure{\n        border-radius: 20px;\n          -webkit-border-radius: 20px;\n          -moz-border-radius: 20px;\n          -ms-border-radius: 20px;\n          -o-border-radius: 20px;\n      }\n\n/*section #boxContent figure{\n        background: white;\n        border: 1px solid #d0d0d0;\n        text-align: center;\n        margin: 10px auto;\n        padding: 10px;\n        max-width: 480px;\n        width: 100%;\n        min-width: 200px;\n        height: auto;\n      }*/\n\nsection #boxContent figure img{\n        /*border: 1px solid #243540;*/\n        border: 1px solid #d0d0d0;\n        border-radius: 10px;\n          -webkit-border-radius: 10px;\n          -moz-border-radius: 10px;\n          -ms-border-radius: 10px;\n          -o-border-radius: 10px;\n        /*Medidas Responsivo*/\n        background-size:100%;\n        background-repeat: no-repeat;\n        max-width: 320px;\n        width: 100%;\n        /*max-height: 420px;*/\n        min-height: auto;\n      }\n\nsection #boxContent figure figcaption{\n        padding: 10px;\n        margin: 10px auto;\n        font-style: italic;\n        background: #f0f0f0;\n        border: 0px solid #243540;\n        color: black;\n      }\n\nsection #boxContent figure figcaption{\n        border-radius: 10px;\n          -webkit-border-radius: 10px;\n          -moz-border-radius: 10px;\n          -ms-border-radius: 10px;\n          -o-border-radius: 10px;\n      }\n\n/*Configuração imagens e legendas*/\n\n/* Global\n-------------------------------------------------- */\n\n.featured{\n    font-weight: bold;\n    color: #333;\n}\n\n.loader{\n  display: table;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 1;\n  position: fixed;\n  top: 0px;\n}\n\n.loader .loaderContent{\n  /*background-size: 54px 55px;*/\n  background-image: url(\"/assets/img/global/intersection-black.gif\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  overflow: hidden;\n  text-align: center;\n  background-color: #dcdcdc;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.container #navbar .navbar-right{\n  margin: 0px;\n}\n\n.container #navbar .navbar.nav > li > a{\n  padding: 10px 15px;\n}\n\n/* Depositions\n  -------------------------------------------------- */\n\n#recommendation #navbar{\n    margin: 0px auto 0px auto;\n  }\n\n#recommendation #navbar .navbar-right{\n    margin-right: 0px;\n    padding: 0px 10px 0px 0px;\n  }\n\n#recommendation #navbar .navbar-nav{\n    margin-right: -10px;\n  }\n\nsection#depositions{\n    border: 0px solid #8fd6ff;\n  }\n\nsection#depositions .flex-caption {\n    /* width: 96%; */\n    padding: 2%;\n    left: 0;\n    bottom: 0;\n    background: rgba(0,0,0,.5);\n    color: #fff;\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\n    font-size: 14px;\n    line-height: 18px;\n  }\n\nsection#depositions li.css a {\n    border-radius: 0;\n  }\n\n/*\n  section#depositions .flexslider ul.slides li\n  p.depositions\n  p.flex-caption\n  */\n\nsection#depositions .flexslider ul.slides li p.depositions{\n    border: 0px solid #243540;\n    margin: 0px 15px 15px 15px;\n    font-style: italic;\n    line-height: normal;\n    font-size: 1.5em;\n    font-weight: normal;\n  }\n\nsection#depositions .flexslider ul.slides li .flex-caption{\n    border-top: 1px solid #d0d0d0;\n    background: none !important;\n    padding: 10px 10px;\n    text-align: right;\n    color: #000;\n    font-size: 1.1em;\n  }\n\nsection#depositions .flex-viewport{\n    padding-top: 10px;\n    border: 1px solid #d0d0d0;\n    border-radius: 20px;\n  }\n\nsection#depositions .flexslider ol.flex-control-nav{\n    border: 0px solid #8fd6ff;\n    bottom: -30px !important;\n    padding: 10px 0px 0px 0px;\n  }\n\nsection#depositions .flexslider figure{\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\nsection#depositions .flexslider figure img{\n    width: 80px;\n    height: 80px;\n    display: inline;\n    margin-right: 10px;\n    border:  3px solid #8fd6ff;\n    border-radius: 10px;\n  }\n\n/* Portfolio\n  -------------------------------------------------- */\n\n/*old portfolio\n  section#portfolio ul#ongameSites figure img{\n    border: 1px solid #243540;\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 480px;\n    width: 100%;\n    max-height: 480px;\n    min-height: auto;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo{\n    display: block;\n    padding: 5px;\n    margin: 5px auto;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo p{\n    font-weight: normal;\n    font-size: 1.2em;\n    padding: 5px;\n    border-top: 1px solid #d0d0d0;\n    border-bottom: 1px solid #d0d0d0;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo h4{\n    text-align: left;\n    margin: 15px auto;\n    font-size: 1.1em;\n  }\n  old portfolio*/\n\nsection#portfolio #boxContent section {\n    display: none;\n}\n\nsection#portfolio #boxContent section article{\n  border: 1px solid #6b6b6b;\n  border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -ms-border-radius: 20px;\n    -o-border-radius: 20px;\n}\n\nsection#portfolio #boxContent article header.subTitulo{\n  border-top: 0px solid #6b6b6b;\n  border-bottom: 0px solid #6b6b6b;\n}\n\nsection#portfolio #boxContent header.subTitulo h2{\n  color: #000;\n  font-weight: bold;\n  font-size: 1.5em;\n  display: block;\n  padding: 5px;\n  text-align: center;\n  margin: 0 auto;\n/*  border-top: 1px solid #6b6b6b;\n  border-bottom: 1px solid #6b6b6b;*/\n}\n\nsection#portfolio #boxContent header.subTitulo h2 span{\n  display: block;\n  font-weight: bold;\n  font-size: 0.7em;\n  padding: 5px;\n  margin: 0.5em auto 0px auto;\n  max-width: 350px;\n  background: #fff;\n  border: 1px solid #6b6b6b;\n  border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n}\n\nsection#portfolio #boxContent header.subTitulo h4{\n  color: #000;\n  font-size: 1.0em;\n  display: block;\n  padding: 10px 20px;\n  margin: 0 auto;\n}\n\nsection#portfolio article{\n  text-align: center;\n}\n\nsection#portfolio #boxContent .extra{\n  display: inline-block;\n  max-width: 320px;\n  vertical-align: top;\n}\n\n/* Skills\n  -------------------------------------------------- */\n\nsection#skills #boxContent figure{\n    width: 150px;\n  }\n\nsection#skills #boxContent .superior figure{\n    width: auto;\n    min-width: 100px;\n  }\n\nsection#skills #boxContent .superior figure img{\n    border: 0px solid #243540;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    width: 100%;\n  /*  max-width: 280px;\n    max-height: 150px;*/\n    min-height: auto;\n  }\n\nsection#skills #boxContent .extra{\n    display: inline-block;\n    max-width: 320px;\n    vertical-align: top;\n  }\n\nsection#skills #boxContent .extra figure img{\n    border: 0px solid #243540;\n    /*Medidas Responsivo*/\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 70px;\n    width: 100%;\n    max-height: 70px;\n    min-height: auto;\n  }\n\nsection#skills #boxContent section{\n    display: none;\n  }\n\nsection#skills #boxContent section article{\n    text-align: center;\n    padding: 0px;\n    margin: 20px auto;\n    border: 1px solid #6b6b6b;\n    border-radius: 20px;\n      -webkit-border-radius: 20px;\n      -moz-border-radius: 20px;\n      -ms-border-radius: 20px;\n      -o-border-radius: 20px;\n  }\n\nsection#skills #boxContent .subTitulo{\n    display: block;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#skills #boxContent .subTitulo h2{\n    color: #000;\n    font-weight: bold;\n    font-size: 1.5em;\n    display: block;\n    padding: 5px;\n    margin: 0 auto;\n    /*border-bottom: 1px solid #6b6b6b;*/\n  }\n\nsection#skills #boxContent .subTitulo h2 span{\n    display: block;\n    font-weight: bold;\n    font-size: 0.7em;\n    padding: 5px;\n    margin: 0.5em auto 0px auto;\n    max-width: 350px;\n    background: #fff;\n    border: 1px solid #6b6b6b;\n    border-radius: 10px;\n      -webkit-border-radius: 10px;\n      -moz-border-radius: 10px;\n      -ms-border-radius: 10px;\n      -o-border-radius: 10px;\n  }\n\nsection#skills #boxContent .subTitulo h2 span a{\n    color: #233540;\n  }\n\nsection#skills #boxContent .subTitulo h2 span:hover{\n    cursor: pointer;\n    background: #6b6b6b;\n  }\n\nsection#skills #boxContent .subTitulo h2:hover span:hover a,\n  section#skills #boxContent .subTitulo h2 span:hover a:hover{\n    color: #fff;\n  }\n\nsection#skills #boxContent section article footer.footer-information{\n    padding: 0px 15px;\n  }\n\nsection#skills #boxContent section article footer.footer-information p{\n    text-align: center;\n  }\n\n/*\n  section#skills #boxContent .subTitulo h4{text-align: left;margin: 15px auto;font-size: 1.1em;}\n  section#skills #boxContent ul li.jekyllrb{}\n  section#skills #boxContent ul li.jekyllrb figure{}\n  section#skills #boxContent ul li.jekyllrb figure img{}\n  */\n\n/* Blog\n  -------------------------------------------------- */\n\nsection#blog .container h5{\n    font-size: 1.5em;\n    text-align: center;\n    margin: 5px auto;\n  }\n\nsection#blog .container .avatar{\n    margin: 20px auto;\n    text-align: center;\n  }\n\nsection#blog .container .row.line{\n    border: 0px solid red;\n    margin: 5px auto;\n    padding-bottom: 10px;\n  }\n\nsection#blog .container .row.line span.data{\n    text-align: center;\n    display: block;\n    color: #6b6b6b;\n    font-size: 0.9em;\n    margin: 5px auto;\n  }\n\nsection#blog .container .row.line span.tags{\n    text-align: center;\n    display: block;\n  }\n\nsection#blog .container .line{\n    border-bottom: 0px solid #6b6b6b;\n  }\n\nsection#blog h5 time{\n    color: #6b6b6b;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#blog h5 span.reading-time{\n    display: block;\n    font-size: 0.8em;\n    color: #808080;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#blog .label-success{\n    background-color: #267723;\n  }\n\n/*Configuração imagens e legendas*/\n\narticle#blog figure{\n    background: white;\n    border: 1px solid #d0d0d0;\n    text-align: center;\n    margin: 10px auto;\n    padding: 10px;\n  \n    /*Medidas Responsivo*/\n    max-width: 320px;\n    width: 100%;\n    min-width: 250px;\n    height: auto;\n  }\n\narticle#blog figure img{\n    border: 1px solid #243540;\n  \n    /*Medidas Responsivo*/\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 320px;\n    width: 100%;\n    /*max-height: 420px;*/\n    min-height: auto;\n  }\n\narticle#blog figure figcaption{\n    padding: 10px;\n    margin: 10px auto;\n    font-style: italic;\n    background: #f0f0f0;\n    border: 0px solid #243540;\n    color: black;\n    font-size: 0.8em;\n    line-height: normal;\n  }\n\narticle#blog figure{\n    border-radius: 20px;\n  }\n\narticle#blog figure figcaption{\n    border-radius: 10px;\n  }\n\narticle#blog figure{\n    background: white;\n    border: 1px solid #d0d0d0;\n    text-align: center;\n    margin: 10px auto;\n    padding: 10px;\n    /*Medidas Responsivo*/\n    max-width: 480px;\n    width: 100%;\n    min-width: 200px;\n    height: auto;\n  }\n\n/*Configuração imagens e legendas*/\n\n/*BLOG*/\n\n/* POST\n  -------------------------------------------------- */\n\nsection#post .container .blog-post h3{\n    font-size: 1.5em;\n    text-align: center;\n    margin: 5px auto;\n  }\n\nsection#post .container .row.line{\n    margin: 5px auto;\n    padding-bottom: 10px;\n  }\n\nsection#post .container .row.line span.data{\n   }\n\nsection#post .container .row.line span.tags{\n    text-align: center;\n    display: block;\n  }\n\nsection#post .container .blog-title h4{\n    text-align: center;\n    display: block;\n    color: #6b6b6b;\n    font-size: 0.9em;\n    margin: 5px auto;\n    vertical-align: center;\n  }\n\nsection#post .container .blog-title h4 span.category{\n    display: block;\n    margin: 10px auto;\n  }\n\nsection#post .container .blog-title h4 span.dataTime{\n    display: block;\n    margin: 10px auto;\n  }\n\nsection#post .container .blog-title h4 span.label{\n    background-color: #267723;\n    font-size: 0.9em;\n  }\n\nsection#post .container section{\n  \n  }\n\nsection#post .container section header{\n    margin: 0px auto 10px auto;\n    padding: 5px 10px;\n    font-size: 0.9em;\n    font-weight: bold;\n    text-align: center;\n  }\n\nsection#post .container section article{\n  \n  }\n\nsection#post .container section article p{\n    font-size: 0.9em;\n    line-height: normal;\n    margin: 10px auto;\n  }\n\nsection#post .container section footer{\n    border-top: 0px solid #d0d0d0;\n    margin: 10px auto 0px auto;\n  }\n\nsection#post .container section .assign{\n    border-bottom: 1px solid #d0d0d0;\n    margin: 0px auto 10px auto;\n    padding: 0px 10px;\n    font-size: 0.8em;\n  }\n\nsection#post .container section footer h4{\n    font-size: 1.0em;\n    font-weight: bold;\n    border-top: 0px solid #d0d0d0;\n    padding: 5px 10px;\n  }\n\nsection#post .container section footer p{\n    border-top: 0px solid #d0d0d0;\n    padding: 5px 20px;\n    font-size: 0.9em;\n  }\n\nsection#post .container section footer ul{\n    display: block;\n  }\n\nsection#post .container section footer ul li{\n    list-style-type: disc;\n    list-style-position: inside;\n    line-height: normal;\n    margin: 0px auto;\n  }\n\nsection#post .container section footer ul li a{\n    font-size: 0.8em;\n  }\n\n/*POST*/\n\n/* LAB\n  -------------------------------------------------- */\n\nsection#lab .container .panel .panel-body{\n    text-align: center;\n  }\n\nsection#lab .container .panel p.tituloLab{\n      font-weight: normal;\n      font-size: 1.2em;\n      text-align: center;\n      padding: 5px;\n      margin: 10px auto 15px auto;\n      border-top: 1px solid #d0d0d0;\n      border-bottom: 1px solid #d0d0d0;\n  }\n\nsection#lab .container section#labProjects{\n    margin: 20px auto 0px auto;\n  }\n\nsection#lab .container section#labProjects article{\n    border: 1px solid #6b6b6b;\n    border-radius: 20px;\n      -webkit-border-radius: 20px;\n      -moz-border-radius: 20px;\n      -ms-border-radius: 20px;\n      -o-border-radius: 20px;\n  }\n\nsection#lab .container section#labProjects h2{\n    color: #000;\n    font-weight: 700;\n    font-size: 1.5em;\n    display: block;\n    padding: 5px;\n    margin: 0px auto 10px auto;\n    border-top: 0px solid #6b6b6b;\n    border-bottom: 0px solid #6b6b6b;\n  }\n\nsection#lab .container section#labProjects h2 span{\n    font-size: 0.7em;\n    font-weight: normal;\n    display: block;\n    margin: 5px auto;\n  }\n\nsection#lab .container section#labProjects h5 {\n      text-align: left;\n      line-height: 30px;\n      font-size: 18px;\n      border: 1px solid #d0d0d0;\n      padding: 10px;\n      border-radius: 20px;\n        -webkit-border-radius: 20px;\n        -moz-border-radius: 20px;\n        -ms-border-radius: 20px;\n        -o-border-radius: 20px;\n      width: 250px;\n      display: inline-block;\n      vertical-align: top;\n      margin: 0.5em 0.3em;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,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YTtNQUNiLG1CQUFtQjtRQUNqQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2QixzQkFBc0I7TUFDeEIsWUFBWTtNQUNaLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudmlyb25tZW50e1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiAjNzJlNzJlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuLS0tLUFaVUwtLS0tXG4jOGZkNmZmIC0gYXp1bCBiYXNlIG11aXRvIGNsYXJvXG4jODFDMUU1IC0gYXp1bCBwb3VjbyBjbGFyb1xuIzZCQTBCRiAtIGF6dWwgbWVkaW9cbiM0NzZCN0YgLSBhenVsIGVzY3Vyb1xuIzI0MzU0MCAtIGF6dWwgbXVpdG8gZXNjdXJvXG4jMzM3YWI3IC0gYXp1bCB0aGVtZVxuLS0tLUFaVUwtLS0tXG5cbi0tLS1DSU5aQS0tLS1cbiM4MDgwODAgLSBjaW56YSBlc2N1cm9cbiNkMGQwZDAgLSBjaW56YSBjbGFyb1xuIzZiNmI2YiAtIGNpbnphIGxpbmtcbi0tLS1DSU5aQS0tLS1cblxuLS0tLVZFUkRFLS0tLVxuIzI3QTgyMiAtIHZlcmRlIGNsYXJvXG4jMjY3NzIzIC0gdmVyZGUgZXNjdXJvXG4tLS0tVkVSREUtLS0tXG4qL1xuXG4vKiBNYWluIHBhZ2Ugd2l0aCBzdGlra3ktZm9vdGVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qe1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIC8qIFRoZSBodG1sIGFuZCBib2R5IGVsZW1lbnRzIGNhbm5vdCBoYXZlIGFueSBwYWRkaW5nIG9yIG1hcmdpbi4gKi9cbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzhmZDZmZjtcbiAgICAvKmJvcmRlci10b3A6IDNweCBzb2xpZCAjMjdBODIyOyovXG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuICBcbi5ub25le1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogV3JhcHBlciBmb3IgcGFnZSBjb250ZW50IHRvIHB1c2ggZG93biBmb290ZXIgKi9cbiN3cmFwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvKiBOZWdhdGl2ZSBpbmRlbnQgZm9vdGVyIGJ5IGl0cyBoZWlnaHQgKi9cbiAgICBtYXJnaW46IDAgYXV0byAtNjVweDtcbiAgICAvKiBQYWQgYm90dG9tIGJ5IGZvb3RlciBoZWlnaHQgKi9cbiAgICAvKnBhZGRpbmc6IDAgMCA2MHB4OyovXG59XG5cbmhye1xuICAgIGJvcmRlcjogIDAuMDFlbSBzb2xpZCAjZDBkMGQwO1xufVxuXG4ucGFuZWx7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1vLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuICAvKiBOYXZiYXJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGltZ3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAtMTBweCBhdXRvIDBweCBhdXRvO1xuICB9XG4gIFxuICAubmF2YmFyLXN0YXRpYy10b3Age1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXJ7XG4gICAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZHtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcbiAgfVxuICBcbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGl7XG4gICAgbWFyZ2luOiAtNXB4IGF1dG8gMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIFxuICAubmF2YmFyLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLypOQVZCQVIgT0NVTFRPXG4gIC5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVye1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gIH0qL1xuICAvKk5BVkJBUiBPQ1VMVE9cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWZvcm0ge1xuICAgIGJvcmRlci1jb2xvcjogIzZiNmI2YjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgfVxuICBcbiAgc3Bhbi5mYXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Ki9cblxuICBzcGFuLmZhe1xuICAgIHotaW5kZXg6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIHNwYW4uZmE6YmVmb3Jle31cbiAgXG4gIC8qI3dyYXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9Ki9cblxuICBuYXYubmF2YmFyIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5iYWNrTmF2e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwLDIzLDU1LDAuNSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLm5hdmJhci5uYXZiYXItZGVmYXVsdHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAtMTQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlcixcbiAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIGF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2e1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2IGxpe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2IGxpIGF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qXG4gICAgICBzcGFuLmZhe1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIFxuICAgICAgc3Bhbi5mYTpiZWZvcmV7fVxuICAgIFxuICAgICAgI3dyYXB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIG5hdi5uYXZiYXIgLmNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIFxuICAgICAgLmJhY2tOYXZ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwyMyw1NSwwLjUpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogLTE0MHB4O1xuICAgICAgfVxuICAgIFxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyLFxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIGF7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IGF1dG87XG4gICAgICB9XG4gICAgXG4gICAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2IGxpIGF7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIFxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgfVxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgfSovXG4gICAgXG4gICAgfSAvKiBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpICovXG5cbiAgICAgIC8qIEN1c3RvbSBwYWdlIENTU1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAudGV4dC1tdXRlZCB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgLmNvbnRhaW5lciBhIHtcbiAgICBjb2xvcjogIzZCQTBCRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciBhOmhvdmVyLFxuICAuY29udGFpbmVyIGE6Zm9jdXMsXG4gIC5jb250YWluZXIgYTphY3RpdmV7XG4gICAgLypjb2xvcjogIzI2NzcyMzsqL1xuICAgIGNvbG9yOiAjNDc2QjdGO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuaW1nLXJlc3BvbnNpdmUge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBoZWlnaHQ6IGF1dG87XG4gICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBhbmVsLWRlZmF1bHQgaDQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wYW5lbC1kZWZhdWx0IGg1IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAucGFuZWwtZGVmYXVsdCBoNiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5wYW5lbC1kZWZhdWx0IGg0IGEsIGg1IGEge1xuICAgIGNvbG9yOiAjMjdBODIyO1xuICB9XG4gIC5wYW5lbC1kZWZhdWx0IGg0IGE6aG92ZXIsIGg1IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMjY3NzIzO1xuICB9XG4gIC5wYW5lbHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cbiAgLnBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmJsb2ctcG9zdHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuYmxvZy10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICB9XG4gIC5yZWxhdGVkLXBvc3RzIGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnBhZ2Utbm90LWZvdW5kIHtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICB9XG4gIC5kaXNxdXMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAuYmxvZ3Bvc3R7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAgIC8qTUVOVSBUQUIgT1BUSU9OKi9cbiAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb257XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDsqL1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGl7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMC41MGVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgIC8qICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjb25nYW1le31cbiAgICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYSN2aWV3aXR7fVxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI29uZ2FtZSBpbWd7fVxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI3ZpZXdpdCBpbWd7fVxuICAgICAgKi9cbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhLFxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGE6aG92ZXJ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGF7XG4gICAgICAgIGNvbG9yOiAjMjMzNTQwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkuYWN0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmI2YjZiO1xuICAgICAgICAvKmJhY2tncm91bmQ6ICM4ZmQ2ZmY7Ki9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpLmFjdGl2ZSBhe1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgLnNob3dIaWRle1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IHVsLmNvbnRlbnRNZW51T3B0aW9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKnNlY3Rpb24gI2JveENvbnRlbnQgc2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDBcbiAgICAgIH0qL1xuICAgICAgXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IHVse1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWwgbGl7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICAgIC8qTUVOVSBUQUIgT1BUSU9OKi9cbiAgICAgIFxuICAgICAgLypDb25maWd1cmHDp8OjbyBpbWFnZW5zIGUgbGVnZW5kYXMqL1xuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmV7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgLypNZWRpZGFzIFJlc3BvbnNpdm9cbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDsqL1xuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmV7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfSovXG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJlIGltZ3tcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwOyovXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyptYXgtaGVpZ2h0OiA0MjBweDsqL1xuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZSBmaWdjYXB0aW9ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmUgZmlnY2FwdGlvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXG5cbi8qIEdsb2JhbFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mZWF0dXJlZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmxvYWRlcntcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG59XG5cbi5sb2FkZXIgLmxvYWRlckNvbnRlbnR7XG4gIC8qYmFja2dyb3VuZC1zaXplOiA1NHB4IDU1cHg7Ki9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ2xvYmFsL2ludGVyc2VjdGlvbi1ibGFjay5naWZcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRhaW5lciAjbmF2YmFyIC5uYXZiYXItcmlnaHR7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uY29udGFpbmVyICNuYXZiYXIgLm5hdmJhci5uYXYgPiBsaSA+IGF7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuICAvKiBEZXBvc2l0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAjcmVjb21tZW5kYXRpb24gI25hdmJhcntcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xuICB9XG4gIFxuICAjcmVjb21tZW5kYXRpb24gI25hdmJhciAubmF2YmFyLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XG4gIH1cbiAgI3JlY29tbWVuZGF0aW9uICNuYXZiYXIgLm5hdmJhci1uYXZ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNkZXBvc2l0aW9uc3tcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4LWNhcHRpb24ge1xuICAgIC8qIHdpZHRoOiA5NiU7ICovXG4gICAgcGFkZGluZzogMiU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwwLDAsLjMpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyBsaS5jc3MgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLypcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciB1bC5zbGlkZXMgbGlcbiAgcC5kZXBvc2l0aW9uc1xuICBwLmZsZXgtY2FwdGlvblxuICAqL1xuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaSBwLmRlcG9zaXRpb25ze1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XG4gICAgbWFyZ2luOiAwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaSAuZmxleC1jYXB0aW9ue1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuICBcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleC12aWV3cG9ydHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgb2wuZmxleC1jb250cm9sLW5hdntcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xuICAgIGJvdHRvbTogLTMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIGZpZ3VyZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgZmlndXJlIGltZ3tcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6ICAzcHggc29saWQgIzhmZDZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgICAvKiBQb3J0Zm9saW9cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLypvbGQgcG9ydGZvbGlvXG4gIHNlY3Rpb24jcG9ydGZvbGlvIHVsI29uZ2FtZVNpdGVzIGZpZ3VyZSBpbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0MzU0MDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDgwcHg7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgdWwgbGkuc3ViVGl0dWxve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCB1bCBsaS5zdWJUaXR1bG8gcHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwO1xuICB9XG4gIFxuICBzZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCB1bCBsaS5zdWJUaXR1bG8gaDR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG4gIG9sZCBwb3J0Zm9saW8qL1xuICBcbiAgc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xle1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgYXJ0aWNsZSBoZWFkZXIuc3ViVGl0dWxve1xuICBib3JkZXItdG9wOiAwcHggc29saWQgIzZiNmI2YjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICM2YjZiNmI7XG59XG5cbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IGhlYWRlci5zdWJUaXR1bG8gaDJ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbi8qICBib3JkZXItdG9wOiAxcHggc29saWQgIzZiNmI2YjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2YjZiNmI7Ki9cbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgaGVhZGVyLnN1YlRpdHVsbyBoMiBzcGFue1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwLjVlbSBhdXRvIDBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgaGVhZGVyLnN1YlRpdHVsbyBoNHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS4wZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uI3BvcnRmb2xpbyBhcnRpY2xle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IC5leHRyYXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4gIC8qIFNraWxsc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgZmlndXJle1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLnN1cGVyaW9yIGZpZ3VyZXtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJlIGltZ3tcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAvKiAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDsqL1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5leHRyYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuZXh0cmEgZmlndXJlIGltZ3tcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHNlY3Rpb257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZiNmI2YjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgye1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2YjZiNmI7Ki9cbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLnN1YlRpdHVsbyBoMiBzcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMC41ZW0gYXV0byAwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZiNmI2YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW4gYXtcbiAgICBjb2xvcjogIzIzMzU0MDtcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLnN1YlRpdHVsbyBoMiBzcGFuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNmI2YjZiO1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyOmhvdmVyIHNwYW46aG92ZXIgYSxcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLnN1YlRpdHVsbyBoMiBzcGFuOmhvdmVyIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHNlY3Rpb24gYXJ0aWNsZSBmb290ZXIuZm9vdGVyLWluZm9ybWF0aW9ue1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICB9XG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHNlY3Rpb24gYXJ0aWNsZSBmb290ZXIuZm9vdGVyLWluZm9ybWF0aW9uIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC8qXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDR7dGV4dC1hbGlnbjogbGVmdDttYXJnaW46IDE1cHggYXV0bztmb250LXNpemU6IDEuMWVtO31cbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgdWwgbGkuamVreWxscmJ7fVxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYiBmaWd1cmV7fVxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYiBmaWd1cmUgaW1ne31cbiAgKi9cblxuICAgIC8qIEJsb2dcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgaDV7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLmF2YXRhcntcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5yb3cubGluZXtcbiAgICBib3JkZXI6IDBweCBzb2xpZCByZWQ7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLnJvdy5saW5lIHNwYW4uZGF0YXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi50YWdze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLmxpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICM2YjZiNmI7XG4gIH1cbiAgXG4gIHNlY3Rpb24jYmxvZyBoNSB0aW1le1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIHNlY3Rpb24jYmxvZyBoNSBzcGFuLnJlYWRpbmctdGltZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI2Jsb2cgLmxhYmVsLXN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzcyMztcbiAgfVxuICBcbiAgLypDb25maWd1cmHDp8OjbyBpbWFnZW5zIGUgbGVnZW5kYXMqL1xuICBhcnRpY2xlI2Jsb2cgZmlndXJle1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIFxuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBhcnRpY2xlI2Jsb2cgZmlndXJlIGltZ3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwO1xuICBcbiAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qbWF4LWhlaWdodDogNDIwcHg7Ki9cbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBhcnRpY2xlI2Jsb2cgZmlndXJlIGZpZ2NhcHRpb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIGFydGljbGUjYmxvZyBmaWd1cmV7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZSBmaWdjYXB0aW9ue1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIGFydGljbGUjYmxvZyBmaWd1cmV7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXG4gIFxuICAvKkJMT0cqL1xuICBcbiAgLyogUE9TVFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy1wb3N0IGgze1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZXtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi5kYXRhe1xuICAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLnJvdy5saW5lIHNwYW4udGFnc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5ibG9nLXRpdGxlIGg0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDQgc3Bhbi5jYXRlZ29yeXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDQgc3Bhbi5kYXRhVGltZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDQgc3Bhbi5sYWJlbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY3NzIzO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb257XG4gIFxuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGhlYWRlcntcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBhcnRpY2xle1xuICBcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBhcnRpY2xlIHB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGZvb3RlcntcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAwcHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiAuYXNzaWdue1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIGg0e1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkMGQwZDA7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIHB7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkMGQwZDA7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIHVsIGxpe1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGZvb3RlciB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgLypQT1NUKi9cblxuXG4gICAgLyogTEFCXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgLnBhbmVsIC5wYW5lbC1ib2R5e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciAucGFuZWwgcC50aXR1bG9MYWJ7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XG4gIH1cbiAgXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0c3tcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGFydGljbGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZiNmI2YjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIHNlY3Rpb24jbGFiUHJvamVjdHMgaDJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgIzZiNmI2YjtcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzZiNmI2YjtcbiAgfVxuICBcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGgyIHNwYW57XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0cyBoNSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBtYXJnaW46IDAuNWVtIDAuM2VtO1xuICB9XG4gIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brunogaudino/local-repositories/brunogaudino.github.io/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map