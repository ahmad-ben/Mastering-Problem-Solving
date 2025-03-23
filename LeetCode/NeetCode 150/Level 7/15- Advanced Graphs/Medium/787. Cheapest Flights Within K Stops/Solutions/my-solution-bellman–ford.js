var findCheapestPrice = function(n, flights, src, dst, k) {
  let cArriveCost = Array(n).fill(Infinity);
  let fCArriveCst = Array(n).fill(Infinity);

  cArriveCost[src] = fCArriveCst[src] = 0;

  while(k-- > -1){
    for(let [src, dst, prc] of flights)
      if(cArriveCost[src] !== Infinity) 
        fCArriveCst[dst] = Math.min(cArriveCost[src] + prc, fCArriveCst[dst]);

    cArriveCost = [...fCArriveCst];
  };

  return cArriveCost[dst] === Infinity ? -1 : cArriveCost[dst]; 
};