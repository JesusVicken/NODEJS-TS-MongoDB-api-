import prismaClient from "../prisma";

class ListCustomersService {
    async execute() {
        const costumers = await prismaClient.customer.findMany()

        return costumers;

    }

}

export { ListCustomersService };