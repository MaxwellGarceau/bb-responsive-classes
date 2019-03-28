<?php

/*
Plugin Name: BB Responsive Classes
Description: Adds responsive body classes
Version: 0.1.0
Author: Red Earth Design
Author URI: https://redearthdesign.com/
Text Domain: bb-responsive-classes
Domain Path: /languages
*/

defined( 'ABSPATH' ) or die();

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

function add_bb_responsive_classes() {
  if ( is_plugin_active( 'bb-plugin/fl-builder.php' ) ) {
    $bb_global_settings = get_option( '_fl_builder_settings', array() );

    if ( !empty( $bb_global_settings ) ) {
      $bb_medium_breakpoint = $bb_global_settings->medium_breakpoint;
      $bb_responsive_breakpoint = $bb_global_settings->responsive_breakpoint;

      // Register the script
      wp_register_script( 'add-bb-responsive-classes-js', plugin_dir_url( __FILE__ ) . 'js/bb-responsive-classes.js', array( 'jquery' ), '1.0.0' );

      // Localize the script with new data
      $translation_array = array(
      	'$bb_medium_breakpoint' => $bb_medium_breakpoint,
      	'$bb_responsive_breakpoint' => $bb_responsive_breakpoint
      );
      wp_localize_script( 'add-bb-responsive-classes-js', 'bb_breakpoints', $translation_array );

      // Enqueued script with localized data.
      wp_enqueue_script( 'add-bb-responsive-classes-js' );
    }
  }
}
add_action('wp_enqueue_scripts', 'add_bb_responsive_classes');
