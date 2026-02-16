# 📧 EmailJS Template Setup Guide

## 🎯 How to Set Up Templates in EmailJS Dashboard

### Step 1: Go to EmailJS Dashboard
1. Visit https://dashboard.emailjs.com/
2. Login to your account
3. Go to **Email Templates** section

---

## 📨 Template 1: Customer Confirmation Email

**Template ID:** `template_lrlw5uo`

### Template Settings:
- **Subject:** `Order Confirmation #{{order_id}} - PureNut`
- **From Name:** `PureNut`
- **From Email:** `info@thepurenut.nl`
- **To Email:** `{{email}}`

### HTML Content:
Copy and paste the content from `CUSTOMER_EMAIL_TEMPLATE.html` into the HTML editor.

---

## 📨 Template 2: Admin Notification Email

**Template ID:** `template_npmwdac`

### Template Settings:
- **Subject:** `🔔 New Order #{{order_id}} - PureNut`
- **From Name:** `PureNut Website`
- **From Email:** `noreply@thepurenut.nl`
- **To Email:** `{{email}}` (will be set to info@thepurenut.nl in code)

### HTML Content:
Copy and paste the content from `ADMIN_EMAIL_TEMPLATE.html` into the HTML editor.

---

## 🔧 Variables Used in Templates

These variables are sent from the Cart.jsx file:

- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone number
- `{{customer_company}}` - Company name (or "Not provided")
- `{{order_id}}` - Order ID (e.g., ORD-1234567890)
- `{{order_date}}` - Order date and time
- `{{items_table}}` - HTML table rows with order items
- `{{total}}` - Total amount (number only, € added in template)
- `{{notes}}` - Delivery notes
- `{{year}}` - Current year

---

## ✅ Testing

After setting up templates:
1. Go to your website
2. Add items to cart
3. Fill in customer details
4. Click "Place order request"
5. Check both customer and admin emails

---

## 📝 Notes

- Make sure to enable **HTML** mode in EmailJS template editor
- Test emails may go to spam folder initially
- Verify sender email is authenticated in EmailJS

