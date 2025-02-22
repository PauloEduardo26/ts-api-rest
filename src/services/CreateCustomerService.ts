import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps){

        if(!email || !name){ throw new Error("preencha todos os campos") }

        const customer = await prismaClient.customer.create({
            data:{
                name, 
                email,
                status: true
            }
        })

        return customer
    }
}

export {CreateCustomerService}