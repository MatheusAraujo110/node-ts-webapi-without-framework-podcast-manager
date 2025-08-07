import { PodcastTransferModel } from "../models/podcast-tranfermodel";
import { repositoryPodcast } from "../repositories/podcasts-repositories";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    // define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    // busco dados
    const data = await repositoryPodcast()

    // verifico o tipo de responta
    responseFormat = {
        statusCode: data[0] ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}