
var getPosts = function() {
    var posts = [
      {
        id: 1,
        title: 'Desenvolvedor Web',
        image: 'desenv.jpg',
        description: 'Será Frustrado pro resto da vida | 9 anos | R$ 970,00',
        body: 'Vai Procurar algo melhor na boa'
      },
      {
        id: 2,
        title: 'Programador server side',
        image: 'serverside.jpg',
        description: 'Será o cansado da equipe  | 5 anos | R$ 1.000',        
        body: '62 anos de estudos, e ainda não compila sem erro'
      },
      {
        id: 3,
        title: 'Analista de TI ',
        image: 'analista.jpg',
        description: 'Será o cara da ti | 12 anos | R$ 2.700',
        body: 'caiu a net venha correndo'
      },
      {
        id: 4,
        title: 'Gerente',
        image: 'gerente.jpg',
        description: 'Será o FDP da equipe | 24 anos | R$ 3.500',
        body: 'Sera responsavel pelo desespero'
      },
    ];
  
    return posts;
  }
  
  module.exports = {
    getPosts: getPosts
  }