document.addEventListener('DOMContentLoaded', function() {
  const inputForm = document.forms['item-form']
  let records = JSON.parse(localStorage.getItem('records')) //records to obj
  if (records === null) {
    records = []
  }

  inputForm.addEventListener('submit',function(e) {
    e.preventDefault()
    records.push(getFormData())
    localStorage.setItem('records', JSON.stringify(records)) //obj to string
    console.log(localStorage.getItem('records'))
    inputForm.reset()
  })
  
  function getFormData() {
    let category = inputForm.elements["category"]
    let date = inputForm.elements["date"]
    let amount = inputForm.elements["amount"]
    let amountInt = parseInt(amount.value, 10)
    let description = inputForm.elements["description"]

    return formData = {
      //uuid: generateUUID(),
      date: date.value,
      category: category.value,
      description: description.value,
      amount: amountInt
    }
    // category.value = '食'
    // date.value = ''
    // amount.value = ''
    // description.value = ''
  }

  function generateUUID() {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d+ Math.random()*16)%16 | 0
      d = Math.floor(d/16)
      return (c=='x' ? r : (r&0x3|0x8)).toString(16)
    });
    return uuid
  };
  
  // function initData(){
    //   let sampleData = [{"uuid":"65216fa1-1a7b-4f62-9381-a19c73e3ba4d","category":"食","date":"2020-01-01","amount":1702,"description":"French Toast"},{"uuid":"67e52bc1-9804-4633-90f2-eee13bbdaf2e","category":"住","date":"2020-01-02","amount":1282,"description":"bed"},{"uuid":"5deaf6e8-7777-4f78-a6bc-42b1957d3a04","category":"食","date":"2020-01-02","amount":544,"description":"California Maki"},{"uuid":"dd70e5a4-4596-4a75-a21a-102691a95309","category":"行","date":"2020-01-02","amount":1074,"description":"修車"},{"uuid":"6bd31061-e13f-49b8-b9a4-ad7f415d3d76","category":"行","date":"2020-01-02","amount":1197,"description":"悠遊卡"},{"uuid":"3a62eb6a-3358-4075-b7e9-48baba7f9274","category":"食","date":"2020-01-02","amount":397,"description":"Salmon Nigiri"},{"uuid":"16066f1f-8ff2-47fb-a477-aa48420b065f","category":"食","date":"2020-01-02","amount":1587,"description":"Chicken Wings"},{"uuid":"954b5e36-fe4f-4c9d-9139-1ef29fe58e05","category":"食","date":"2020-01-02","amount":1958,"description":"Cauliflower Penne"},{"uuid":"efa04404-1893-484c-8471-23da471096b3","category":"食","date":"2020-01-04","amount":1004,"description":"Cauliflower Penne"},{"uuid":"f6d7a920-27cc-4418-ada2-d0a5fd0a8ff9","category":"育","date":"2020-01-04","amount":947,"description":"學費"},{"uuid":"0209e547-4525-405c-977b-a355c3740263","category":"食","date":"2020-01-04","amount":363,"description":"Pasta Carbonara"},{"uuid":"cdaf7699-756f-40e1-99db-a48a454adc3b","category":"食","date":"2020-01-05","amount":564,"description":"Scotch Eggs"},{"uuid":"d75b4089-00ac-44d5-98f8-f65feb6eddff","category":"食","date":"2020-01-05","amount":1192,"description":"Poutine"},{"uuid":"4d9b8cb9-1a29-4377-b455-844b5892b9d8","category":"育","date":"2020-01-06","amount":1943,"description":"學費"},{"uuid":"daf0d750-a5b8-4e45-b80f-b96d931070ad","category":"住","date":"2020-01-06","amount":1786,"description":"armchair"},{"uuid":"86fae7af-30e4-42d9-bb5e-c17eda4cd8b1","category":"食","date":"2020-01-07","amount":602,"description":"Lasagne"},{"uuid":"6d11a94c-4741-4bf1-be1d-80f41dba2c68","category":"食","date":"2020-01-08","amount":342,"description":"Som Tam"},{"uuid":"b63addea-3e70-49d0-8a60-588faba8875f","category":"衣","date":"2020-01-08","amount":611,"description":"Greenholt, Stark and Dibbert"},{"uuid":"852cdace-e7dc-4bb7-9c0b-fe67768980cf","category":"食","date":"2020-01-10","amount":863,"description":"Barbecue Ribs"},{"uuid":"4ddfa7a2-8cb1-483e-b670-9ffec5f316f5","category":"食","date":"2020-01-10","amount":106,"description":"Hummus"},{"uuid":"dc0f957f-52a0-4091-8954-1c76ed41c167","category":"樂","date":"2020-01-10","amount":1546,"description":"旅行"},{"uuid":"7d7b589d-326b-443a-b7ce-de223345ebfd","category":"樂","date":"2020-01-10","amount":835,"description":"看電影"},{"uuid":"752e51c9-1a23-4249-91b0-564022734eb9","category":"樂","date":"2020-01-11","amount":1487,"description":"旅行"},{"uuid":"c033d584-b9f8-400d-a260-96a7f38bfacd","category":"食","date":"2020-01-11","amount":1365,"description":"Stinky Tofu"},{"uuid":"38d7b5c4-0974-4442-a1f1-59bb1d38632d","category":"樂","date":"2020-01-12","amount":141,"description":"看電影"},{"uuid":"a28b597b-fa38-4560-a5de-7e38e3ab602c","category":"食","date":"2020-01-12","amount":876,"description":"Seafood Paella"},{"uuid":"d035e8a5-3a69-4840-b08f-89226a951fa7","category":"食","date":"2020-01-12","amount":1958,"description":"Chicken Wings"},{"uuid":"198fc82b-6beb-4075-a60e-c98c4239d110","category":"衣","date":"2020-01-13","amount":1093,"description":"Conroy-Raynor"},{"uuid":"419c9b8e-3dd5-46ae-aad5-385ad4597b07","category":"食","date":"2020-01-14","amount":772,"description":"Stinky Tofu"},{"uuid":"53f905b3-9545-436d-8df9-e475ccce508d","category":"食","date":"2020-01-14","amount":325,"description":"Chicken Fajitas"},{"uuid":"4fd18470-573b-4695-85f2-90d75ac72215","category":"食","date":"2020-01-14","amount":1139,"description":"Massaman Curry"},{"uuid":"562ccbad-5087-4586-b388-a2427e9049d4","category":"食","date":"2020-01-14","amount":448,"description":"Poke"},{"uuid":"72b6f4be-711d-4023-9dd3-500280b8aecd","category":"食","date":"2020-01-15","amount":1046,"description":"Pappardelle alla Bolognese"},{"uuid":"dc45316c-d70a-42bf-8ab2-ad13fdf03713","category":"食","date":"2020-01-16","amount":1206,"description":"Seafood Paella"},{"uuid":"437a854b-431c-4616-a92b-db367d465fbf","category":"食","date":"2020-01-18","amount":373,"description":"Salmon Nigiri"},{"uuid":"96980b66-cedc-4f6a-921e-1d0f304262fe","category":"食","date":"2020-01-18","amount":488,"description":"Pasta with Tomato and Basil"},{"uuid":"1d7ea57c-5846-4c6e-8905-fb11a4507284","category":"食","date":"2020-01-19","amount":485,"description":"Tiramisù"},{"uuid":"3d468e0a-a73f-4eab-b43f-337934e4022b","category":"食","date":"2020-01-20","amount":921,"description":"Pappardelle alla Bolognese"},{"uuid":"1a52d842-6f06-4807-b430-e694ca9abecc","category":"行","date":"2020-01-21","amount":1799,"description":"悠遊卡"},{"uuid":"9d60b308-2d1e-4ac2-a88b-42598193e017","category":"食","date":"2020-01-21","amount":1347,"description":"Ricotta Stuffed Ravioli"},{"uuid":"6288fb7a-5068-4435-b35b-2d14ed4ed126","category":"育","date":"2020-01-22","amount":1621,"description":"買書"},{"uuid":"00923953-6cc3-4a06-852c-ee6dc857ca35","category":"住","date":"2020-01-23","amount":1263,"description":"cupboard"},{"uuid":"7da0b785-990a-4d26-a505-ee81f0dbbe85","category":"育","date":"2020-01-24","amount":337,"description":"買書"},{"uuid":"8500c196-f526-4904-901d-1fe46f3b9ea2","category":"食","date":"2020-01-24","amount":1007,"description":"Souvlaki"},{"uuid":"b5db51b0-021b-4b6e-aad2-104579cf9ed4","category":"樂","date":"2020-01-25","amount":1012,"description":"旅行"},{"uuid":"4887be57-b497-4c59-a8c5-60c56b0c117f","category":"衣","date":"2020-01-26","amount":1414,"description":"Ullrich, Oberbrunner and Price"},{"uuid":"b9d93047-7dec-4beb-9c9d-06fcb803bbbb","category":"食","date":"2020-01-27","amount":1426,"description":"Lasagne"},{"uuid":"a6c25c61-837b-4329-9e15-8534b5fd9dff","category":"食","date":"2020-01-27","amount":1652,"description":"Pappardelle alla Bolognese"},{"uuid":"8f57c497-cb27-482c-a5bc-745904695b48","category":"育","date":"2020-02-01","amount":1673,"description":"買書"},{"uuid":"d3af0632-a8ed-4a4b-be36-834ff804d6a4","category":"樂","date":"2020-02-04","amount":1503,"description":"手遊課金"},{"uuid":"32d52bf3-4136-4c25-936f-410588b019db","category":"食","date":"2020-02-05","amount":291,"description":"Pho"},{"uuid":"93126330-4165-4e0d-8802-41f9f1e9dbfb","category":"食","date":"2020-02-06","amount":250,"description":"Barbecue Ribs"},{"uuid":"dd197d0a-0672-48a5-b452-11d5ff4533a2","category":"食","date":"2020-02-07","amount":697,"description":"Meatballs with Sauce"},{"uuid":"cd0f7831-3111-4902-b125-20253a0fe80e","category":"食","date":"2020-02-08","amount":1608,"description":"Mushroom Risotto"},{"uuid":"7027e75e-8a81-4d89-96a1-1f5edd4e3425","category":"食","date":"2020-02-08","amount":1235,"description":"Mushroom Risotto"},{"uuid":"8fdee4fb-abc8-433b-97af-b754973219b9","category":"食","date":"2020-02-10","amount":897,"description":"Hummus"},{"uuid":"5ae88969-aa6e-4fbe-a83d-9603622ccf17","category":"樂","date":"2020-02-11","amount":1649,"description":"手遊課金"},{"uuid":"0ac4b90b-a6e7-4981-942f-12cca1e6c5e8","category":"行","date":"2020-02-12","amount":1214,"description":"停車費"},{"uuid":"696e7e1f-434a-4eaa-a82a-9c55e92c387e","category":"食","date":"2020-02-13","amount":1452,"description":"Massaman Curry"},{"uuid":"12186ea6-e4f3-4f36-adf3-811c88e40b04","category":"食","date":"2020-02-14","amount":121,"description":"Kebab"},{"uuid":"afbefd99-36b8-43ad-b039-0080e83a85a1","category":"食","date":"2020-02-15","amount":665,"description":"Kebab"},{"uuid":"e683b65e-107f-4d51-bbca-c56a3ccf3313","category":"食","date":"2020-02-15","amount":767,"description":"French Fries with Sausages"},{"uuid":"50cb8110-3bfa-4649-97d3-13b579788a2a","category":"食","date":"2020-02-18","amount":498,"description":"Kebab"},{"uuid":"f3e5cc5d-1fb9-4d9c-bc0d-afffa6130190","category":"食","date":"2020-02-18","amount":1761,"description":"Philadelphia Maki"},{"uuid":"6fea5207-29bf-4a51-b561-05a5fc9b043f","category":"衣","date":"2020-02-18","amount":1617,"description":"Hackett and Sons"},{"uuid":"9934be29-8acf-4e82-bbb2-e93bad16bb54","category":"食","date":"2020-02-19","amount":1134,"description":"Bunny Chow"},{"uuid":"222c9dce-ccfd-48dd-9867-c1a6190536bb","category":"育","date":"2020-02-19","amount":1931,"description":"學費"},{"uuid":"aeac8b1d-9a38-4ac0-8ef8-9e3c58f1f6a5","category":"食","date":"2020-02-19","amount":1106,"description":"Tacos"},{"uuid":"eef8a623-3fe8-4096-a973-f576b4729191","category":"食","date":"2020-02-20","amount":850,"description":"French Fries with Sausages"},{"uuid":"f1f7d50e-a2ee-4982-b1e1-652418b570ab","category":"樂","date":"2020-02-20","amount":1194,"description":"旅行"},{"uuid":"7e47b4d6-fab7-45b9-9c6d-cacffa121cbd","category":"食","date":"2020-02-21","amount":416,"description":"Caprese Salad"},{"uuid":"92454cfa-cd82-4c5e-a12b-ec6c901bc657","category":"食","date":"2020-02-22","amount":522,"description":"Bunny Chow"},{"uuid":"ee9142a1-40cb-4e98-b69d-3248035ffcb2","category":"食","date":"2020-02-22","amount":617,"description":"Caprese Salad"},{"uuid":"0f536b36-61db-4610-8515-e6817d9f5784","category":"衣","date":"2020-02-23","amount":1451,"description":"Fritsch, Paucek and Hand"},{"uuid":"df33ef9c-0541-40c5-8825-282b62aac106","category":"食","date":"2020-02-23","amount":1080,"description":"Pasta Carbonara"},{"uuid":"e43a0b8f-ed24-4282-8f2c-1d7306d32369","category":"育","date":"2020-02-25","amount":1516,"description":"買書"},{"uuid":"0e70eaa7-a654-426f-8db7-1d3065fe99c3","category":"食","date":"2020-02-25","amount":692,"description":"Chicken Parm"},{"uuid":"1acb4cce-9651-4735-9c3e-dbc4156ed919","category":"住","date":"2020-02-26","amount":674,"description":"table"},{"uuid":"66a7aacd-9936-49cc-83bd-7d5423c6b65d","category":"食","date":"2020-02-29","amount":1741,"description":"Vegetable Soup"},{"uuid":"7660a721-0e09-43ae-abe0-c29339802bd0","category":"食","date":"2020-03-01","amount":1352,"description":"Mushroom Risotto"},{"uuid":"e87c94f5-e9bc-4761-9594-4492fa7bd1ef","category":"食","date":"2020-03-02","amount":643,"description":"Vegetable Soup"},{"uuid":"cce8a688-70a1-42ea-bd8c-9d55a1613cb0","category":"食","date":"2020-03-02","amount":246,"description":"Bruschette with Tomato"},{"uuid":"4d02cbe7-19e5-4b28-a1f9-8b6ef90370cd","category":"食","date":"2020-03-02","amount":814,"description":"Chilli con Carne"},{"uuid":"0a49ddc3-a6e3-41d3-aa65-7d5014981e8a","category":"衣","date":"2020-03-03","amount":487,"description":"Klein-Waelchi"},{"uuid":"580a1f20-249a-4458-b7a5-e1f80482e584","category":"樂","date":"2020-03-03","amount":590,"description":"手遊課金"},{"uuid":"c75ec41a-8f6a-414b-8371-11b449212f6e","category":"食","date":"2020-03-03","amount":1173,"description":"Linguine with Clams"},{"uuid":"8b9ae969-5008-4a9e-95e8-2bc9a09b30a3","category":"食","date":"2020-03-04","amount":771,"description":"Ebiten maki"},{"uuid":"c3868369-fabf-4485-b12b-35590b2cfd20","category":"食","date":"2020-03-06","amount":131,"description":"Katsu Curry"},{"uuid":"d53374a7-6ecc-4884-83f3-5afa6e26821f","category":"食","date":"2020-03-07","amount":1060,"description":"Tuna Sashimi"},{"uuid":"33581eb9-8a1e-435d-adc9-a3b95ccd42db","category":"住","date":"2020-03-07","amount":1404,"description":"chair"},{"uuid":"be81d3a5-e2e0-440e-96a4-848d9e55726b","category":"食","date":"2020-03-08","amount":1375,"description":"Chilli con Carne"},{"uuid":"67f2c259-f4f5-4362-b175-8ed7f04e7094","category":"食","date":"2020-03-08","amount":938,"description":"Scotch Eggs"},{"uuid":"9e02e8c1-ebd8-4a16-b5ca-7f0cf761e78a","category":"食","date":"2020-03-09","amount":646,"description":"Souvlaki"},{"uuid":"3e6bc682-0a31-4cb7-b6a2-96bf99f69ddf","category":"樂","date":"2020-03-09","amount":265,"description":"旅行"},{"uuid":"258b02be-3d1e-4596-8b76-fb7c92227ebd","category":"育","date":"2020-03-10","amount":1508,"description":"學費"},{"uuid":"813831e8-da3c-4d7c-a704-74f7cdb76d55","category":"住","date":"2020-03-10","amount":1985,"description":"dresser"},{"uuid":"f3183d09-4cb8-4965-a667-f4c251995f6c","category":"食","date":"2020-03-10","amount":833,"description":"Philadelphia Maki"},{"uuid":"8c91b812-9c71-4bd0-a9eb-a329eead84fc","category":"行","date":"2020-03-11","amount":1889,"description":"計程車"},{"uuid":"65269f5c-d013-4619-8713-5b9675657545","category":"食","date":"2020-03-11","amount":1856,"description":"Poke"},{"uuid":"42a0dade-01f6-434d-8f08-9d0decba6f9d","category":"衣","date":"2020-03-11","amount":123,"description":"Hudson Inc"},{"uuid":"d28dcc23-2e14-4c5c-9de7-3cc1942e1494","category":"食","date":"2020-03-12","amount":205,"description":"Caesar Salad"},{"uuid":"4cc561e1-ae35-4a49-98c5-92f74223fc06","category":"食","date":"2020-03-12","amount":1647,"description":"Chicken Milanese"},{"uuid":"cd9493e2-550a-44b8-a6c1-f47794d9f68c","category":"食","date":"2020-03-12","amount":1252,"description":"Ebiten maki"},{"uuid":"e19dcfb2-07c0-423f-ac64-1158be2ec633","category":"食","date":"2020-03-12","amount":1305,"description":"Chicken Wings"},{"uuid":"740661b0-3e06-4cff-903c-2df6bb837f58","category":"食","date":"2020-03-13","amount":1491,"description":"Som Tam"},{"uuid":"3f0dfd80-09de-4bde-b9b9-dc68a876f48c","category":"食","date":"2020-03-13","amount":1080,"description":"Bruschette with Tomato"},{"uuid":"1631776c-2896-480b-a299-f4fabff07577","category":"食","date":"2020-03-13","amount":954,"description":"Pappardelle alla Bolognese"},{"uuid":"b4cde902-b9ab-457e-9f60-c2d57a611b23","category":"食","date":"2020-03-14","amount":207,"description":"Pho"},{"uuid":"371f144f-84c3-4618-882e-c196dd0d2b1c","category":"住","date":"2020-03-14","amount":389,"description":"armchair"},{"uuid":"ff591ca7-0318-46b8-9046-751221de1641","category":"住","date":"2020-03-14","amount":1530,"description":"bed"},{"uuid":"6dcc76c7-bebe-4215-bf2e-90cf6d661a08","category":"食","date":"2020-03-14","amount":683,"description":"Poutine"},{"uuid":"6dd98073-bb11-4775-aa24-ac3370efecb2","category":"食","date":"2020-03-15","amount":194,"description":"Massaman Curry"},{"uuid":"b160181d-f958-4c53-aa7b-c08c26167e7c","category":"食","date":"2020-03-16","amount":1745,"description":"Philadelphia Maki"},{"uuid":"b0a50bd8-31fa-4915-b650-2ecf7f013c06","category":"食","date":"2020-03-18","amount":1168,"description":"Teriyaki Chicken Donburi"},{"uuid":"74fcce34-02b2-4f7e-b593-bc8bdbf5d0c5","category":"行","date":"2020-03-19","amount":215,"description":"計程車"},{"uuid":"9ec86464-be7d-4e11-ae42-56aae4fb023d","category":"住","date":"2020-03-19","amount":1989,"description":"table"},{"uuid":"d358038b-ede4-43cf-88c1-ffcb673e3809","category":"食","date":"2020-03-20","amount":313,"description":"Poke"},{"uuid":"233f68f7-d2cb-49ff-ae21-4d7d256bdc21","category":"食","date":"2020-03-21","amount":1582,"description":"Arepas"},{"uuid":"bce60f2c-791f-4097-abf1-3bbc74fdc3d8","category":"衣","date":"2020-03-21","amount":897,"description":"Effertz, Auer and Tremblay"},{"uuid":"d6d9e2d4-ebba-45f6-8a3c-d62daef4a2fa","category":"育","date":"2020-03-23","amount":1688,"description":"學費"},{"uuid":"f2395b18-69c9-4c36-9f81-e31a9615e3d6","category":"食","date":"2020-03-23","amount":515,"description":"Katsu Curry"},{"uuid":"44744484-ebad-4c39-a066-5211816d5406","category":"衣","date":"2020-03-24","amount":854,"description":"Schaden-Schaefer"},{"uuid":"9ff70e20-56fa-401c-a6f3-05146bb07fe9","category":"行","date":"2020-03-25","amount":1077,"description":"修車"},{"uuid":"a5510675-24d1-4fea-9418-270868fd1924","category":"食","date":"2020-03-25","amount":904,"description":"Stinky Tofu"},{"uuid":"fb47ec46-a688-4345-9a10-03bcbb364257","category":"食","date":"2020-03-26","amount":1337,"description":"Philadelphia Maki"},{"uuid":"39424ea8-b03f-4c48-b143-cb88a026c1d0","category":"食","date":"2020-03-27","amount":327,"description":"Linguine with Clams"},{"uuid":"a312bc9f-4b7c-4687-9bae-2e0aa32b7fad","category":"食","date":"2020-03-28","amount":1143,"description":"Tacos"},{"uuid":"03469bbc-fdc8-4007-8da8-655f5e817632","category":"食","date":"2020-03-28","amount":605,"description":"French Toast"},{"uuid":"97d55b41-cdb5-4b0c-87ae-1d227660b43d","category":"行","date":"2020-03-29","amount":487,"description":"停車費"},{"uuid":"5ea92912-71e3-4779-bc5f-93ae3c0224ff","category":"行","date":"2020-03-30","amount":747,"description":"停車費"},{"uuid":"6adf724b-c31c-44d2-8072-4ebcc835cf21","category":"住","date":"2020-03-30","amount":1501,"description":"futon"},{"uuid":"aa2ebb17-eb12-4f9f-9205-37b9112afff5","category":"樂","date":"2020-03-31","amount":1210,"description":"手遊課金"},{"uuid":"71e25827-515f-4c77-adbc-6399843c5fb6","category":"食","date":"2020-03-31","amount":1318,"description":"Barbecue Ribs"},{"uuid":"9d1c9df5-ff80-4318-881e-70b1d4ccec45","category":"食","date":"2020-03-31","amount":1198,"description":"Tiramisù"},{"uuid":"525c06fa-a1e8-4050-9717-deebd8448f1b","category":"食","date":"2020-04-01","amount":622,"description":"Risotto with Seafood"},{"uuid":"ebe6a7e9-5991-40b2-825d-a615c697b68e","category":"衣","date":"2020-04-01","amount":1188,"description":"Kovacek, Kris and Bogisich"},{"uuid":"543bef6d-f51a-4706-a51d-11759f56fbe9","category":"食","date":"2020-04-02","amount":1384,"description":"Souvlaki"},{"uuid":"39f8427e-d5cb-471a-95fc-32e88bca5f1a","category":"食","date":"2020-04-02","amount":1760,"description":"Hummus"},{"uuid":"65d4d558-f208-4e23-83cf-31a6f2d3338a","category":"樂","date":"2020-04-03","amount":1335,"description":"手遊課金"},{"uuid":"d171d22b-b4b9-4a34-a4ca-af45daec430f","category":"育","date":"2020-04-05","amount":537,"description":"買書"},{"uuid":"1e48b2d6-0f49-4514-a874-22baa2990568","category":"食","date":"2020-04-07","amount":1927,"description":"Bunny Chow"},{"uuid":"391762cb-0ab7-4140-8746-392d613bd1d6","category":"衣","date":"2020-04-07","amount":694,"description":"Kling Inc"},{"uuid":"d14c8dc1-1eb3-45fd-bd09-3a1877707eff","category":"食","date":"2020-04-09","amount":174,"description":"Massaman Curry"},{"uuid":"8ec6a50a-9208-4cae-bf90-d1ebdbc7ab6b","category":"衣","date":"2020-04-09","amount":1593,"description":"Stracke, O'Kon and Rohan"},{"uuid":"e7f7787d-9492-4de8-9dda-9728a4648243","category":"食","date":"2020-04-10","amount":1886,"description":"Som Tam"},{"uuid":"6e181333-defa-4f4c-85ed-a7d17d0b4f9e","category":"食","date":"2020-04-10","amount":902,"description":"Ebiten maki"},{"uuid":"079ca949-fc13-4e18-8a9e-0a58140e1581","category":"食","date":"2020-04-11","amount":182,"description":"Chicken Parm"},{"uuid":"3af6de1b-35b2-4d84-a5d1-d869215c7fd1","category":"食","date":"2020-04-11","amount":1995,"description":"Meatballs with Sauce"},{"uuid":"f0c04739-9e88-4e5f-a981-1395abc06c6c","category":"住","date":"2020-04-11","amount":619,"description":"bedside table"},{"uuid":"4753aedc-d33d-4846-a29f-cc2dcb8dfc5e","category":"食","date":"2020-04-12","amount":1845,"description":"Peking Duck"},{"uuid":"15d94948-72bb-4acf-a71d-69ca28e5563a","category":"育","date":"2020-04-12","amount":1746,"description":"買書"},{"uuid":"c471057b-3ff2-4743-86a1-c7f4d56fb70f","category":"育","date":"2020-04-12","amount":1388,"description":"買書"},{"uuid":"7c990079-264d-4b7e-ad22-70e920308b54","category":"食","date":"2020-04-13","amount":1308,"description":"Seafood Paella"},{"uuid":"b4bd9ad5-5fa0-47fe-bf50-a9fe52a6873a","category":"食","date":"2020-04-14","amount":1430,"description":"French Toast"},{"uuid":"dea8948b-f913-42b9-a6b2-497a21ff2574","category":"食","date":"2020-04-16","amount":1449,"description":"Katsu Curry"},{"uuid":"9200f148-26b8-43d6-a958-5378431130cf","category":"行","date":"2020-04-18","amount":502,"description":"修車"},{"uuid":"b23458dd-5da7-4ee2-a7cc-613b37e70b59","category":"食","date":"2020-04-18","amount":252,"description":"Seafood Paella"},{"uuid":"abaea3ef-b518-4edc-9d84-4da16ab1518a","category":"住","date":"2020-04-19","amount":157,"description":"floor lamp"},{"uuid":"0aa170ad-b7cb-44a8-aee3-6ea1d71bffdc","category":"食","date":"2020-04-19","amount":696,"description":"Mushroom Risotto"},{"uuid":"cc0489d5-8926-449e-aa19-0dcb22a65e2d","category":"食","date":"2020-04-20","amount":671,"description":"Bunny Chow"},{"uuid":"988c8fbc-4f10-4776-a5b8-a85c4bea44ae","category":"行","date":"2020-04-21","amount":936,"description":"計程車"},{"uuid":"522c2fdc-d2bd-4705-ad2f-4b6df65004be","category":"樂","date":"2020-04-21","amount":978,"description":"旅行"},{"uuid":"536a89ca-3fdf-4938-bba9-646ceae9c08f","category":"食","date":"2020-04-21","amount":1579,"description":"French Toast"},{"uuid":"dbbd8d09-c4a3-43df-9001-e5474422035f","category":"食","date":"2020-04-22","amount":1344,"description":"Chicken Milanese"},{"uuid":"72e062c3-7bc0-4eb1-8252-1557c5b5a54f","category":"食","date":"2020-04-23","amount":538,"description":"Massaman Curry"},{"uuid":"27cfc05d-8107-43b8-aacc-5237164c19f5","category":"行","date":"2020-04-23","amount":322,"description":"計程車"},{"uuid":"b3f29e0f-1960-48e8-a783-3ae275b3db13","category":"住","date":"2020-04-24","amount":1407,"description":"sofa"},{"uuid":"88767df4-e4cf-4b27-89a1-379476f6ef26","category":"食","date":"2020-04-24","amount":1379,"description":"Salmon Nigiri"},{"uuid":"a4749ab8-3e5f-4646-9c76-8982cc1fe7bd","category":"行","date":"2020-04-25","amount":153,"description":"修車"},{"uuid":"779d4742-ed95-4e79-9a94-53f9a7396801","category":"食","date":"2020-04-26","amount":1603,"description":"Barbecue Ribs"},{"uuid":"5df0265c-46d1-48f3-acb0-510a56c0de13","category":"食","date":"2020-04-26","amount":869,"description":"California Maki"},{"uuid":"e99c99bb-7785-4bd0-b8b4-e6664ecdf02b","category":"食","date":"2020-04-27","amount":670,"description":"Stinky Tofu"},{"uuid":"ebe9ffe5-550b-49ac-a1d5-4bfecb8e38dd","category":"食","date":"2020-04-27","amount":1571,"description":"Katsu Curry"},{"uuid":"7f14d32a-c1d9-4a59-8dee-902956a2fc61","category":"食","date":"2020-04-28","amount":691,"description":"Tuna Sashimi"},{"uuid":"d08b2f64-6c66-46d0-b844-4957049b324a","category":"食","date":"2020-04-29","amount":1692,"description":"Meatballs with Sauce"},{"uuid":"919a4a71-a925-4612-bdc2-9be1d09f8f58","category":"育","date":"2020-04-29","amount":1773,"description":"買書"},{"uuid":"6f55acc2-a0fc-4dc9-a42b-632a9501bf0b","category":"樂","date":"2020-04-29","amount":551,"description":"手遊課金"},{"uuid":"23b7e5ec-85ae-4b4d-8043-a50ed1d2733d","category":"食","date":"2020-04-30","amount":1018,"description":"Risotto with Seafood"},{"uuid":"7a9abd70-372e-49be-9ef3-04a125cbd7da","category":"住","date":"2020-04-30","amount":489,"description":"stool"},{"uuid":"b7f66407-c100-4780-b4a2-09cf7c27b116","category":"食","date":"2020-04-30","amount":1513,"description":"Ricotta Stuffed Ravioli"},{"uuid":"1fb617e1-eaab-4dc6-8c08-0c5ad439a7d8","category":"衣","date":"2020-05-02","amount":1122,"description":"Hills Inc"},{"uuid":"934055fd-38b4-4d98-a6ad-a81596e4507e","category":"樂","date":"2020-05-04","amount":1420,"description":"看電影"},{"uuid":"247edf91-3f4c-485b-8683-2c891a246573","category":"食","date":"2020-05-05","amount":416,"description":"Chicken Wings"},{"uuid":"abfb71d9-d366-470c-9cb6-da7cc966b25f","category":"育","date":"2020-05-08","amount":243,"description":"學費"},{"uuid":"d0cb738a-d546-45ef-be58-12b0b3649131","category":"食","date":"2020-05-09","amount":185,"description":"Pasta Carbonara"},{"uuid":"3a325900-b192-432e-a42a-fde8ec0d8780","category":"食","date":"2020-05-09","amount":1094,"description":"Pasta Carbonara"},{"uuid":"02a969db-ce65-4076-af02-e99c93c1c98f","category":"食","date":"2020-05-09","amount":497,"description":"Salmon Nigiri"},{"uuid":"a3a9e279-8a20-4463-a64b-3956941c5faa","category":"食","date":"2020-05-10","amount":135,"description":"Stinky Tofu"},{"uuid":"127e8080-72ff-4778-945e-ee99547675d8","category":"食","date":"2020-05-10","amount":645,"description":"Mushroom Risotto"},{"uuid":"f7a93ef4-8aea-4378-a44c-7450b09e2dbf","category":"食","date":"2020-05-11","amount":681,"description":"Peking Duck"},{"uuid":"f65076a3-9e93-463b-af07-4a89561a9b6d","category":"行","date":"2020-05-12","amount":1060,"description":"計程車"},{"uuid":"e667d276-dc53-43a4-82cd-ef81e07f0dea","category":"食","date":"2020-05-15","amount":939,"description":"Fettuccine Alfredo"},{"uuid":"21299133-0131-4822-baf9-a5e298bcfe62","category":"衣","date":"2020-05-15","amount":1465,"description":"Larkin-Koepp"},{"uuid":"4b301a80-78b6-459f-914b-13333e73edfe","category":"食","date":"2020-05-17","amount":1323,"description":"French Fries with Sausages"},{"uuid":"1634ee7b-e6c9-453c-979f-d470394f7f43","category":"食","date":"2020-05-17","amount":1073,"description":"Chicken Parm"},{"uuid":"d9da2a0c-079f-44f4-af36-ba9db692f76c","category":"行","date":"2020-05-17","amount":865,"description":"停車費"},{"uuid":"7edb6864-41d2-4af1-b3df-11977f686e8a","category":"食","date":"2020-05-18","amount":104,"description":"Som Tam"},{"uuid":"7761b8c0-a97c-44f6-a3bf-a657409e3da6","category":"衣","date":"2020-05-18","amount":894,"description":"Oberbrunner Inc"},{"uuid":"3934a793-9b21-4772-8744-ebdcac5cec1d","category":"食","date":"2020-05-19","amount":1296,"description":"Massaman Curry"},{"uuid":"23313644-3dae-44f4-84f2-3673281ce9f8","category":"食","date":"2020-05-20","amount":1199,"description":"Chicken Wings"},{"uuid":"fc397070-2d30-47a4-b4a9-896ef7860baa","category":"育","date":"2020-05-21","amount":103,"description":"買書"},{"uuid":"86c4a54c-5f29-4393-aca4-bada7ff311db","category":"食","date":"2020-05-22","amount":1149,"description":"Poke"},{"uuid":"b0e609d6-7856-4c0e-babe-7427fb8cbedc","category":"食","date":"2020-05-22","amount":349,"description":"Fish and Chips"},{"uuid":"422bfe8b-e7a6-4fe7-8348-c97315357bcc","category":"食","date":"2020-05-22","amount":568,"description":"Hummus"},{"uuid":"0d78aab8-120a-4a38-bc16-f010dce1e75f","category":"育","date":"2020-05-23","amount":1833,"description":"學費"},{"uuid":"3b83be5b-5446-461e-8fc7-1b73f5e41d57","category":"食","date":"2020-05-23","amount":324,"description":"Fish and Chips"},{"uuid":"e181effa-2b9a-4d57-802b-bed567150552","category":"食","date":"2020-05-24","amount":1340,"description":"Barbecue Ribs"},{"uuid":"76f7852b-80ce-4926-885b-d73d350b2d9d","category":"行","date":"2020-05-26","amount":483,"description":"悠遊卡"},{"uuid":"35503103-d977-4ea5-ad82-426859465eb9","category":"食","date":"2020-05-27","amount":1329,"description":"Ebiten maki"},{"uuid":"251b1b2c-57fb-44b8-b28e-28bb6bef57c1","category":"食","date":"2020-05-31","amount":876,"description":"Tacos"},{"uuid":"4776b17a-c6a1-4e4f-8622-3e3dccb12757","category":"住","date":"2020-06-01","amount":448,"description":"drawers"},{"uuid":"8c7e34a2-5693-44e6-84b1-7d65004c83a8","category":"食","date":"2020-06-02","amount":371,"description":"Chicken Milanese"},{"uuid":"ce1c21bb-2f3a-460c-8742-939b891a2816","category":"食","date":"2020-06-02","amount":196,"description":"Linguine with Clams"},{"uuid":"72f6a1f0-53e0-42a6-bae2-b1284c98efd0","category":"衣","date":"2020-06-04","amount":1529,"description":"Larkin-Maggio"},{"uuid":"845727da-7002-45fd-8525-87178fdf7be2","category":"食","date":"2020-06-05","amount":917,"description":"Peking Duck"},{"uuid":"c3118d0f-15c3-4c1c-92ea-a70c72064411","category":"行","date":"2020-06-05","amount":714,"description":"悠遊卡"},{"uuid":"f5967f29-da9f-4336-8877-70a8f873c074","category":"食","date":"2020-06-05","amount":1425,"description":"Risotto with Seafood"},{"uuid":"0d00cbaa-f19b-4eea-a37b-7511cd261653","category":"食","date":"2020-06-06","amount":1040,"description":"Ricotta Stuffed Ravioli"},{"uuid":"f63f107f-2870-4e63-ba8c-4c7421c82626","category":"食","date":"2020-06-06","amount":297,"description":"Tiramisù"},{"uuid":"865b1cb4-fba9-476d-aa83-9a405752b581","category":"衣","date":"2020-06-07","amount":1431,"description":"Kertzmann, Wilkinson and Aufderhar"},{"uuid":"22647e92-19d6-4c3b-b002-71853596d711","category":"食","date":"2020-06-08","amount":1176,"description":"Scotch Eggs"},{"uuid":"58cd4deb-c089-4af7-8f10-4f4f128fa9dd","category":"食","date":"2020-06-08","amount":1108,"description":"Fish and Chips"},{"uuid":"f91dc283-51ed-4687-a6c0-526614d82960","category":"食","date":"2020-06-09","amount":559,"description":"Pho"},{"uuid":"3a98f27f-b101-4d15-b140-24e1534218b1","category":"食","date":"2020-06-09","amount":1460,"description":"Bunny Chow"},{"uuid":"842f5b61-3d61-44f6-9c93-9784cc3bbd18","category":"食","date":"2020-06-10","amount":1744,"description":"Stinky Tofu"},{"uuid":"9d90ef32-c7d9-433a-9094-0924b078d925","category":"食","date":"2020-06-10","amount":1050,"description":"Fish and Chips"},{"uuid":"2b8075a5-7d5e-446d-a704-7e83dcb20f6b","category":"住","date":"2020-06-12","amount":290,"description":"chair"},{"uuid":"62497fba-1452-474f-b06f-05b0b7a7d9ff","category":"食","date":"2020-06-12","amount":1500,"description":"Ricotta Stuffed Ravioli"},{"uuid":"668cb1d2-d384-4084-a201-5a67b8598800","category":"食","date":"2020-06-13","amount":422,"description":"Risotto with Seafood"},{"uuid":"d689d846-4130-404b-ba1b-13e580929a42","category":"行","date":"2020-06-14","amount":1284,"description":"停車費"},{"uuid":"b6ef5819-ff06-4e2b-80fb-3571494455ad","category":"食","date":"2020-06-17","amount":1938,"description":"Tacos"},{"uuid":"03512e2d-b602-4bfb-853f-1d2d1a21bd62","category":"食","date":"2020-06-19","amount":1263,"description":"Pizza"},{"uuid":"ef5132f8-d72d-4424-a22c-e374700b0075","category":"食","date":"2020-06-20","amount":567,"description":"Chicken Milanese"},{"uuid":"e445ef90-ac0a-4694-8a80-253855866b00","category":"住","date":"2020-06-20","amount":1840,"description":"dresser"},{"uuid":"0a62945b-d18f-4c44-a488-85bac152c9c5","category":"育","date":"2020-06-20","amount":1389,"description":"買書"},{"uuid":"e0e86edf-7065-407c-9788-f177eb17cd7c","category":"食","date":"2020-06-21","amount":453,"description":"Meatballs with Sauce"},{"uuid":"1eea780f-b082-4bf6-acfe-85daf3e6c729","category":"食","date":"2020-06-21","amount":963,"description":"Bunny Chow"},{"uuid":"eafa2f95-6f2a-4d73-ba17-9591bbc5f164","category":"食","date":"2020-06-21","amount":1903,"description":"Pierogi"},{"uuid":"0ca49a1e-8da7-4adf-bf1e-97290f12eac2","category":"食","date":"2020-06-22","amount":1492,"description":"Chicken Fajitas"},{"uuid":"7e4f324b-ef69-4f70-982c-dd747ae40113","category":"食","date":"2020-06-23","amount":1538,"description":"Pizza"},{"uuid":"c94ca400-73e3-4ae9-878f-67f752cb0971","category":"食","date":"2020-06-24","amount":1523,"description":"Bunny Chow"},{"uuid":"fe825982-1d5c-49ce-b9e0-01e22c4a1d9d","category":"食","date":"2020-06-26","amount":1394,"description":"Peking Duck"},{"uuid":"13278129-8b75-446a-b0a0-a173898fc0fb","category":"樂","date":"2020-06-26","amount":1882,"description":"旅行"},{"uuid":"538f1f9c-6b61-478a-9150-af8c6a6acf5b","category":"住","date":"2020-06-27","amount":1565,"description":"bedside table"},{"uuid":"a2083277-4fd5-4b5a-93a9-2806af8705f0","category":"食","date":"2020-06-27","amount":1284,"description":"Salmon Nigiri"},{"uuid":"38f794ca-9e62-487a-8d79-fda9a1e27558","category":"食","date":"2020-06-29","amount":591,"description":"Sushi"},{"uuid":"c55ee84d-fd77-4077-b193-e1b3410f7856","category":"行","date":"2020-06-30","amount":1174,"description":"修車"},{"uuid":"05a33c6f-4976-4808-acd6-7b394e145351","category":"食","date":"2020-06-30","amount":1013,"description":"California Maki"},{"uuid":"fed1adc4-b008-4219-a1ac-73d62c04744b","category":"食","date":"2020-07-02","amount":1121,"description":"Stinky Tofu"},{"uuid":"fc795e39-ce16-4b2e-821a-637b5c7f3925","category":"育","date":"2020-07-03","amount":148,"description":"學費"},{"uuid":"d27c3385-9696-4784-9b37-b672bc75718b","category":"食","date":"2020-07-03","amount":727,"description":"Seafood Paella"},{"uuid":"92fc6daf-69d6-4e4e-8469-6861cd10e9aa","category":"食","date":"2020-07-03","amount":1069,"description":"Chicken Wings"},{"uuid":"87a82ba9-de78-423f-9b87-7a81c7385032","category":"食","date":"2020-07-03","amount":634,"description":"Pasta with Tomato and Basil"},{"uuid":"9c0a8a88-e25c-418c-8796-7fff57eeb685","category":"食","date":"2020-07-04","amount":1394,"description":"Chilli con Carne"},{"uuid":"d058dbfb-c3df-4c3a-b1b5-9ef0df9e31ba","category":"食","date":"2020-07-05","amount":1382,"description":"Meatballs with Sauce"},{"uuid":"acf2bbea-f9ca-418f-b9a1-2dd726f8b023","category":"食","date":"2020-07-06","amount":1272,"description":"Pho"},{"uuid":"886cbab0-3c23-4db3-aa70-fe4eac5b5811","category":"食","date":"2020-07-06","amount":904,"description":"Caprese Salad"},{"uuid":"b3843eb1-aace-4721-a0ad-6ecd6c5aca19","category":"食","date":"2020-07-06","amount":1967,"description":"Cauliflower Penne"},{"uuid":"fc2dfcee-33ad-4935-aab6-c6cf3c46a21c","category":"食","date":"2020-07-07","amount":552,"description":"Scotch Eggs"},{"uuid":"3dbad950-e377-4950-a484-b0f8a305bc6e","category":"食","date":"2020-07-08","amount":1322,"description":"Tiramisù"},{"uuid":"dddc62c2-3f10-4316-9a14-84a0f6c64eb2","category":"育","date":"2020-07-08","amount":1444,"description":"買書"},{"uuid":"7337d1b0-f549-4e6b-8bf2-2bcc432f12cd","category":"食","date":"2020-07-08","amount":1523,"description":"Pasta with Tomato and Basil"},{"uuid":"a9b8da10-3f6b-44d1-b875-f0e14d440cdb","category":"食","date":"2020-07-09","amount":1674,"description":"Pork Sausage Roll"},{"uuid":"ea2b678a-17dd-4369-a9bc-c87eed55b668","category":"行","date":"2020-07-10","amount":541,"description":"悠遊卡"},{"uuid":"9efe8ebf-2e13-4633-a543-239e3c00b2aa","category":"食","date":"2020-07-10","amount":719,"description":"Chicken Parm"},{"uuid":"6d63fa79-20cd-4470-b30a-313ea648d175","category":"食","date":"2020-07-11","amount":807,"description":"Chilli con Carne"},{"uuid":"c8bbc37a-a693-4d38-8201-18c5d3840105","category":"衣","date":"2020-07-11","amount":972,"description":"Predovic Inc"},{"uuid":"05e1292e-d65c-4a46-875f-5c83015acb3d","category":"衣","date":"2020-07-12","amount":1459,"description":"Pfeffer-Wyman"},{"uuid":"6af3bb4e-3e99-4ed5-8aa4-326f9b23fc9c","category":"育","date":"2020-07-12","amount":1294,"description":"學費"},{"uuid":"d10d9eda-f08b-4362-804d-c20f531f97bb","category":"食","date":"2020-07-13","amount":1359,"description":"Chicken Wings"},{"uuid":"63ebf0c1-ed3f-4028-bb63-411447b20fe2","category":"食","date":"2020-07-13","amount":1077,"description":"Tuna Sashimi"},{"uuid":"df205406-d2f4-48f8-81dc-3c7b641636c4","category":"食","date":"2020-07-13","amount":1246,"description":"Fish and Chips"},{"uuid":"217c8145-d771-4456-ad70-85b08ff85ee1","category":"住","date":"2020-07-14","amount":598,"description":"drawers"},{"uuid":"8d5db25b-9d25-42d9-a241-e335c7d1001b","category":"食","date":"2020-07-14","amount":367,"description":"Mushroom Risotto"},{"uuid":"6baac324-069f-41c7-b890-0ba7e2eec87f","category":"樂","date":"2020-07-15","amount":1586,"description":"手遊課金"},{"uuid":"a6334b76-e779-42e2-87bf-1c1d1dec0205","category":"食","date":"2020-07-15","amount":1718,"description":"Caesar Salad"},{"uuid":"322b9eb9-8c1b-4293-816d-d20a1ef1aeac","category":"樂","date":"2020-07-15","amount":1057,"description":"旅行"},{"uuid":"336ce4e3-a7aa-42ab-9286-256b2eeeaefb","category":"食","date":"2020-07-16","amount":1799,"description":"Poke"},{"uuid":"3917f785-c0e6-4a28-b69b-eb715a4cb16b","category":"食","date":"2020-07-16","amount":1515,"description":"Pasta and Beans"},{"uuid":"6c816007-f800-4d4e-9459-77d46d425c2e","category":"食","date":"2020-07-18","amount":408,"description":"Lasagne"},{"uuid":"230e768e-1c68-4dc9-b77f-010812631dd4","category":"食","date":"2020-07-19","amount":805,"description":"Barbecue Ribs"},{"uuid":"ee6d4e0a-b9d6-45c8-bc41-35cc1620ddac","category":"食","date":"2020-07-19","amount":558,"description":"Chicken Parm"},{"uuid":"437800fb-f376-4a24-a952-fee8e65a448b","category":"樂","date":"2020-07-20","amount":511,"description":"旅行"},{"uuid":"b516dd0e-77e4-45ea-a5f6-8f0eb8a9fc97","category":"樂","date":"2020-07-22","amount":1775,"description":"手遊課金"},{"uuid":"a2f20b7f-fca4-40e3-9576-5ebf36268487","category":"食","date":"2020-07-22","amount":1420,"description":"Caesar Salad"},{"uuid":"28eff2c7-a63a-4232-b666-b2b03b516ea7","category":"衣","date":"2020-07-23","amount":1070,"description":"Kerluke and Sons"},{"uuid":"ce7c5e30-3d89-406a-a31e-106ab2262392","category":"食","date":"2020-07-23","amount":1575,"description":"Fettuccine Alfredo"},{"uuid":"63ab91a8-5473-4a1a-8156-0f829aaadc3d","category":"食","date":"2020-07-23","amount":966,"description":"Pasta Carbonara"},{"uuid":"5a71da4d-d459-4195-a705-37462132b521","category":"食","date":"2020-07-23","amount":867,"description":"Som Tam"},{"uuid":"50895dd0-cf51-4d20-834c-0325fec2d7d0","category":"食","date":"2020-07-25","amount":1054,"description":"Caprese Salad"},{"uuid":"91df5189-0a3a-4b05-9e19-7604d4785dc8","category":"食","date":"2020-07-25","amount":1444,"description":"Chicken Parm"},{"uuid":"294b75e1-2238-4fb4-a7b2-1da0523dc830","category":"住","date":"2020-07-28","amount":725,"description":"stool"},{"uuid":"e3028842-a047-4bfc-a664-3b8fd1ae59d6","category":"食","date":"2020-07-28","amount":108,"description":"California Maki"},{"uuid":"204c92ab-88ef-47e5-bd97-9713977d5041","category":"食","date":"2020-07-29","amount":741,"description":"Som Tam"},{"uuid":"c962c88e-c589-4ca2-8e2a-e42094e0f2b8","category":"食","date":"2020-07-29","amount":1321,"description":"Lasagne"},{"uuid":"2e443217-8b51-49fd-a5fa-9f3278b6b4d7","category":"食","date":"2020-07-29","amount":275,"description":"Poke"},{"uuid":"b510ab70-023d-4fa7-b90b-b72dfe599e91","category":"食","date":"2020-07-30","amount":1765,"description":"French Toast"},{"uuid":"b81ed0e5-7827-40c0-a43b-bd255bf7d7ae","category":"食","date":"2020-07-30","amount":1248,"description":"Sushi"},{"uuid":"5cb31b74-dddb-481d-abb1-9c5a730cf661","category":"食","date":"2020-07-31","amount":1397,"description":"Linguine with Clams"},{"uuid":"7f01290d-f95c-43e5-b68c-2cb80e75e8fc","category":"食","date":"2020-07-31","amount":492,"description":"Som Tam"}]
    
    
    //   localStorage.setItem('records',JSON.stringify(sampleData) )
    // }
  })
    
    