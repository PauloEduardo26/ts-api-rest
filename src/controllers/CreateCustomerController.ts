import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const { name, email } = request.body as { name: string, email: string }
        console.log(name,email);
        

        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({ name, email })

        reply.send(customer)
    }
}

export { CreateCustomerController }