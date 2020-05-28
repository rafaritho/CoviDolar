# COVIDolar 

## Estrutura do repositório:

```
├── public                                  >> Pasta com informações da página, inicializa a view root no index.html
├── src                                     >> Source do projeto 
    └──  api                                
       └──  index.js                        >> Inicializa as apis utilizadas com alguns metódos importantes
       
    └──  components                         >> Estrutura os componentes de acordo com os dados da API
      ├── cards                             
      ├── chart
      ├── countrypicker
      └── index.js                          >> Inicializa os componentes a serem utilizados na página 
      
    └──  images                             >> Imagens utilizadas na interface 
    └──  webscraping                        >> Pasta responsável pelo webscraping para obtenção de algumas informações 
    └──  App.js                             >> Arquivo principal responsável pela montagem da página principal e do aplicativo
├── README.md

```

## Nosso site: https://covidolar.netlify.app/
### Imagens:

![image](https://i.imgur.com/yZryLqP.png)
![image](https://i.imgur.com/cKyYkXv.png)

### APIs utilizadas: 
https://covid19.mathdro.id/api
https://docs.awesomeapi.com.br/api-de-moedas

### Setup para rodar localmente:
- run ```npm i && npm start```
