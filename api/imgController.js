class ImgController {

  constructor() {
    this.foto = [
      {
        id: 1,
        url: "https://media3.giphy.com/media/3o6gEgqmj8VpFdMxY4/200.webp?cid=ecf05e47ainfryod3p3xctx351u1z00cuwzuz96bppe1ijmn&rid=200.webp&ct=g",
        alt: "Michael Jodan",
        description: "Gift do lendánrio Michael Jodan",
        comments: 10,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: true,
        likes: 20,
        userId: 1
      },
      {
        id: 2,
        url: "https://media0.giphy.com/media/uxTYtxv3Ezryg/200.webp?cid=ecf05e47ainfryod3p3xctx351u1z00cuwzuz96bppe1ijmn&rid=200.webp&ct=g",
        alt: "Michael Jodan",
        description: "Gift do lendário Michael Jodan",
        comments: 30,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: false,
        likes: 30,
        userId: 1
      },
      {
        id: 3,
        url: "https://media0.giphy.com/media/e5RONJDZLaIRR5itrT/200w.webp?cid=ecf05e47124k0udtb3v43x94xa1rdj84fug95ogd13zu49mj&rid=200w.webp&ct=g",
        alt: "Lebron James",
        description: "Gift do papai Lebron James",
        comments: 80,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: true,
        likes: 9,
        userId: 1
      },
      {
        id: 4,
        url: "https://media4.giphy.com/media/3oEdv9kR4Jsl05gS4w/200w.webp?cid=ecf05e47124k0udtb3v43x94xa1rdj84fug95ogd13zu49mj&rid=200w.webp&ct=g",
        alt: "Lebron James",
        description: "Gift do papai Lebron James",
        comments: 20,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: false,
        likes: 50,
        userId: 1
        
      },
      {
        id: 5,
        url: "https://media1.giphy.com/media/eqWdbfp9VGD4gwQrIK/giphy.gif?cid=ecf05e47vpbsaqt2ceh1a7c1e88vele41kda3g1owmfhpx2k&rid=giphy.gif&ct=g",
        alt: "Giannis Antetokounmpo",
        description: "Gift do Deus Grego",
        comments: 40,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        comments: 20,
        postDate: "2022/04/01",
        allowComments: true,
        likes: 11,
        userId: 1
      },
      {
        id: 6,
        url: "https://media2.giphy.com/media/3oAt2dA6LxMkRrGc0g/200.webp?cid=ecf05e47vpbsaqt2ceh1a7c1e88vele41kda3g1owmfhpx2k&rid=200.webp&ct=g",
        alt: "James Harden",
        description: "Gift do Barba James Haden",
        comments: 15,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: false,
        likes: 10,
        userId: 1
      },
      {
        id: 7,
        url: "https://media2.giphy.com/media/l0MYrguDYf6uvscak/giphy.webp?cid=ecf05e47vpbsaqt2ceh1a7c1e88vele41kda3g1owmfhpx2k&rid=giphy.webp&ct=g",
        alt: "Damian Lillard",
        description: "Gift do snipe americano Lillard",
        comments: 90,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: true,
        likes: 15,
        userId: 1
      },
      {
        id: 8,
        url: "https://media3.giphy.com/media/3o6gE08CvPHCg3eG2s/200.webp?cid=ecf05e47vpbsaqt2ceh1a7c1e88vele41kda3g1owmfhpx2k&rid=200.webp&ct=g",
        alt: "Michael Jordan",
        description: "Gift do Rei de todos",
        comments: 100,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: false,
        likes: 18,
        userId: 1
      },
      {
        id: 9,
        url: "https://media2.giphy.com/media/3o6gDTA8qvNp4RomIM/200.webp?cid=ecf05e47cifiznfr7uo0yhuk8nlihiyavfykay5hhaj5xr0s&rid=200.webp&ct=g",
        alt: "Michael Jodan",
        description: "Gift Não tem como parar o homem",
        comments: 8,
        comment:  {
          date: "2022/04/01",
          text: "Esse gif ficou muito legal!",
          userName: "Murilo",
        },
        postDate: "2022/04/01",
        allowComments: true,
        likes: 5,
        userId: 1
      },
    ];
  }

  listarImg() {
    return this.foto;
  }

  listarPorId(req, res) {
    let fotoConf;    
    this.foto.forEach((foto)=>{
      if(Number(foto.id) == Number(req.params.id)){
        return fotoConf = foto;
      }    
    })
    return fotoConf;
  }

  listarPorIdComments(req, res) {
    let comment = [];
    this.foto.forEach((foto) => {
      if(foto.id == Number(req.params.id)){
        comment.push(foto.comment)
      }
    })
    return comment;
  }
}

module.exports = ImgController;
