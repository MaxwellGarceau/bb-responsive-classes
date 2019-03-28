(function($) {
  $(document).ready(function() {

    // Global Variables
    var mediumBreakpoint = bb_breakpoints.$bb_medium_breakpoint;
    var responsiveBreakpoint = bb_breakpoints.$bb_responsive_breakpoint;
    var mediumBreakpointClass = 'bb-medium-breakpoint';
    var responsiveBreakpointClass = 'bb-responsive-breakpoint';

    function setMediumBreakpoint() {
      var windowWidth = $(window).width();

      // Add class if screen is lower than breakpoint and above mobile breakpoint. Otherwise remove class.
      // if (windowWidth <= mediumBreakpoint && windowWidth > responsiveBreakpoint) {
      if (windowWidth <= mediumBreakpoint) {
        $('body').addClass(mediumBreakpointClass);
      } else if ($('body').hasClass(mediumBreakpointClass)) {
        $('body').removeClass(mediumBreakpointClass);
      }
    }

    function setResponsiveBreakpoint() {
      var windowWidth = $(window).width();

      // Add class if screen is less than responsive breakpoint. Otherwise remove class.
      if (windowWidth < responsiveBreakpoint) {
        $('body').addClass(responsiveBreakpointClass);
      } else if ($('body').hasClass(responsiveBreakpointClass)) {
        $('body').removeClass(responsiveBreakpointClass);
      }
    }

    // Initialize on load
    setMediumBreakpoint();
    setResponsiveBreakpoint();

    // Event listeners
    $(window).resize(function() {
      setMediumBreakpoint();
      setResponsiveBreakpoint();
    });
  });
})(jQuery);
