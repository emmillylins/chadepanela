const items = [
    {
        id: 1,
        nome: "Jogo de pratos fundos",
        descricao: "Pra completar a coleção, muito obrigada",
        imagem: "https://images.tcdn.com.br/img/img_prod/768148/90_kit_6_pratos_fundo_porcelana_ryo_oxford_22_5_cm_maresia_branco_4137_6_8687eecc3f2642d9f53e3657d7e91c04.jpg",
        link: "https://www.amazon.com.br/dp/B0941QZBJL?_encoding=UTF8&psc=1&ref_=cm_sw_r_cp_ud_dp_929GGQ9XENJTX6VC24SY_1", 
        disponivel: true
    },
    {
        id: 2,
        nome: "Bowl de porcelana",
        descricao: "Tô afim de roubar uma sopinha de mainha",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhe1ezxcj5iu7a",
        link: "https://shopee.com.br/4-Unidades-de-Bowl-em-Porcelana-com-relevo-Matelass%C3%AA-380ml-i.405726648.22008452464?xptdk=8a5364eb-f320-4b0f-aaa4-ce517e1069e8", 
        disponivel: false
    },
    {
        id: 3,
        nome: "Potes Organizadores",
        descricao: "Acabar com aquelas formigas safadas",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljsidc8041oq80",
        link: "https://shopee.com.br/Kit-de-Potes-para-Cozinha-Dispensa-Acr%C3%ADlico-Tampa-com-Trava-Potes-Herm%C3%A9ticos-5-Pe%C3%A7as-Caneta-e-Etiqueta-i.317212231.22096193690?xptdk=a313ec8b-c2a5-4afb-9ee6-b5f11fa2bd17", 
        disponivel: false
    },
    {
        id: 4,
        nome: "Toalhas de banho",
        descricao: "Não vou ter mais desculpa pra não tomar banho :/",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lkcpxyknwte11a",
        link: "https://shopee.com.br/Kit-c-4-Toalhas-de-Banho-e-Rosto-Jogo-de-Toalhas-Grande-Grossa-100-Algod%C3%A3o-75cm-x-130cm-i.920653955.20198832873?sp_atk=2a1b6eda-5603-471c-baf4-78a571166185&xptdk=2a1b6eda-5603-471c-baf4-78a571166185", 
        disponivel: true
    },
    {
        id: 5,
        nome: "Escorredor De Louça",
        descricao: "ajuda na preguiça de enxugar e guardar",
        imagem: "https://down-br.img.susercontent.com/file/6e629cc891eb948e275aa3e38156eb6b",
        link: "https://shopee.com.br/Escorredor-De-Lou%C3%A7a-Cozinha-Prato-Duplo-Porta-Talheres-Preto-Metaltru-i.341754426.14089007380?xptdk=14b964cf-8e2a-4993-b864-096a13c761c5", 
        disponivel: false
    },
    {
        id: 6,
        nome: "Porta frios",
        descricao: "Bora comprar um queijo e um presunto, minha filha?",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhoqsfzaodvy8f",
        link: "https://shopee.com.br/Kit-Porta-Ovos-Geladeira-Com-Tampa-Porta-Frios-Acr%C3%ADlico-herm%C3%A9tico-Potes-Mantimentos-i.435948848.16644843819?xptdk=52ce8e77-9508-4d20-84b8-05ffe526df10", 
        disponivel: false
    },
    {
        id: 7,
        nome: "Jogo de copos",
        descricao: "Minhas visitas vão ter onde beber cerveja",
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7rblq-ll54fo6vk9bpa3",
        link: "https://shopee.com.br/6-Copos-California-Redondo-Vidro-Transparente-Mesa-450ml-i.480453261.22431387885", 
        disponivel: false
    },
    {
        id: 8,
        nome: "Flat Mop",
        descricao: "Vai ser bem mais fácil limpar o xixi de fu!!",
        imagem: "https://down-br.img.susercontent.com/file/br-11134201-23030-yhubus80t5nvb7",
        link: "https://shopee.com.br/Mop-Flat-Balde-6-litros-Com-2-Refis-Com-Cabo-Extensivel-Inox-Grande-i.545883024.23228106141?sp_atk=1553f851-b766-405b-afe6-aff366f639bc&xptdk=1553f851-b766-405b-afe6-aff366f639bc", 
        disponivel: false
    },
    {
        id: 9,
        nome: "Jogo de Lençol",
        descricao: "Tô usando o mesmo lençol há 3 meses",
        imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-wFhtSpSPm2DuBvhqmv13KN5QUESL6xyc0f3GqCM69pGN1hge",
        link: "https://www.amazon.com.br/Len%C3%A7ol-Casal-Pe%C3%A7as-Algod%C3%A3o-Escandinavo/dp/B08DNCQ6R6/ref=asc_df_B08DNCQ6R6/?tag=googleshopp00-20&linkCode=df0&hvadid=379720772128&hvpos=&hvnetw=g&hvrand=6817761256959427178&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-1597129983749&psc=1", 
        disponivel: true
    },
    {
        id: 10,
        nome: "Cuscuzeira",
        descricao: "Pra fazer um bom e velho amarelinho pra Fufu",
        imagem: "https://down-br.img.susercontent.com/file/fe96df889ae599e7184ce51c09094f01",
        link: "https://shopee.com.br/Cuscuzeiro-Individual-Mini-Polido-N%C2%BA-10-Fortlar-Aluminio-i.663505037.19343966515?xptdk=065dc442-4700-4f34-b5c5-caa998aec10b", 
        disponivel: false
    },
    {
        id: 11,
        nome: "Jogo de talheres",
        descricao: "Agora vou parar de roubar os talheres da Elógica",
        imagem: "https://static.ideallar7.com.br/public/ideallar7/imagens/produtos/jogo-de-talheres-branco-com-dourado-2235.jpg",
        link: "https://shopee.com.br/JOGO-DE-TALHERES-FAQUEIRO-TRAMONTINA-ORIGINAL-20-PE%C3%87AS-A%C3%87O-INOX-LEME-i.380160460.19797095545?sp_atk=a55187f2-cbec-49bf-83ff-28dac8ded7e3&xptdk=a55187f2-cbec-49bf-83ff-28dac8ded7e3", 
        disponivel: false
    },
    {
        id: 12,
        nome: "Liquidificador",
        descricao: "Vai ter batida com vodka e ksuki :D",
        imagem: "https://lebiscuit.vtexassets.com/arquivos/ids/2880903/LIQUIDIFICADOR-MONDIAL-L99FB-220V.jpg?v=638141414109470000",
        link: "https://www.lebiscuit.com.br/liquidificador-mondial-l99fb-220v-5117041/p?idsku=2147299611&utm_source=google&utm_medium=cpc&utm_campaign=GOOGLE-PMAX_GERAL_NORDESTE_CONV&utm_content=NA_&utm_term=GERAL&utm_source_platform=&utm_creative_format=NA&utm_marketing_tatic=NA&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBT49QLaezlOZtnWgE7VMvETz2zNldBH31Slhaf46we7Huj67zyXFSxoCk7cQAvD_BwE", 
        disponivel: false
    },
    {
        id: 13,
        nome: "Escorredor",
        descricao: "Emmy sem macarrão fica mau-humorada",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lk9mzphnmymh6a",
        link: "https://shopee.com.br/Escorredor-De-Arroz-E-Massas-Macarr%C3%A3o-Em-A%C3%A7o-Inox-Com-Al%C3%A7a-24cm-i.316898520.19215824522?xptdk=6863cd06-14d0-4a07-a979-12065c943abb", 
        disponivel: false
    },
    {
        id: 14,
        nome: "Jarra de suco",
        descricao: "Pras minhas visitas tomarem um suquinho",
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7qvg3-lg5ivmyq11libd",
        link: "https://shopee.com.br/Jarra-Borossilicato-Com-Tampa-Al%C3%A7a-Capacidade-De-1-3l-Prata-i.297187377.22727792625?xptdk=a4314968-d8ae-41f7-8d8c-892f334fc249", 
        disponivel: false
    },
    {
        id: 15,
        nome: "Tapete de cozinha",
        descricao: "Pra enxugar os pezinhos das visitas né",
        imagem: "https://down-br.img.susercontent.com/file/br-11134201-23010-u15wh28qnpmvc5",
        link: "https://shopee.com.br/Jogo-de-Passadeira-de-Tear-Tapete-de-Cozinha-3-Pe%C3%A7as-Algod%C3%A3o-i.789131072.16078009518?sp_atk=0c89d2dd-3520-401c-a2ef-0e352aca7817&xptdk=0c89d2dd-3520-401c-a2ef-0e352aca7817", 
        disponivel: false
    },
    {
        id: 16,
        nome: "Jogo de pratos rasos",
        descricao: "São tão lindos que vou comer na mão",
        imagem: "https://m.media-amazon.com/images/I/61KklsQd3iL._AC_SL1000_.jpg",
        link: "https://www.amazon.com.br/Conjunto-Pratos-Rasos-5cm-Maresia/dp/B09418784M/ref=d_pd_sim_sccl_3_1/131-7701125-8201652?pd_rd_w=ANym7&content-id=amzn1.sym.1175145d-3153-4798-9db2-723d7b5b82cb&pf_rd_p=1175145d-3153-4798-9db2-723d7b5b82cb&pf_rd_r=3Z7ZAKZDKMG1VMGXV7MC&pd_rd_wg=D9ALc&pd_rd_r=1baad68e-0dda-4fe5-bf1f-239d3b968727&pd_rd_i=B09418784M&psc=1", 
        disponivel: false
    },
    {
        id: 17,
        nome: "Manta pra sofá",
        descricao: "Gostei que só da cor Tiffany",
        imagem: "https://down-br.img.susercontent.com/file/d67c90cf960ce1b4ede53de1fdfd3180",
        link: "https://shopee.com.br/Manta-Pra-Sof%C3%A1-Gigantes-Tipo-Capa-100-Algod%C3%A3o-com-N%C3%B3-nas-pontas-*Promo%C3%A7%C3%A3o*-i.332667864.9715263398?xptdk=8b9d9cab-542a-41b0-a923-3365c085608e", 
        disponivel: false
    },
    {
        id: 18,
        nome: "Kit de banheiro",
        descricao: "Sempre quis ter um desses",
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7qvec-lf08kchlwj0622",
        link: "https://shopee.com.br/Cj-3Pc-P-Banheiro-De-Cer%C3%A2mica-Londres-Branco-E-Ros%C3%A9-i.421955250.18577242433?sp_atk=a9bf0482-4031-4fef-bb72-6bc8c058e7fb&xptdk=a9bf0482-4031-4fef-bb72-6bc8c058e7fb", 
        disponivel: true
    },
    {
        id: 19,
        nome: "Suporte de banheiro",
        descricao: "Pra colocar um xampu, uma saboneteira...",
        imagem: "https://m.media-amazon.com/images/I/61WyYfXxlTL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.com.br/Porta-Shampoo-Branco-Encaixar-Stolf/dp/B07GLVDG5W/ref=asc_df_B07GLVDG5W/?tag=googleshopp00-20&linkCode=df0&hvadid=379791908525&hvpos=&hvnetw=g&hvrand=16752600195553410408&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-1648355215159&th=1", 
        disponivel: false
    },
    {
        id: 20,
        nome: "Lixeira",
        descricao: "Com tampa por favor, senão Fu age",
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-22110-8iyns92gqrjvc4",
        link: "https://shopee.com.br/Lixo-Lixeira-Grande-Resistente-Refor%C3%A7ada-Tampa-Escrit%C3%B3rio-Cozinha-Banheiro-Quarto-Sala-Trabalho-Pl%C3%A1stico-c-Pedal-15-Litros-i.388832051.5584731344?sp_atk=9c409b35-82e4-4127-aa2d-569860667551&xptdk=9c409b35-82e4-4127-aa2d-569860667551", 
        disponivel: true
    },
	 {
        id: 21,
        nome: "Panos de prato",
        descricao: "Pra enxugar meus pratinhos e copinhos né",
        imagem: "https://down-br.img.susercontent.com/file/22d9d645eb9f433fee4de06820d564b6",
        link: "https://shopee.com.br/Kit-5-Panos-De-Prato-Promo%C3%A7%C3%A3o-i.293509643.5146537596?sp_atk=8d70d822-0ee3-48b6-94c7-f010fbdbfc48&xptdk=8d70d822-0ee3-48b6-94c7-f010fbdbfc48", 
        disponivel: false
    },
     {
        id: 22,
        nome: "Kit de panos de chão",
        descricao: "muito necessário, principalmente tendo Fu",
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lga5rs39fcjqa5",
        link: "https://shopee.com.br/Kit-4-Super-Panos-De-Ch%C3%A3o-Grandes-Em-Microfibra-Pan%C3%A3o-80x50-i.398603419.22695608048?sp_atk=cc8222ad-ef42-4045-8b27-4e26a5c12d04&xptdk=cc8222ad-ef42-4045-8b27-4e26a5c12d04", 
        disponivel: true
    }
];

// Separa os itens em disponíveis e indisponíveis
const itensDisponiveis = items.filter(item => item.disponivel);
const itensIndisponiveis = items.filter(item => !item.disponivel);

// Combina os arrays para que os itens indisponíveis apareçam no final
const itensOrdenados = [...itensDisponiveis, ...itensIndisponiveis];
const modal = document.getElementById("myModal");
const modalClose = document.getElementById("modalClose");
const btnClose = document.getElementById("btnClose");
const nomeCompradorInput = document.getElementById("nomeCompradorInput");

const itemList = document.getElementById("item-list");

itensOrdenados.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = item.imagem;
    link.appendChild(img);
    itemDiv.appendChild(link);

    const infoDiv = document.createElement("div");
    const itemName = document.createElement("h3");
    const nomeLink = document.createElement("a");
    nomeLink.href = item.link;
    nomeLink.target = "_blank";
    nomeLink.textContent = item.nome;
    itemName.appendChild(nomeLink);
    infoDiv.appendChild(itemName);

    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.descricao;
    infoDiv.appendChild(itemDesc);

    itemDiv.appendChild(infoDiv);

	const buyButton = document.createElement("button");
    buyButton.textContent = "Escolher";
    
    // Verifique se o item está disponível e defina o botão como desabilitado, se necessário
    if (!item.disponivel) {
        itemDiv.classList.add("disabled");
        buyButton.disabled = true;
    } 
	
	// Limpe o campo de entrada de nome
    nomeCompradorInput.value = "";
    
    buyButton.addEventListener("click", () => {
        if (item.disponivel) {
            $('#myModal').modal('show'); // Abre o modal usando jQuery
            confirmarNomeBtn.addEventListener("click", () => {
                const nomeComprador = nomeCompradorInput.value;
                if (nomeComprador) {
                    item.disponivel = false;
                    itemDiv.classList.add("disabled");
                    buyButton.disabled = true;
                    $('#myModal').modal('hide');
                    enviarEmail(item, nomeComprador);
                } else {
                    alert("Por favor, insira seu nome.");
                }
            });
        } else {
            alert("Este item já foi comprado ou está indisponível.");
        }
    }); 
    
    modalClose.addEventListener("click", () => {
        $('#myModal').modal('hide');
    }); 
    btnClose.addEventListener("click", () => {
        $('#myModal').modal('hide');
    }); 

    itemDiv.appendChild(buyButton);
    itemList.appendChild(itemDiv);
});

function enviarEmail(item, nomeComprador) {
    emailjs.send("service_fhxyl6l", "template_e9a8mi9", {
        subject: item.nome + ' por ' + nomeComprador,
        message: `id: ${item.id}\nnome do produto: ${item.nome}\ndescrição do produto: ${item.descricao}\nlink: ${item.link}`
    }).then(
        function (response) {
            console.log("Email enviado com sucesso!", response);
        },
        function (error) {
            console.error("Erro ao enviar o email:", error);
        }
    );
}
