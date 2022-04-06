import axios from "axios";

/**
 * This is the template for the email that is sent to the user when they request to reset their password.
 * The email is sent from the email address that is configured in the mailService, passwordResetEmail function.
 * The email is sent to the email address that is configured in the mailService passwordResetEmail function.
 * The subject of the email is "Password Reset"
 * The message is sent as HTML.
 * @returns {string} - The HTML message that is sent to the user.
 */
export async function composePassResetTemplate() {
  console.log("composePassResetTemplate");
  try {
    const response = await axios.post(
      "https://api.mjml.io/v1/render",
      {
        mjml: "<mjml> <mj-body background-color='#f7f7f7'> <mj-section padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-image align='center' padding='25px' src='https://staging.iustaad.com/wp-content/uploads/2018/07/Logo-Green-1.png' width='150px'></mj-image> </mj-column> </mj-section> <mj-section border-radius='30px' background-color='#fcfff5' padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-text align='center' font-size='20px' font-weight='600' font-family='openSansHelvetica,Arial,sans-serif' padding-left='25px' padding-right='25px'><span>ForgetYourPassword?</span></mj-text> <mj-text align='left' font-size='14px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> <h3>Hi {{$user->name}},</h3> <p>We received a request to reset your password. If you made this request, please click the button below to reset your password.</p> </mj-text> <mj-button align='center' font-size='14px' background-color='#84bc00' border-radius='10px' color='#fff' font-family='open Sans Helvetica, Arial, sans-serif' href='https://www.iustaad.com'> Reset Your Password </mj-button> <mj-text> If you did not request a password reset, please ignore this email or reply to let us know. </mj-text> <mj-text align='left' font-size='14px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> Thanks, <br /> The iUstaad Team </mj-text> </mj-column> </mj-section> <mj-section> <mj-column> <mj-social icon-size='25px' mode='horizontal'> <mj-social-element name='facebook' href='https://www.facebook.com/free.taleem'></mj-social-element> <mj-social-element name='pinterest' href='https://www.pinterest.com/'></mj-social-element> <mj-social-element name='youtube' href='https://www.youtube.com/user/freeTaleem'></mj-social-element> </mj-social> </mj-column> </mj-section> <mj-section border-radius='30px' background-color='#fcfff5'> <mj-column vertical-align='middle' width='85%'> <mj-text align='center' font-size='12px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> <h3>Happy to help.</h3> Have any questions? We'd love to help. <br /> Just reply to this email and we'll get in touch! </mj-text> </mj-column> </mj-section> <mj-section padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-divider border-width='1px' border-color='#84bc00' border-style='dashed' /> <mj-text align='center' font-size='9px' font-family='open Sans Helvetica, Arial, sans-serif'> 2022 iUstaad.com | All rights reserved. <br /> <br /> Our mailing address is: <br /> 101, A2, IFZA, Dubai Silicon Oasis, Dubai, United Arab Emirates. <br /> <br /> Want to change how you receive these emails? <br /> You can <a href='{{Unsubscribe URL}}'>unsubscribe</a> here. </mj-text> </mj-column> </mj-section> </mj-body> </mjml>",
      },
      {
        headers: {
          Authorization:
            "Basic NzJiOGI1MDUtOGQ2YS00NmNmLTlkMzQtMTAyMjdkYmJjNjM5OjI4Mjc4YmYzLTc2NDMtNDE2Yi04ZWQxLWUzMzg4MDU1ODJlNg==",
        },
      }
    );
    console.log("response", response.data);
    return response.data.html;
  } catch (error) {
    console.log("Error in composePassResetTemplate: ", error);
  }
}
