// Test PII detection
const customerData = {
  name: "John Smith",
  ssn: "123-45-6789",
  email: "john.smith@jpmorgan.com",
  dob: "1985-03-15",
  accountNumber: "4532-1234-5678-9012",
  phone: "+1-212-555-1234",
  address: "123 Wall St, New York, NY 10005"
};

// Internal employee PII
const employee = {
  employeeId: "JPMC-987654",
  salary: 250000,
  bonus: 50000,
  reviewNotes: "Exceeds expectations, promoted to VP"
};
