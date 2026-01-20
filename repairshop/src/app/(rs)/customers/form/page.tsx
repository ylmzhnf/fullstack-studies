import { BackButton } from "@/components/backButton";
import getCustomer from "@/lib/queries/getCustomers";
import * as Sentry from "@sentry/nextjs"

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { customerId } = await searchParams;

  let customer = null;
  let errorMessage = null;

  try {
    if (customerId) {
      customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        errorMessage = `Customer ID #${customerId} not found`;
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
  console.log(customer);


  // hata yoksa ve musteri varsa formu goster
  //eger ID yoksa yeni musteri formu goster


  return <div>Yeni Müşteri Formu</div>
}
