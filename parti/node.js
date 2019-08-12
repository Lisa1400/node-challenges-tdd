let id = 0;


module.exports = 
class Visitor {
     constructor(fullName, age, visitDate, visitTime, comments, assistedBy) {

          this.fullName = fullName;
          this.age = age;
          this.visitDate = visitDate;
          this.visitTime = visitTime;
          this.comments = comments;
          this.assistedBy = assistedBy;
          console.log('Patient information added to file');
          this.id = id;
     }

     

     save() {

          let files = new Visitor(
               this.fullName,
               this.age,
               this.visitDate,
               this.visitTime,
               this.comments,
               this.assistedBy
          );
          let fileData = JSON.stringify(files)
          let fs = require('fs');
          
          id++;

          fs.writeFile(`visitor_${id}.json`, fileData, err => {
               if (err) {
                    throw (Error + 'Cannot save file');
               } else {
                    console.log('File was saved');
               }
          });
          return "File was saved";
       }


       load(id) {
          var fs = require("fs")
          if(id <= 0) {
              console.log("File doesn't exist");
          }
          var path = "visitor_" + id + ".json";
          var data =  fs.readFileSync(path);
          let vData = JSON.parse(data);
         return vData;
      }
       

    }

    let visitor1 = new Visitor(
     "Alice",
    21,
    "01/08/2019",
    "14h00",
    "Enquiries",
    "Thembi");
//     visitor1.save();

//     let visitor2 = new Visitor("Bob",
//     21,
//     "02/08/2019",
//     "13h00",
//     "Interview",
//     "Lisa");
//     visitor2.save();

//     let visitor3 = new Visitor("Charlie",
//     21,
//     "08/08/2019",
//     "13h45",
//     "Curiosity Session",
//     "Lesley");
//     visitor3.save();

    visitor1.load(1)
    