import axios from "axios";

/**
 *
 * @description This function is used to convert the MJML into a HTML and send it to the user's, the email that is sent to the user when they checkout, the email is sent from the email address that is configured in the mailService, sendCheckoutEmail function.
 * @param {string} id - The tracking number of the order.
 * @returns {string} - The HTML that is sent to the user's email.
 */
export async function composeCheckoutEmail(id) {
  try {
    const response = await axios.post(
      "https://api.mjml.io/v1/render",
      {
        mjml: `<mjml> <mj-body background-color='#f7f7f7'> <mj-section padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-image align='center' padding='25px' src='https://staging.iustaad.com/wp-content/uploads/2018/07/Logo-Green-1.png' width='150px'></mj-image> </mj-column> </mj-section> <mj-section border-radius='30px' background-color='#fcfff5' padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-text align='center' font-size='20px' font-weight='600' font-family='openSansHelvetica,Arial,sans-serif' padding-left='25px' padding-right='25px'><span>Order has been placed🎉</span></mj-text> <mj-text align='left' font-size='14px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> <h4>Hi {{$user->name}}👋,</h4> <p> We have received your order. We will send you an email when your order is shipped. You can also check your order status on click of the button below. </p> </mj-text> <mj-button align='center' font-size='14px' background-color='#84bc00' border-radius='10px' color='#fff' font-family='open Sans Helvetica, Arial, sans-serif' href='${process.env.FRONTEND_URL}/order/${id}'> View Order Status &rarr; </mj-button> <mj-text align='left' font-size='14px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> Thanks, <br /> The iUstaad Team </mj-text> </mj-column> </mj-section> <mj-section> <mj-column> <mj-social icon-size='25px' mode='horizontal'> <mj-social-element name='facebook' href='https://www.facebook.com/free.taleem'></mj-social-element> <mj-social-element name='pinterest' href='https://www.pinterest.com/'></mj-social-element> <mj-social-element name='youtube' href='https://www.youtube.com/user/freeTaleem'></mj-social-element> </mj-social> </mj-column> </mj-section> <mj-section border-radius='30px' background-color='#fcfff5'> <mj-column vertical-align='middle' width='85%'> <mj-text align='center' font-size='12px' font-family='open Sans Helvetica, Arial, sans-serif' padding-left='25px' padding-right='25px'> <h3>Happy to help.</h3> Have any questions? We'd love to help. <br /> Just reply to this email and we'll get in touch! </mj-text> </mj-column> </mj-section> <mj-section padding-bottom='20px' padding-top='20px'> <mj-column vertical-align='middle' width='85%'> <mj-divider border-width='1px' border-color='#84bc00' border-style='dashed' /> <mj-text align='center' font-size='9px' font-family='open Sans Helvetica, Arial, sans-serif'> 2022 iUstaad.com | All rights reserved. <br /> <br /> Our mailing address is: <br /> 101, A2, IFZA, Dubai Silicon Oasis, Dubai, United Arab Emirates. <br /> <br /> Want to change how you receive these emails? <br /> You can <a href='{{Unsubscribe URL}}'>unsubscribe</a> here. </mj-text> </mj-column> </mj-section> </mj-body> </mjml>`,
      },
      {
        headers: {
          Authorization:
            "Basic NzJiOGI1MDUtOGQ2YS00NmNmLTlkMzQtMTAyMjdkYmJjNjM5OjI4Mjc4YmYzLTc2NDMtNDE2Yi04ZWQxLWUzMzg4MDU1ODJlNg==",
        },
      }
    );
    // console.log("response", response.data);
    return response.data.html;
  } catch (error) {
    console.log(error);
  }
}
