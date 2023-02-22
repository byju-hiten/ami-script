const fs = require('fs');
const path = require('path')
var XLSX = require("xlsx");

const jsonsInDir = fs.readdirSync('./output').filter(file => path.extname(file) === '.json');


let data = {Images:[]}

const seen = new Map();


function countUnique(iterable) {

  let arr = [];
  let res = ""
  iterable.forEach(block=>{
    arr.push(block.Ebs.VolumeType)
    res = block.Ebs.VolumeType
  })

  return new Set(arr).size > 1 ? "both":res;
}

jsonsInDir.forEach(file => {
  const fileData = fs.readFileSync(path.join('./output', file));
  const json = JSON.parse(fileData.toString());
  if(json["Images"] !== undefined){

    json["Images"].forEach(image => {

        if(!seen.has(image.ImageId)){

          let l = {};
          l.ImageId = image.ImageId;
          l.Name = image.Name
          l.VolumeType = countUnique(image.BlockDeviceMappings)
          l.Owner = image.OwnerId

          data.Images.push(l)
          seen.set(image.ImageId,true)
        }
    })
  }
});

const jsonToExcel = () => {

    const workSheet = XLSX.utils.json_to_sheet(data.Images);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "ami-data")
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "ami-data.xlsx")

}

jsonToExcel();

// fs.writeFile ("data.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );


