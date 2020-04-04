const JOBS={
  'wind':['Knight','Monk','Thief','Black mage','White mage','Blue mage'],
  'water':['Red mage','Time mage','Summoner','Berserker','Mystic knight'],
  'fire':['Beastmaster','Geomancer','Ninja','Ranger','Bard'],
  'earth':['Dragoon','Dancer','Samurai','Chemist'],
  'sealed':['Necromancer','Cannoneer','Gladiator','Oracle'],
}
const RESULT=document.querySelector('#results')
const AMOUNT=Array.from(document.querySelectorAll('input[name=amount]'))

function choose(array){return array[Math.floor(Math.random()*array.length)]}
  
function generate(){
  let unlocked=[]
  for(let pool of Object.keys(JOBS))
    if(document.querySelector('#'+pool).checked)
      unlocked.push(...JOBS[pool])
  if(unlocked.length==0){
    RESULT.innerHTML='Please select at least one job pool...'
    return
  }
  let amount=Number(AMOUNT.find(i=>i.checked).value)
  let jobs=[]
  while(jobs.length<amount) jobs.push(choose(unlocked))
  RESULT.innerHTML=jobs.join(' • ')
}

export function setup(){document.querySelector('button#generate').onclick=generate}
