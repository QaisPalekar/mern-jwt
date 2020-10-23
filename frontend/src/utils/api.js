
const remoteUrl = "http://localhost:8082";

const  post = async (url, body) => {
    try {
        let response = await fetch(`${remoteUrl}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': `bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(body)
          });
        
        const result = await response.json();
        if(response.status === 200) {
            return result;
        } else {
            throw result;
        }
    } catch (error) {
        throw error;
    }
}

export default {
    post,
}