import prisma from "@/lib/prisma"; 

export default async function getTickets(id:number) {
    const user = await prisma.ticket.findMany({
        where : { id: id}
    })
    return user;
}