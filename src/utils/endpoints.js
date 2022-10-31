const axios = require('axios');

const base_url = "https://bills9ja.herokuapp.com";
const pexcel_slug = "pexcelservices";


function siteDetails (){
  let pexcelDetails = localStorage.getItem('pexcelservices');
  if(!pexcelDetails){
    let pexcelservicesData = {};
    localStorage.setItem('pexcelservices', JSON.stringify(pexcelservicesData))
  } 
}
siteDetails();

class AccountApi{

  //login
  login = async(user, password) =>{
    const url = `${base_url}/account/login`;
    
    const payload = {
      "user": user,
      "password": password
    } 

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    }
    
    catch (error) {
      return await error.response.data
    }
  }
  //end login

  //register
  register = async(account_type, first_name, last_name, email, phone_number, password, referral_id, callback_url) =>{
    const url = `${base_url}/account/register`;
    
    const payload = {
      "account_type": account_type,
      "first_name": first_name,
      "last_name": last_name,
      "email":email,
      "phone_number": phone_number,
      "password": password,
      "referral_id": referral_id,
      "callback_url": callback_url
      
    } 

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end register

  //createReset
  createReset = async(reset_type, verify_with, user, country_id) =>{
    const url = `${base_url}/account/create-reset`;
    
    const payload = {
      "reset_type": reset_type,
      "verify_with": verify_with,
      "user": user,
      // "new": new,
      "country_id": country_id,
      
    } 

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end createReset


  //completeReset
  completeReset = async(reset_type, verify_with, user, country_id, token) =>{
    const url = `${base_url}/account/complete-reset`;
    
    const payload = {
      "reset_type": reset_type,
      "verify_with": verify_with,
      "user": user,
      // "new": new,
      "country_id": country_id,
      "token": token,
      
    } 

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end completeReset


  //changeAccountType
  changeAccountType = async(account_type, callback_url) =>{
    const url = `${base_url}/account/change-account-type`;
    
    const payload = {
      "account_type": account_type,
      "callback_url": callback_url
    } 

    try {
      const response = await axios.put(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end changeAccountType



  //changeAccount
  changeAccount = async(first_name, last_name, gender, country, state, city, address, transaction_pin, password) =>{
    const url = `${base_url}/account`;
    
    const payload = {
      "first_name": first_name,
      "last_name": last_name,
      "gender": gender,
      "country": country,
      "state": state,
      "city": city,
      "address": address,
      "transaction_pin": transaction_pin,
      "password": password
    } 

    try {
      const response = await axios.put(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end changeAccount



  //get Account
  account = async() =>{
    const url = `${base_url}/account`;
    try {
      const response = await axios.get(url, payload)
      const data = await response.data
      return await data
    } 
    
    catch (error) {
      return await error.response.data
    }
  }
  //end get Account

}



class AirtimeApi{

  //get availableAirtime
  availableAirtime = async() =>{
    const url = `${base_url}/airtime/available-airtimes`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    }
    
    catch (error) {
      return await error.response.data
    }
  }
  //end get availableAirtime



  //get buyAirtime
  buyAirtime = async(airtime, amount, phone_numbers, scheduled_time) =>{
    const url = `${base_url}/airtime/buy-airtime`;
    const payload ={
      "airtime": airtime,
      "amount": amount,
      "phone_numbers": phone_numbers,
      "scheduled_time": scheduled_time
    }

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    }
    
    catch (error) {
      return await error.response.data
    }
  }
  //end get buyAirtime



  //get airtimeNetwork
  airtimeNetwork = async() =>{
    const url = `${base_url}/airtime/networks`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    }
    
    catch (error) {
      return await error.response.data
    }
  }
  //end get airtimeNetwork

}


class Wallet{
  
  //fundwallet
  fundWallet = async () => {
    const url = `${base_url}/wallet/fund-wallet`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end fundwallet


    
  //postFundwallet
  postFundWallet = async (amount, callback_url) => {
    const url = `${base_url}/wallet/fund-wallet`;
    const payload = {
      "amount": amount,
      "callback_url": callback_url
    }

    try {
      const response = await axios.post(url, payload)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end postFundwallet
}


class Transaction{

  //transaction
  transaction= async() =>{
    const url = `${base_url}/transaction`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end transaction


  //transactionId
  transactionId= async(id) =>{
    const url = `${base_url}/transaction${id}`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end transactionId


  //verify monnify transaction
  verifyMonnifyTransaction= async() =>{
    const url = `${base_url}/transaction/verify-monnify-transaction`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end verify monnify transaction


  //postverify monnify transaction
  postVerifyMonnifyTransaction= async(payload) =>{
    const url = `${base_url}/transaction/verify-monnify-transaction`;
    const data = {
      "payload": payload
    }

    try {
      const response = await axios.post(url, data)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end verify monnify transaction


  //verifyPaystackTransaction
  verifyPaystackTransaction= async() =>{
    const url = `${base_url}/transaction/verify-paystack-transaction`;

    try {
      const response = await axios.get(url)
      const data = await response.data
      return await data
    } catch (error) {
      return error.response.data
    }
  }
  //end verifyPaystackTransaction



}

// const accountApi = new AccountApi()
// console.log(accountApi)

const airtimeApi = new AirtimeApi()
console.log(airtimeApi);

let airtime = airtimeApi.airtimeNetwork()
airtime.then((result)=>{
  console.log(`Response: ${JSON,stringify(result)}`)
}).catch((error)=>{
  console.log(`error ${error}`)
})