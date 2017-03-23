 <!DOCTYPE html>
 <html>
  <head>
  <meta charset="utf-8">

  <title>AngularJS Tutorial</title>
<base href="http://localhost/ang-free-tut/wordpress/">

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-animate.min.js"></script>
  <script src="//code.angularjs.org/1.5.6/angular-sanitize.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.1.3/ui-bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.1.3/ui-bootstrap-tpls.min.js"></script>
 
 <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/app.js"></script>
  

<link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css">
<?php wp_head(); ?>
  </head>
  
  <body ng-app="site" data-ng-controller="mainController">

<!--<navbar></navbar>-->
