console.log(data)
function createPokemonCard(data){
    const liEl=document.createElement('li')
    liEl.setAttribute('class','card')
    const h2El=document.createElement('h2')
    h2El.setAttribute('class','card--title')
    h2El.textContent=data.name
    const imgEl=document.createElement('img')
    imgEl.setAttribute('class','card--img')
    imgEl.setAttribute('width','250')
    imgEl.setAttribute('src', data.sprites.other["official-artwork"].front_default)
    const ulEl=document.createElement('ul')
    ulEl.setAttribute('class','card--text')
    const liTextEl=document.createElement('li')
    liTextEl.textContent=`${data.stats[0].stat.name}: ${data.stats[0].base_stat}`
    const liAttackEl=document.createElement('li')
    liAttackEl.textContent=`${data.stats[1].stat.name}: ${data.stats[1].base_stat}`
    const liDefenseEl=document.createElement('li')
    liDefenseEl.textContent=`${data.stats[2].stat.name}: ${data.stats[2].base_stat}`
    const liSpecialAttackEl=document.createElement('li')
    liSpecialAttackEl.textContent=`${data.stats[3].stat.name}: ${data.stats[3].base_stat}`
    const liSpecialDefenseEl=document.createElement('li')
    liSpecialDefenseEl.textContent=`${data.stats[4].stat.name}: ${data.stats[4].base_stat}`
    const liSpeedEl=document.createElement('li')
    liSpeedEl.textContent=`${data.stats[5].stat.name}: ${data.stats[5].base_stat}`
    ulEl.append(liTextEl,liAttackEl,liDefenseEl,liSpecialAttackEl,liSpecialDefenseEl,liSpeedEl)
    liEl.append(h2El,imgEl,ulEl)
    const card=document.querySelector('.cards')
    card.append(liEl)
}
for(const element of data){
createPokemonCard(element)
}