import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id || id.trim() === "") {
            throw new Error("ID inválido ou não fornecido.");
        }

        try {
            const findCustomer = await prismaClient.customer.findUnique({
                where: { id },
            });

            if (!findCustomer) {
                throw new Error("Cliente não encontrado.");
            }

            await prismaClient.customer.delete({
                where: { id },
            });

            return { message: "Cliente deletado com sucesso." };
        } catch (error: any) {
            throw new Error(error.message || "Erro ao deletar cliente.");
        }
    }
}

export { DeleteCustomerService };
