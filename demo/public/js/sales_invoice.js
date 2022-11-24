// {% include 'erpnext/selling/sales_common.js' %};
// frappe.provide("erpnext.accounts");

frappe.ui.form.on('Sales Invoice', {
// erpnext.accounts.SalesInvoiceController = erpnext.selling.SellingController.extend({
	before_load: function(frm){
			frappe.call({
				method:"demo.custom_api.custom_api.set_si_property",
				args:{has_role:frappe.user.has_role("Physician")},
				callback:function(r){
					if(r.message){
						document.location.reload()
						frappe.msgprint("Set")
					}
				}
			})
	}
})

// frappe.ui.form.on("Sales Invoice Item", {
// 	items_add: function(frm, cdt, cdn){
// 		let row = [cdt][cdn]
// 		frappe.msgprint("To Set")
// 		if(frappe.user.has_role("Physician")){
// 			// frm.set_df_property(row.rate, 'hidden', 1)
// 			console.log("hlo")
// 			frappe.msgprint("Set")
// 		}
// 	}
// })