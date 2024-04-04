// A function to send a POST request with random data to the server  
async function sendRandomData() {  
    const randomData = {  
      id: Math.floor(Math.random() * 100),  
      message: "Random message",  
    };  
    
    try {  
      // Make a POST request to the server  
      const response = await fetch('http://localhost:3000/', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify(randomData),  
      });  
    
      // Parse the JSON response  
      const result = await response.json();  
    
      // Log the response or handle it as needed  
      console.log(result);  
      return result;  
    } catch (error) {  
      // Handle any errors that occur during the fetch  
      console.error('Error sending data:', error);  
    }  
  }  
    
  // Call the function to send data  
  sendRandomData();  
  