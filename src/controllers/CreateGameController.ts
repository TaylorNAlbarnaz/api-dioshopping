import { Request, Response } from "express";
import { CreateGameService } from "../services/CreateGameService";

class CreateGameController{
    async handle(request: Request, response: Response){
        const { name, release_date, cover } = request.body;

        const createGameService = new CreateGameService();

        const newMessage = await createGameService.execute({ name, release_date, cover});

        return response.json(newMessage);
    }
}

export { CreateGameController }