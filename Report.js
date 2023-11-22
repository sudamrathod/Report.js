// Copyright (c) 2023, Frappe Technologies and contributors
// For license information, please see license.txt
/* eslint-disable */


frappe.query_reports["Summery New"] = {
	"filters": [
		
		{  
		    fieldname:"from_date",
            fieldtype: "Date",
            label:__("From Date"),
			reqd: 0,
			default: frappe.datetime.get_today()
		},

		{   
		    fieldname:"to_date",
            fieldtype: "Date",
            label:__("To Date"),
			reqd: 0,
			default: frappe.datetime.get_today()
		},

		{
			fieldname: "mobile_number",
			label: __("Select"),
			fieldtype: "Link",
			options:"Mobile Number Registration"			
		},
		
		{
			fieldname: "call_type",
			label: __("Select"),
			fieldtype: "Select",
			options:[
				"",
				{label: __('Select All'), value: 'Select All'},
				{label: __('Search'), value: 'Search'},
				{label: __('Missed Call'), value: 'Missed Call'},
				{label: __('Incoming Call'), value: 'Incoming Call'},
				{label: __('Outgoing Call'), value: 'Outgoing Call'},
				{label: __('Reject Call'), value: 'Reject Call'},
				
			]
		},
	]
		
		
};
