const token = localStorage.getItem("token");

class Services {
    GetResource = async (url = "") => {
        let res;
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
            throw new Error("чел пиши нормально");
        }
        return await res.json();
    }

    SendResource = async (url = "", body, header = "") => {
        let res;
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
            throw new Error("Error check");
        }
        return await res.json();
    }
}

export default Services;
