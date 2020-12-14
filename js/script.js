

$(document).ready(
  
  $.get("http://www.mocky.io/v2/5d6fb6b1310000f89166087b", function(data){

    let vagas;
    vagas = data.vagas;

    let conteudo = '';

    vagas.forEach(element => { 
      conteudo = conteudo + ' <div class=link_vaga> <div class=bloco_flutante_esquerdo_vagas><a href="'+element.link+'">'+element.cargo+'</a></div> ';
      if(element.localizacao){
       conteudo = conteudo + ' <div class=bloco_flutante_direito_vagas>'+element.localizacao.bairro+' - '+element.localizacao.cidade+' - '+element.localizacao.pais + '</div>';
      } else{
        conteudo = conteudo + ' <div class=bloco_flutante_direito_vagas> Remoto </div>';
      }
      conteudo = conteudo + '</div>';

    });

     
    $(".sessao_vaga").html(conteudo);
      
    $(".link_vaga").on("mouseenter", (elem)=>{
      let img = elem.currentTarget; 
      $(img).css("font-size", 24+"px");
    })
    
    $(".link_vaga").on("mouseleave",(elem)=>{
      let img = elem.currentTarget; 
      $(img).css("font-size", 22+"px");
    })


  })

);

