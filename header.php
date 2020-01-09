<?php
/**
 * Header Template
 *
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,700|Nunito:300,400,400i,600,700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	
<a class="screen-reader-text" href="#content">Saltar al contenido</a>

<header class="siteHeader">
	<div class="siteHeader__headerContent container">
		<h1 class="headerContent__siteTitle"><?php bloginfo( 'name' ); ?></h1>

		<nav class="headerContent__mainNavigation">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav>

		<nav id="mobileMenu" class="headerContent__mobileNavigation -hidden">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav>

		<div id="menuToggle" class="headerContent__menuToggle" role="button"></div>
	</div>
</header>

<div id="content" class="siteContent container">
	
