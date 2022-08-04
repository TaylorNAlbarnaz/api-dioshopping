import { Request, Response } from "express";
import { ListGameService } from "../services/ListGameService";

class ListGameController {
    async handle(request: Request, response: Response){
        const listGameService = new ListGameService();

        const allGames = await listGameService.execute();

        return response.json(allGames)
    }
}

export { ListGameController }