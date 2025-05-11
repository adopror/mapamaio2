console.log("En indexJs");
const denP=[0, 12.6, 17.9, 25.4, 37.4, 62.0, 113.0, 302.9, 6371.3]
const Pob=[228, 1025, 1402, 1945, 2977, 4553, 6831, 13698, 292374]
const Ocu=[16, 32, 36,40, 48]
const colors=['#FFEDA0','#FED976','#FEB24C','#FD8D3C','#FC4E2A','#E31A1C','#BD0026','#800026'];
const MorQ=[0, 7.5,14.8, 22.3, 29.7, 37.1, 44.5, 51.9]

let layerTimonel;         
function getColorDensidad(densidade)
{
    console.log(densidade)
    
    const ite = parseInt(densidade);
    for (let i=0;i<denP.length-1;i++) 
    {
        if( ite > denP[i] && ite <= denP[i+1]+2)
            return colors[i]
        
    }
}
function getDensidadeStyle(feature)
    {
        return {
            fillColor: getColorDensidad(parseInt(feature.properties.Densidade)),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    
    };
  
function densidadeQuantil(feature,layer)
{
    //if (map.hasLayer(layerTimonel))
      // map.removeLayer(layerTimonel)
      layerTimonel=layer;

    console.log("en densidadeQ")
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Densidade).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    

    
}

function getColorPoboacion(poboacion)
{
    const ite =parseInt(poboacion);
    for (let i=0;i<Pob.length-1;i++) 
    {
        if( ite > Pob[i] && ite <= Pob[i+1]+2)
            return colors[i]
        
    }
}
function poboacionQuantil(feature,layer)
{
    //if (map.hasLayer(layerTimonel))
     //map.removeLayer(layerTimonel)
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Poboacion).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function poboacionStyle(feature)
{
    return {
        fillColor: getColorPoboacion(parseInt(feature.properties.Poboacion)),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorVariacion(variacionP)

{
    if(variacionP==null) variacionP='0';
    //console.log(typeof variacionP)
    const ite =variacionP.replace(',','.');
    let ite2=Math.ceil(parseFloat(ite));

    if(ite2 >0)return colors[colors.length-1];
    else return colors[0];

}
function variacion(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Variacion).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function variacionStyle(feature)
{
    return {
        fillColor: getColorVariacion(feature.properties.Variacion),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorOcupados(ocupados)
{
    
    
    const ite = parseInt(ocupados);
    for (let i=0;i<Ocu.length-1;i++) 
    {
        if( ite > Ocu[i] && ite <= Ocu[i+1])
            return colors[i*2]
        
    }
}
function getOcupadosStyle(feature)
    {
        return {
            fillColor: getColorOcupados(parseInt(feature.properties.Ocupados)),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    
    };
  
function ocupados(feature,layer)
{
    //if (map.hasLayer(layerTimonel))
      // map.removeLayer(layerTimonel)
      layerTimonel=layer;

    
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Ocupados).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    

    
}
function getColorNenos(nenos)

{
    if(nenos==null) nenos=0;
   

    if(nenos >0)return colors[colors.length-1];
    else return colors[0];

}
function nenos(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Nenos).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function nenosStyle(feature)
{
    return {
        fillColor: getColorNenos(feature.properties.Nenos),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorMaiores(maiores)

{
    if(maiores==null) maiiores='0';
    let ite2=Math.ceil(parseFloat(maiores));

    if(nenos >0)return colors[colors.length-1];
    else return colors[0];

}
function maiores(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Maiores).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function maioresStyle(feature)
{
    return {
        fillColor: getColorVariacion(feature.properties.Maiores),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorMasculinidade(masculinidadeP)

{

    if(masculinidadeP >0)return colors[colors.length-1];
    else return colors[0];

}
function masculinidade(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Masculinidade).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function masculinidadeStyle(feature)
{
    return {
        fillColor: getColorMasculinidade(feature.properties.Masculinidade),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorIdadeMedia(idadeMediaP)

{
    let nump=parseFloat(idadeMediaP)

    if(nump <48)return colors[colors.length-1];
    else return colors[0];

}
function idadeMedia(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.IdadeMedia).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function idadeMediaStyle(feature)
{
    return {
        fillColor: getColorIdadeMedia(feature.properties.IdadeMedia),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorSaldoTotal(saldoP)

{

    if(saldoP >0)return colors[colors.length-1];
    else return colors[0];

}
function saldoTotal(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.TotalSaldo).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function saldoTotalStyle(feature)
{
    return {
        fillColor: getColorSaldoTotal(feature.properties.TotalSaldo),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorSaldoGalicia(saldoP)

{

    if(saldoP >0)return colors[colors.length-1];
    else return colors[0];

}
function saldoGalicia(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.SaldoInterno).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function saldoGaliciaStyle(feature)
{
    return {
        fillColor: getColorSaldoGalicia(feature.properties.SaldoInterno),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorSaldoExterior(saldoP)

{

    if(saldoP >0)return colors[colors.length-1];
    else return colors[0];

}
function saldoExterior(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.SaldoExterno).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function saldoExteriorStyle(feature)
{
    return {
        fillColor: getColorSaldoGalicia(feature.properties.SaldoExterno),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorPorcentanxeM(saldoP)

{

    if(saldoP >1)return colors[colors.length-1];
    else if (saldoP>=0) return colors[4];
    else return colors[0];

}
function porcentaxeM(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.PorMigrantes).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function porcentaxeMStyle(feature)
{
    return {
        fillColor: getColorPorcentanxeM(feature.properties.PorMigrantes),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorFecundidade (fecundidade)

{
    if(fecundidade==null) fecundidade=0;
   
    
    if(fecundidade >1)return colors[colors.length-1];
    else if(fecundidade>0)return colors[colors.length-4]
    else return colors[0];

}
function fecundidade(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Fecundidade).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function fecundidadeStyle(feature)
{
    return {
        fillColor: getColorFecundidade(feature.properties.Fecundidade),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorRecambio(recambioP)

{
    if (recambioP<200) return colors[7];
    else if (recambioP>200 && recambioP<300) return colors[colors.length-4];
    else return colors[0];

}
function recambio(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello + "   " + feature.properties.Porcentaxe).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function getRecambioStyle(feature)
{
    return {
        fillColor: getColorRecambio(feature.properties.Porcentaxe),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorNatalidade (natalidade)

{
    if(natalidade==null) natalidade=0;
   
    
    if(natalidade >5)return colors[colors.length-1];
    else if(natalidade>0 && natalidade<=5)return colors[colors.length-4]
    else return colors[0];
    const ite =parseInt(natalidade);
    for (let i=0;i<NatQ.length-1;i++) 
    {
        if( ite > NatQ[i] && ite <= NatQ[i+1]+2)
            return colors[i]
        
    }

}
function natalidade(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello+ "   " + feature.properties.Natalidade).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function natalidadeStyle(feature)
{
    return {
        fillColor: getColorNatalidade(feature.properties.Natalidade),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function getColorMortalidade(mortalidade)

{
    if(mortalidade==null) mortalidade=0;
    
    for (let i=0;i<MorQ.length-1;i++) 
        {
            if( mortalidade > MorQ[i] && mortalidade <= MorQ[i+1])
                return colors[colors.length-i-1]
            
        }
    ;

}
function mortalidade(feature,layer)
{
    if (map.hasLayer(layerTimonel))
       map.removeLayer(layerTimonel);
    layerTimonel=layer;
    layer.on({
        mouseover:() =>
        {

            layer.setStyle(
            {
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            });
            layer.bindTooltip(feature.properties.Concello+ "   " + feature.properties.Mortalidade).openTooltip();

            layer.bringToFront();
        },
        mouseout: () =>
        {
            geojson.resetStyle(layer);
        }
        //,click: zoomToFeature
        
    });
    
}
function mortalidadeStyle(feature)
{
    return {
        fillColor: getColorMortalidade(feature.properties.Mortalidade),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}