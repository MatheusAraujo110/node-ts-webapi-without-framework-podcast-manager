import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../service/list-episodes-service"
import { serviceFilterEpisodes } from "../service/filter-episodes-service"
import { PodcastTransferModel } from "../models/podcast-tranfermodel";

const DEFAULT_CONTENT = "'Content-Type': ContentType.JSON"

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: PodcastTransferModel = await serviceListEpisodes()

    response.writeHead(content.statusCode, { DEFAULT_CONTENT })
    response.write(JSON.stringify(content.body))
    response.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { DEFAULT_CONTENT })
    res.write(JSON.stringify(content.body))
    res.end()
}