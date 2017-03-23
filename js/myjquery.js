




jQuery(document).ready(function(){
	alert("jquery works");
    jQuery("#showDetails").click(function(){
        jQuery("#hidden").slideToggle("slow");
        alert("hello");
    });
});
