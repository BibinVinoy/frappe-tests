import frappe
from frappe.custom.doctype.property_setter.property_setter import make_property_setter

@frappe.whitelist()
def set_si_property(has_role=None):
	
	if(has_role and (not frappe.db.exists("Property Setter", {'doc_type':"Sales Invoice Item", "field_name":"rate", "property":"hidden", "value": 1}))):
		make_property_setter("Sales Invoice Item", "rate", "hidden", 1, "Check", validate_fields_for_doctype=False)
		print(f"\n\nSet 1\n\n")
		return True
	elif (not has_role and (not frappe.db.exists("Property Setter", {'doc_type':"Sales Invoice Item", "field_name":"rate", "property":"hidden", "value": 0}))):
		make_property_setter("Sales Invoice Item", "rate", "hidden", 0, "Check", validate_fields_for_doctype=False)
		print(f"\n\nSet 0\n\n")
		return True
	else:
		print(f"\n\nSet Nothing\n\n")
		return False
	# frappe.msgprint("from set si")