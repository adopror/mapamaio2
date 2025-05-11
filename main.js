
var map = L.map('map').setView([42.8804219,-8.5458608]
    , 8);


   // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //  maxZoom: 19,
        //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //}).addTo(map);-->
    let opcionesP=document.querySelector("#opcionesSelect");
    let forEachFeature=poboacionQuantil;
    let myStyle=poboacionStyle;
    let legend = L.control({position: "topleft"});
    forEachFeature=poboacionQuantil;
    myStyle=poboacionStyle;
    geojson=L.geoJSON(finalJson,
    {
        style:myStyle,
        onEachFeature:forEachFeature
    
    });
    geojson.addTo(map);
    legend.remove();
    legend = L.control({position: "topleft"});
    legend.onAdd= function(map)
    {
        let div=L.DomUtil.create("div","legend");
        div.innerHTML='<br><b>Poboacion Municipal </b><br>';
        for(let i= Pob.length-1;i>0;i--)
        {
            div.innerHTML +=
            '<br> <i style="background-color:'+colors[i-1] +'"></i>' +
            Pob[i-1]+'--'+Pob[i] + '<br>';
        };
        return div;
    }
    legend.addTo(map);

    
    opcionesP.addEventListener("change",(seleccion) =>
     {
        if(seleccion.target.value=="Pob") 
        {
            forEachFeature=poboacionQuantil;
            myStyle=poboacionStyle;
            geojson=L.geoJSON(finalJson,
            {
                style:myStyle,
                onEachFeature:forEachFeature
            
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Poboacion Municipal </b><br>';
                for(let i= Pob.length-1;i>0;i--)
                {
                    div.innerHTML +=
                    '<br> <i style="background-color:'+colors[i-1] +'"></i>' +
                    Pob[i-1]+'--'+Pob[i] + '<br>';
                };
                return div;
            }
            legend.addTo(map);
    
        }

        else if(seleccion.target.value=="Den") 
        {
            console.log("Den")
            forEachFeature=densidadeQuantil;
            myStyle=getDensidadeStyle;
            geojson=L.geoJSON(finalJson,
            {
            style:myStyle,
            onEachFeature:forEachFeature
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Densidades  poblacionais </b><br>';
                for(let i= denP.length-1;i>0;i--)
                {
                    div.innerHTML +=
                    '<br> <i style="background-color:'+colors[i-1] +'"></i>' +
                    denP[i-1]+'--'+denP[i] + '<br>';
                };
                return div;
                }
            legend.addTo(map);
    
        }
        else if(seleccion.target.value=="Var") 

        {
            console.log("variacion")
            forEachFeature=variacion;
            myStyle=variacionStyle;
            geojson=L.geoJSON(finalJson,
            {
                style:myStyle,
                onEachFeature:forEachFeature
            
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Variación poboacional 2011-2021 </b><br>';
                
                    div.innerHTML +=
                    '<br> <i style="background-color:'+colors[6] +'"></i>' +
                    "variación positiva" + '<br>'+ '<br> <i style="background-color:'+colors[0] +'"></i>' +
                    "variación negativa" + '<br>';

           
             return div;
            };
        
           legend.addTo(map);
    
        }
        else if(seleccion.target.value=="Rec") 
        {
            forEachFeature=recambio;
            myStyle=getRecambioStyle;
            geojson=L.geoJSON(finalJson,
            {
                style:myStyle,
                onEachFeature:forEachFeature
            
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Taxa de recambio de 60-64 anos sobre 15-19 anos</b><br>';
                
                
                div.innerHTML +=
                    '<br> <i style="background-color:'+colors[7] +'"></i>' 
                     + 'Do 100% ao 200%'+'<br>';
                div.innerHTML +=
                        '<br> <i style="background-color:'+colors[colors.length-4] +'"></i>' 

                         + 'Do 200% ao 300%'+'<br>';
                div.innerHTML +=
                            '<br> <i style="background-color:'+colors[0] +'"></i>' 
                             + 'Máis do 300%'+'<br>';
                           
            return div;
        }
        
           legend.addTo(map);
    
        }
        
        else if(seleccion.target.value=="Mor") 

        {
            forEachFeature=mortalidade;
            myStyle=mortalidadeStyle;
            geojson=L.geoJSON(finalJson,
            {
                style:myStyle,
                onEachFeature:forEachFeature
            
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Taxa de Mortalidade 2023 </b><br>';
                for(let i=0;i<colors.length-1;i++)
                    {
                        div.innerHTML +=
                        '<br> <i style="background-color:'+colors[colors.length - i-1] +'"></i>' +
                        MorQ[i]+'--'+MorQ[i+1] + '<br>' 
                    };
                
                    
           
             return div;
            };
        
           legend.addTo(map);
    
        }
        else if(seleccion.target.value=="Nat") 

        {
            forEachFeature=natalidade;
            myStyle=natalidadeStyle;
            geojson=L.geoJSON(finalJson,
            {
                style:myStyle,
                onEachFeature:forEachFeature
            
            });
            geojson.addTo(map);
            legend.remove();
            legend = L.control({position: "topleft"});
            legend.onAdd= function(map)
            {
                let div=L.DomUtil.create("div","legend");
                div.innerHTML='<br><b>Taxa bruta de Natalidade</b><br>';
                div.innerHTML +=
                    '<br> <i style="background-color:'+colors[7] +'"></i>' 
                     + 'Natalidade Maior so 5%'+'<br>';
                div.innerHTML +=
                        '<br> <i style="background-color:'+colors[colors.length-4] +'"></i>' 

                         + 'Natalidade entre o 0% e o 5%'+'<br>';
                div.innerHTML +=
                            '<br> <i style="background-color:'+colors[0] +'"></i>' 
                             + 'Natalidade Nula'+'<br>';
                
                   // div.innerHTML +=
                    //'<br> <i style="background-color:'+colors[colors.length-1] + '"></i>' + '</br>'
                    //"Natalidade maior que o 5%" + '<br>'+ '<br> <i style="background-color:'+colors[colors.length-4] +'"></i>' +
                    //"Natalidade entre 0 e 5%" + '<br>' + '</br>'+'<i style="background-color:'+colors[0] +'"></i>' +
                    //"Natalidade  nula"; 
                    
           
             return div;
            };
        
           legend.addTo(map);
    
        }
        else if(seleccion.target.value=="ResN") 

            {
                forEachFeature=nenos;
                myStyle=nenosStyle;
                geojson=L.geoJSON(finalJson,
                {
                    style:myStyle,
                    onEachFeature:forEachFeature
                
                });
                geojson.addTo(map);
                legend.remove();
                legend = L.control({position: "topleft"});
                legend.onAdd= function(map)
                {
                    let div=L.DomUtil.create("div","legend");
                    div.innerHTML='<br><b>Casas Niño 2023 </b><br>';
                    
                        div.innerHTML +=
                        '<br> <i style="background-color:'+colors[7] +'"></i>' +
                        "Concellos con casas Niños" + '<br>'+ '<br> <i style="background-color:'+colors[0] +'"></i>' +
                        "Outros" + '<br>';
    
               
                 return div;
                };
            
               legend.addTo(map);
        
            }
            else if(seleccion.target.value=="ResM") 
    
            {
                forEachFeature=maiores;
                myStyle=maioresStyle;
                geojson=L.geoJSON(finalJson,
                {
                    style:myStyle,
                    onEachFeature:forEachFeature
                
                });
                geojson.addTo(map);
                legend.remove();
                legend = L.control({position: "topleft"});
                legend.onAdd= function(map)
                {
                    let div=L.DomUtil.create("div","legend");
                    div.innerHTML='<br><b>Casas de Maiores</b><br>';
                    
                        div.innerHTML +=
                        '<br> <i style="background-color:'+colors[7] +'"></i>' +
                        "Concellos con Casas de Maiores" + '<br>'+ '<br> <i style="background-color:'+colors[0] +'"></i>' +
                        "Outros" + '<br>';
    
               
                 return div;
                };
            
               legend.addTo(map);
        
            }
            else if(seleccion.target.value=="Fec") 

                {
                    forEachFeature=fecundidade;
                    myStyle=fecundidadeStyle;
                    geojson=L.geoJSON(finalJson,
                    {
                        style:myStyle,
                        onEachFeature:forEachFeature
                    
                    });
                    geojson.addTo(map);
                    legend.remove();
                    legend = L.control({position: "topleft"});
                    legend.onAdd= function(map)
                    {
                        let div=L.DomUtil.create("div","legend");
                        div.innerHTML='<br><b>Índice sintético de Fecundidade</b><br>';
                        
                            div.innerHTML +=
                            '<br> <i style="background-color:'+colors[6] +'"></i>' +
                            "Fecundidade maior que o 1%" + '<br>'+ '<br> <i style="background-color:'+colors[colors.length-3] +'"></i>' +
                            "Fecundidade entre 0 e 1%" + '<br>' + '<br>' +'<i style="background-color:'+colors[0] +'"></i>' +
                            "Fecundidade  nula" 
                            
                   
                     return div;
                    };
                
                   legend.addTo(map);
            
                }

            else if(seleccion.target.value=="ResM") 
    
                {
                    forEachFeature=maiores;
                    myStyle=maioresStyle;
                    geojson=L.geoJSON(finalJson,
                    {
                        style:myStyle,
                        onEachFeature:forEachFeature
                    
                    });
                    geojson.addTo(map);
                    legend.remove();
                    legend = L.control({position: "topleft"});
                    legend.onAdd= function(map)
                    {
                        let div=L.DomUtil.create("div","legend");
                        div.innerHTML='<br><b>Casas de Maiores</b><br>';
                        
                            div.innerHTML +=
                            '<br> <i style="background-color:'+colors[7] +'"></i>' +
                            "Concellos con Casas de Maiores" + '<br>'+ '<br> <i style="background-color:'+colors[0] +'"></i>' +
                            "Outros" + '<br>';
        
                   
                     return div;
                    };
                
                   legend.addTo(map);
            
                }
                else if(seleccion.target.value=="Masc") 
    
                    {
                        forEachFeature=masculinidade;
                        myStyle=masculinidadeStyle;
                        geojson=L.geoJSON(finalJson,
                        {
                            style:myStyle,
                            onEachFeature:forEachFeature
                        
                        });
                        geojson.addTo(map);
                        legend.remove();
                        legend = L.control({position: "topleft"});
                        legend.onAdd= function(map)
                        {
                            let div=L.DomUtil.create("div","legend");
                            div.innerHTML='<br><b>Índice de Masculinidade</b><br>';
                            
                                div.innerHTML +=
                                '<br> <i style="background-color:'+colors[7] +'"></i>' +
                                "Maioria Homes" + '<br>'+ '<br> '+'<i style="background-color:'+colors[0] +'"></i>' +
                                "Maioria Mulleres" 
                                
                       
                         return div;
                        };
                    
                       legend.addTo(map);
                
                    }  
                    
                else if(seleccion.target.value=="SaldoT") 
               {
                            forEachFeature=saldoTotal;
                            myStyle=saldoTotalStyle;
                            geojson=L.geoJSON(finalJson,
                            {
                                style:myStyle,
                                onEachFeature:forEachFeature
                            
                            });
                            geojson.addTo(map);
                            legend.remove();
                            legend = L.control({position: "topleft"});
                            legend.onAdd= function(map)
                            {
                                let div=L.DomUtil.create("div","legend");
                                div.innerHTML='<br><b>Saldo de migracion global</b><br>';
                                
                                    div.innerHTML +=
                                    '<br> <i style="background-color:'+colors[7] +'"></i>' +
                                    "Saldo Positivo" + '<br>'+ '<br> '+'<i style="background-color:'+colors[0] +'"></i>' +
                                    "Saldo Negativo" 
                                    
                           
                             return div;
                            };
                        
                           legend.addTo(map);
                    
                        }           
                        else if(seleccion.target.value=="SaldoG") 
                            {
                                         forEachFeature=saldoGalicia;
                                         myStyle=saldoGaliciaStyle;
                                         geojson=L.geoJSON(finalJson,
                                         {
                                             style:myStyle,
                                             onEachFeature:forEachFeature
                                         
                                         });
                                         geojson.addTo(map);
                                         legend.remove();
                                         legend = L.control({position: "topleft"});
                                         legend.onAdd= function(map)
                                         {
                                             let div=L.DomUtil.create("div","legend");
                                             div.innerHTML='<br><b>Saldo de migracion interna</b><br>';
                                             
                                                 div.innerHTML +=
                                                 '<br> <i style="background-color:'+colors[7] +'"></i>' +
                                                 "Saldo Positivo" + '<br>'+ '<br> '+'<i style="background-color:'+colors[0] +'"></i>' +
                                                 "Saldo Negativo" 
                                                 
                                        
                                          return div;
                                         };
                                     
                                        legend.addTo(map);
                                 
    
                                    }             
                                    else if(seleccion.target.value=="SaldoE") 
                                        {
                                                     forEachFeature=saldoExterior;
                                                     myStyle=saldoExteriorStyle;
                                                     geojson=L.geoJSON(finalJson,
                                                     {
                                                         style:myStyle,
                                                         onEachFeature:forEachFeature
                                                     
                                                     });
                                                     geojson.addTo(map);
                                                     legend.remove();
                                                     legend = L.control({position: "topleft"});
                                                     legend.onAdd= function(map)
                                                     {
                                                         let div=L.DomUtil.create("div","legend");
                                                         div.innerHTML='<br><b>Saldo de migracion externa</b><br>';
                                                         
                                                             div.innerHTML +=
                                                             '<br> <i style="background-color:'+colors[7] +'"></i>' +
                                                             "Saldo Positivo" + '<br>'+ '<br> '+'<i style="background-color:'+colors[0] +'"></i>' +
                                                             "Saldo Negativo" 
                                                             
                                                    
                                                      return div;
                                                     };
                                                 
                                                    legend.addTo(map);
                                             
                                                 }
                                                 else if(seleccion.target.value=="PorMig") 

                                                    {
                                                        forEachFeature=porcentaxeM;
                                                        myStyle=porcentaxeMStyle;
                                                        geojson=L.geoJSON(finalJson,
                                                        {
                                                            style:myStyle,
                                                            onEachFeature:forEachFeature
                                                        
                                                        });
                                                        geojson.addTo(map);
                                                        legend.remove();
                                                        legend = L.control({position: "topleft"});
                                                        legend.onAdd= function(map)
                                                        {
                                                            let div=L.DomUtil.create("div","legend");
                                                            div.innerHTML='<br><b>Porecentaxe de migracion </b><br>';
                                                            
                                                                div.innerHTML +=
                                                                '<br> <i style="background-color:'+colors[6] +'"></i>' +
                                                                "Porcentaxe maior que o 1%" + '<br>'+ '<br> <i style="background-color:'+colors[colors.length-3] +'"></i>' +
                                                                "Porcentaxe entre 0 e 1%" + '<br>' + '<br>' +'<i style="background-color:'+colors[0] +'"></i>' +
                                                                "Porcentaxe negativo" 
                                                                
                                                       
                                                         return div;
                                                        };
                                                    
                                                       legend.addTo(map);
                                                
                                                    }
                                                    else if(seleccion.target.value=="IM") 

                                                        {
                                                            forEachFeature=idadeMedia;
                                                            myStyle=idadeMediaStyle;
                                                            geojson=L.geoJSON(finalJson,
                                                            {
                                                                style:myStyle,
                                                                onEachFeature:forEachFeature
                                                            
                                                            });
                                                            geojson.addTo(map);
                                                            legend.remove();
                                                            legend = L.control({position: "topleft"});
                                                            legend.onAdd= function(map)
                                                            {
                                                                let div=L.DomUtil.create("div","legend");
                                                                div.innerHTML='<br><b>Idade Media.2024 </b><br>';
                                                                
                                                                    div.innerHTML +=
                                                                    '<br> <i style="background-color:'+colors[0] +'"></i>' +
                                                                    "Maior Media Galega(48,4)" + '<br>'+ '<br> <i style="background-color:'+colors[7] +'"></i>' +
                                                                    "Menos Media Galega" + '<br>';
                                                
                                                           
                                                             return div;
                                                            };
                                                        
                                                           legend.addTo(map);
                                                    
                                                        }
    });
   
    

    
