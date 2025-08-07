# 🎧 Podcast Manager

Um aplicativo no estilo **Netflix**, focado em **centralizar episódios de podcasts em vídeo**, organizados por **categorias** e com opção de filtro por nome.

## 📚 Descrição

O **Podcast Manager** é uma aplicação que organiza episódios de podcasts (em vídeo) em seções por categorias, permitindo ao usuário visualizar e filtrar episódios com facilidade.

## 🌐 Domínio

O projeto é voltado exclusivamente para **podcasts em vídeo**, como os publicados no YouTube.

## ✨ Funcionalidades

- 📂 Listar episódios de podcasts por **categorias**:
  - Exemplos: `saúde`, `bodybuilder`, `mentalidade`, `humor`, `esporte`, `corrida` etc.
- 🔎 Filtrar episódios por **nome do podcast** (ex: `Flow`, `PodPah`, etc).

## 🚀 Rotas da API

### ✅ Listar todos os episódios

`GET /episodes`

#### Exemplo de resposta:

```js
[
  {
    podcastName: "Flow",
    epsodio: "CBUM - #319",
    videoId: "w0S7nMD1J",
    cover: "https://i.ytimg.com/vi/w0S7nMD1J-I/hqdefault.jpg",
    link: "https://www.youtube.com/live/w0S7nMD1J-I?si=FZNq2OldAWffaeau", 
    category: ["saúde", "esporte", "bodybuilder"]
  }, 
  {
    podcastName: "Flow",
    epsodio: "Rubens Barrichello - Flow #339",
    videoId: "w0S7nMD1J",
    cover: "https://i.ytimg.com/vi/w0S7nMD1J-I/hqdefault.jpg",
    link: "https://www.youtube.com/live/w0S7nMD1J-I?si=FZNq2OldAWffaeau", 
    category: ["esporte", "corrida"]
  }
]
