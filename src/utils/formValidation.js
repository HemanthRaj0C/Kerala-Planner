/**
 * Form validation utility functions
 */

// Validate email format
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate that a field is not empty
export const validateRequired = (value) => {
  return value !== undefined && value !== null && value.trim() !== '';
};

// Validate password strength
export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
};

// Validate phone number format
export const validatePhone = (phone) => {
  // Basic international phone format validation
  const regex = /^\+?[0-9]{8,15}$/;
  return regex.test(phone);
};

// Validate date format (YYYY-MM-DD)
export const validateDate = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  const parsedDate = new Date(date);
  return !isNaN(parsedDate);
};

// Validate form fields
export const validateForm = (formData, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];
    
    // Check required fields
    if (rules.required && !validateRequired(value)) {
      errors[field] = rules.requiredMessage || 'This field is required';
      return;
    }
    
    // Skip other validations if field is empty and not required
    if (!value && !rules.required) return;
    
    // Email validation
    if (rules.email && !validateEmail(value)) {
      errors[field] = rules.emailMessage || 'Please enter a valid email address';
    }
    
    // Password validation
    if (rules.password && !validatePassword(value)) {
      errors[field] = rules.passwordMessage || 
        'Password must contain at least 8 characters, including uppercase, lowercase, and numbers';
    }
    
    // Phone validation
    if (rules.phone && !validatePhone(value)) {
      errors[field] = rules.phoneMessage || 'Please enter a valid phone number';
    }
    
    // Date validation
    if (rules.date && !validateDate(value)) {
      errors[field] = rules.dateMessage || 'Please enter a valid date (YYYY-MM-DD)';
    }
    
    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      errors[field] = rules.minLengthMessage || 
        `This field must be at least ${rules.minLength} characters long`;
    }
    
    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      errors[field] = rules.maxLengthMessage || 
        `This field must not exceed ${rules.maxLength} characters`;
    }
    
    // Custom validation function
    if (rules.custom && typeof rules.custom === 'function') {
      const customError = rules.custom(value, formData);
      if (customError) {
        errors[field] = customError;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};