let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeAJAXCall(methodType, url, callback, async, data = null) {
   let xhr = new XMLHttpRequest()
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 200 || xhr.status === 201) {
            callback(xhr.responseText);
         } else if (xhr.status >= 400) {
            console.log("Client error")
         }
      }
   }
   xhr.open(methodType, url, async);
   if (data) {
      console.log(JSON.stringify(data))
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.send(JSON.stringify(data))
   } else
      xhr.send();
   console.log(methodType)

}
// For "GET"
const getUrl = "http://localhost:3000/employees/3"

const getUserDetails = (data) => {
   console.log("Get user data:- " + data);
}

makeAJAXCall("GET", getUrl, getUserDetails, true);


// For Delete call
const deleteURL = "http://localhost:3000/employees/3"
function deleteUserDetails(data) {
   console.log("Delete User data : " + data);
}

makeAJAXCall("DELETE", deleteURL, deleteUserDetails, false);

// For Post Call

const postURL = "http://localhost:3000/employees/"
const empData = { "name": "Elon Musk", "salary": "500000" }
function userDataAdded(data) {
   console.log("User added: " + data)
}

makeAJAXCall("POST", postURL, userDataAdded, true, empData)