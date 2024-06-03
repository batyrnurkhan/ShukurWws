const token = localStorage.getItem("token");

class Services {
  GetResource = async (url = "") => {
    let res;
    try {
      if (token !== "undefined" && token !== null && token !== "") {
        res = await fetch(`http://91.228.154.48:8000/${url}`, {
          headers: {
            Authorization: `Token ${token}`
          },
          //credentials: "include"
        });
      } else {
        res = await fetch(`http://91.228.154.48:8000/${url}`);
      }

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return await res.json();
    } catch (error) {
      throw new Error("Fetch error: " + error.message);
    }
  }

  SendResource = async (url = "", body, header = "") => {
    let res;
    try {
      if (token !== "undefined" && token !== null && token !== "") {
        res = await fetch(`http://91.228.154.48:8000/${url}`, {
          method: 'POST',
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          },
          body: body
          //credentials: "include"
        });
      } else {
        res = await fetch(`http://91.228.154.48:8000/${url}`, {
          method: 'POST',
          body: body,
          headers: {
            'Content-Type': 'application/json'
          },
        });
      }

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return await res.json();
    } catch (error) {
      throw new Error("Fetch error: " + error.message);
    }
  }
}

export default Services;
