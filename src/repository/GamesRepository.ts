import { EntityRepository, Repository } from "typeorm";
import { Game } from "../entities/Games";

@EntityRepository(Game)
class GamesRepository extends Repository<Game> {}

export { GamesRepository }