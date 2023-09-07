// ❓ DESCRIPTION:
// You will be given a list of objects. Each object has type, material,
// and possibly secondMaterial.
// The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according
// to their
// material (and secondMaterial if it's present), by listing the type's of
// objects that should go into
// those bins.

// ✅ SOLUTION:
function recycle(array) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: []
  };
  for (let obj of array) {
    if (obj.material === 'paper') {
      bins.paper.push(obj.type);
    } else if (obj.material === 'glass') {
      bins.glass.push(obj.type);
    } else if (obj.material === 'organic') {
      bins.organic.push(obj.type);
    } else if (obj.material === 'plastic') {
      bins.plastic.push(obj.type);
    }
    if (obj.secondMaterial) {
      if (obj.secondMaterial === 'paper') {
        bins.paper.push(obj.type);
      } else if (obj.secondMaterial === 'glass') {
        bins.glass.push(obj.type);
      } else if (obj.secondMaterial === 'organic') {
        bins.organic.push(obj.type);
      } else if (obj.secondMaterial === 'plastic') {
        bins.plastic.push(obj.type);
      }
    }
  }
  return [bins.paper, bins.glass, bins.organic, bins.plastic];
}