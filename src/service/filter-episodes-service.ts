import { repositoryPodcast } from "../repositories/podcasts-repositories"
import { PodcastTransferModel } from "../models/podcast-tranfermodel"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    // definir a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || ""    // http://localhost:3636/api/episode?p=flow
    const data = await repositoryPodcast(queryString)

    // verifico se tem conteúdo
    responseFormat.statusCode = data[0] ? StatusCode.OK : StatusCode.NoContent
    // if (data[0]) {
    //     responseFormat.statusCode = StatusCode.OK
    // } else {
    //     responseFormat.statusCode = StatusCode.NoContent
    // }

    responseFormat.body = data

    return responseFormat
}