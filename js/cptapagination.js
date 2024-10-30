function cptaajaxPagination(pnumber,plimit){
	var nth  = pnumber;
	var lmt  = plimit;
	var ajax_url = ajax_params.ajax_url;
	var cpta = jQuery("#post").attr('data-posttype');
	var cptacat = jQuery("#post").attr('data-cattype');
	var cptatax = jQuery("#post").attr('data-taxname');
	jQuery.ajax({
		url		:ajax_url,
		type	:'post',
		data	:{ 'action':'cptapagination','number':nth,'limit':lmt,'cptapost':cpta,'cptacatname':cptacat,'cptataxname':cptatax },
		beforeSend	: function(){
			jQuery("#cptapagination-content").html("<p style='text-align:center;'>Loading please wait...!</p>");
		},
		success :function(pvalue){
			jQuery("#cptapagination-content").html(pvalue);
		}
	});
}