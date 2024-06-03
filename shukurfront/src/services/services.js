const token = localStorage.getItem("token");

class Services {
    GetResource = async (url = "") => {
        try {
            let res;
            if (token && token !== "undefined" && token !== "") {
                res = await fetch(`http://91.228.154.48:8000/${url}`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
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

    SendResource = async (url = "", body) => {
        try {
            let res;
            if (token && token !== "undefined" && token !== "") {
                res = await fetch(`http://91.228.154.48:8000/${url}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            } else {
                res = await fetch(`http://91.228.154.48:8000/${url}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
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
