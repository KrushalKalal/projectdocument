const genderList = "https://shoppinghub-api.herokuapp.com/genderList"

console.log(genderList);


  const getGender = async() => {
   let response = await fetch(genderList,{method:'GET'})
   let data = await response.json()
   const gender_data = [];
   gender_data.push(data)
   console.log(gender_data);
    gender_data[0].map((item) => {    
        let element = document.createElement('option') 
        let text = document.createTextNode(item.gender_type) 
       element.appendChild(text) 
      element.value = item.gender_id 
    document.getElementById('genders').appendChild(element)
     
  })
 }
