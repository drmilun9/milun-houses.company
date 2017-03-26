 <!DOCTYPE html>
 <html>
  <head>
  <meta charset="utf-8">

  <title>AngularJS Tutorial</title>
<base href="http://localhost/ang-free-tut/wordpress/">



  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


 
 <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/md_deps.js"></script>
  

<link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css">
<?php wp_head(); ?>
  </head>
  
  <body ng-app="site" data-ng-controller="mainController">
    <div data-ng-controller="Content">
<h3>hello from header</h3>
