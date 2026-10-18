export const html = (options) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
      
      <!-- Main Container Table -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f7f6; padding: 40px 10px;">
        <tr>
          <td align="center">
            
            <!-- Email Body Box -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
              
              <!-- Header / Brand Logo Area -->
              <tr>
                <td align="center" style="background-color: #4F46E5; padding: 30px 20px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">SUPPORT TEAM</h1>
                </td>
              </tr>
              
              <!-- Content Area -->
              <tr>
                <td style="padding: 40px 30px;">
                  <h2 style="color: #1F2937; margin-top: 0; margin-bottom: 16px; font-size: 22px; font-weight: 700;">Reset Your Password</h2>
                  <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                    Hello,<br><br>
                    We received a request to reset the password for your account. No changes have been made yet. You can reset your password by clicking the button below:
                  </p>
                  
                  <!-- Action Button (Bulletproof Button Concept) -->
                  <table border="0" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                    <tr>
                      <td align="center" bgcolor="#4F46E5" style="border-radius: 6px;">
                        <a href="${options.url}" target="_blank" style="display: inline-block; padding: 14px 30px; font-size: 16px; color: #ffffff; font-weight: 600; text-decoration: none; border-radius: 6px;">
                          Reset Password
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                  <p style="color: #4B5563; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
                    This link will expire in <strong>15 minutes</strong> for security reasons.<br>
                    If you did not request a password reset, you can safely ignore this email.
                  </p>
                </td>
              </tr>
              
              <!-- Divider Line -->
              <tr>
                <td style="padding: 0 30px;">
                  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 0;">
                </td>
              </tr>
              
              <!-- Troubleshooting Link -->
              <tr>
                <td style="padding: 20px 30px 40px 30px;">
                  <p style="color: #9CA3AF; font-size: 12px; line-height: 1.5; margin: 0;">
                    If the button above doesn't work, copy and paste this URL into your browser:<br>
                    <a href="${options.url}" target="_blank" style="color: #4F46E5; text-decoration: underline; word-break: break-all;">${options.url}</a>
                  </p>
                </td>
              </tr>
              
            </table>
            
            <!-- Footer Area -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin-top: 20px;">
              <tr>
                <td align="center" style="color: #9CA3AF; font-size: 12px; padding: 0 10px;">
                  <p style="margin: 0 0 8px 0;">&copy; 2026 Support Team. All rights reserved.</p>
                  <p style="margin: 0;">Karachi, Pakistan</p>
                </td>
              </tr>
            </table>
            
          </td>
        </tr>
      </table>
      
    </body>
    </html>
  `
}