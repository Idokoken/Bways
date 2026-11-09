import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const id = React.useId();
  return (
    <div className="px-5 md:px-20 my-10">
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          >
            <Typography component="span">
              1. How do I create an account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Click on the Sign Up button, provide the required information, and
              follow the instructions to create your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              2. How do I place an order?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Browse our products, select the items you want, add them to your
              cart, and proceed to checkout to complete your order.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              3. What payment methods do you accept?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We accept available payment options displayed at checkout,
              including bank transfers, debit cards, and other supported payment
              methods.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">4. Can I track my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. Once your order has been processed and dispatched, you can
              track its delivery status through your account
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              5. How long does delivery take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Delivery times depend on your location and the availability of the
              products. You will receive an estimated delivery timeframe when
              placing your order.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">6. Can I cancel my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Order cancellation depends on the order's current status. Please
              contact our support team as soon as possible if you wish to
              cancel.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              7. Can I return or exchange a product?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, eligible products can be returned or exchanged according to
              our return and exchange policy
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              8. What should I do if I receive a damaged or incorrect item?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please contact our customer support team with your order details
              and photos of the item so we can assist you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              9. Is it safe to make payments on your platform?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. We use secure payment processing systems to help protect your
              payment information and transactions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              10. Do I need an account to make a purchase?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Depending on our platform's settings, you may be able to check out
              as a guest or create an account for a better shopping experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              11. How do I contact customer support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can reach our support team through the Contact Us page, email,
              or available customer service channels.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              12. What happens if my payment is successful but my order is not
              confirmed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please contact our support team with your payment reference and
              order details so we can investigate and assist you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              13. Can I change my delivery address after placing an order?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please contact customer support immediately. Address changes may
              be possible if your order has not yet been dispatched.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              14. How do I reset my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Click on Forgot Password on the login page and follow the
              instructions sent to your registered email address
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              15. Do you offer discounts or promotions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. We occasionally offer special discounts and promotional
              deals. Check our website for current offers.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
