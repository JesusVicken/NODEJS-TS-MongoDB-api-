import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const listCustomerService = new ListCustomersService(); // Corrigido para instanciar o serviço correto
            const customers = await listCustomerService.execute(); // Corrigido `await`

            return reply.send(customers); // Retornando a resposta corretamente
        } catch (error) {
            return reply.status(500).send({ error: "Erro ao listar clientes" });
        }
    }
}

export { ListCustomersController };
