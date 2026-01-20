import { BackButton } from "@/components/backButton";
import getCustomer from "@/lib/queries/getCustomers";
import getTickets from "@/lib/queries/getTickets";
import * as Sentry from "@sentry/nextjs"

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  let ticket = null;
  let customer = null;
  let errorMessage = null;

  try {
    const { customerId, ticketId } = await searchParams;

    if (!customer && !ticketId) {
      errorMessage = "Ticket ID or Customer ID required to load ticket form";
    } else if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        errorMessage = `Customer ID #${customerId} not found`;
      } else if (!customer.active) {
        errorMessage = `Customer ID #${customerId} is not active.`;
      }
    } else if (ticketId) {
      ticket = await getTickets(parseInt(ticketId));
      if (!ticket) {
        errorMessage = `Ticket ID #${ticketId} not found`;
      } else {
        customer = await getCustomer(ticket.customerId);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }

  if (errorMessage) {
    return (
      <>
        <h2 className="text-2xl mb-2">{errorMessage}</h2>
        <BackButton title="Go Back" variant="ghost" />
      </>
    )
  }

  if (ticket || customer) {
    // buraya <TicketFotm/> bileseni gelecek
    console.log("ticket: ", ticket)
    console.log("Customer : ", customer)
  }


  return (
    <div>Ticket Formu Burada Görüntülenecek</div>
  )
}
