document.addEventListener('DOMContentLoaded', function() {
  const inputForm = document.forms['item-form']
  const recordTemplate = document.querySelector('template#record')
  const recordsPanel = document.querySelector('#records-panel')
  let records = JSON.parse(localStorage.getItem('records')) //records to obj
  if (records === null) {
    records = []
  }
  //用records印出所有start
  records.forEach(acc => {
    let newRecord = document.createElement('tr')
    newRecord.innerHTML = recordTemplate.innerHTML

    let dDate = newRecord.querySelector('.display-date')
    let dCategory = newRecord.querySelector('.display-category')
    let dDesc = newRecord.querySelector('.display-description')
    let dAmount = newRecord.querySelector('.display-amount')

    dDate.textContent = acc.date
    dCategory.textContent = acc.category
    dDesc.textContent = acc.description
    dAmount.textContent = acc.amount

    recordsPanel.appendChild(newRecord)
  });
  //用records印出所有end

  inputForm.addEventListener('submit',function(e) {
    e.preventDefault()
    records.push(getFormData())
    localStorage.setItem('records', JSON.stringify(records)) //obj to string
    console.log(localStorage.getItem('records'))
    inputForm.reset()
    //新增一筆start----------
    let newRecord = document.createElement('tr')
    newRecord.innerHTML = recordTemplate.innerHTML

    let dDate = newRecord.querySelector('.display-date')
    let dCategory = newRecord.querySelector('.display-category')
    let dDesc = newRecord.querySelector('.display-description')
    let dAmount = newRecord.querySelector('.display-amount')

    dDate.textContent = formData.date
    dCategory.textContent = formData.category
    dDesc.textContent = formData.description
    dAmount.textContent = formData.amount

    recordsPanel.appendChild(newRecord)
    //------------新增一筆end
    console.log(newRecord)
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
  }
})
    
    