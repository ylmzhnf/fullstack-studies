import prisma from "@/lib/prisma";

export default async function getCustomers(id: number) {
    const customer = await prisma.customer.findMany({
        where: { id: id }
    });
    return customer;
}
