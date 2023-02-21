import axios from "axios";

export const GetBookPost = async (bid, uname ,bdays) => {
  //making json formart of header
  const data = {
    borrowingDays: bdays
  };
  try {
    const response = await axios.post(`http://localhost:8080/api/readerbook/addbyname/${bid}/${uname}`, data, {
      // passing in data in JSON format here
      headers: {
        "Content-Type": "application/json"
      }
    });
    const responseData = response.data;
    console.log("API success:", responseData);
  } catch (error) {
    console.error("API error:", error);
  }
};
