# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes epsódio podcasts separados por categorias

### Domínio 
Podcasts feitos em vídeos

### Features
 - Listar os epsódios podcasts em sessões de categorias
   - [saúde, bodybuilder, mentalidade, humor]
 - Filtrar epsódios por nome de podcasts

 ## Como 


### Features: 
  Listar os epsódios podcasts em seções de categorias 

### Como vou implementar: 
 GET: retorna lista de episódios
 responde: 
  ``` 
  js
  [ 
      {
        pocastName: "flow",
        epsodio: "CBUM - #319",
        videoId: "w0S7nMD1J",
        cover: "https://i.ytimg.com/vi/w0S7nMD1J-I/hqdefault.jpg",
        link: "https://www.youtube.com/live/w0S7nMD1J-I?si=FZNq2OldAWffaeau", 
        category: ["saúde", "esporte", "bodybuilder"]
      }, 
      {
        pocastName: "flow",
        epsodio: "Rubbens Barrichello - Flow #339",
        videoId: "w0S7nMD1J",
        cover: "https://i.ytimg.com/vi/w0S7nMD1J-I/hqdefault.jpg",
        link: "https://www.youtube.com/live/w0S7nMD1J-I?si=FZNq2OldAWffaeau", 
        category: ["esporte", "corrida"]
      },
  ]
  ```

  GET: retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast