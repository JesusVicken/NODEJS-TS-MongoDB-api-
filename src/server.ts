import fastify from "fastify";
import { routes } from "./router";
import cors from "@fastify/cors"
import { REPLServer } from "repl";


const app = fastify({ logger: true })

app.setErrorHandler((error, require, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {


    await app.register(cors, {
        origin: "http://localhost:5173", // Permite requisições apenas do seu frontend
        methods: ["GET", "POST", "PUT", "DELETE"], // Permite DELETE
        allowedHeaders: ["Content-Type"]
    });
    await app.register(routes);

    try {
        await app.listen({ port: 3333 })
    } catch (err) {
        process.exit(1)

    }
}

start();