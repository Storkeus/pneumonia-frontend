export default class APIConnection {
    url = '';
    body = null;
    headers = { 'Access-Control-Allow-Origin': '*' };
    store = null;
    isBasicAuthorization = false;

    constructor(url) {
        this.url = url;
    }

    addHeader(name, value) {
        this.headers[name] = value;
        return this;
    }

    setBody(body, typeOfBody = 'json') {
        if (typeOfBody === 'json') {
            body = JSON.stringify(body);
            this.addHeader("Content-Type", "application/json");
        }

        if (typeOfBody === 'binary') {
            this.addHeader("Content-Type", "application/octet-stream");
        }


        this.body = body;

        return this;
    }

    authorizeBasic(email, password) {
        this.isBasicAuthorization = true;
        this.addHeader("Authorization", `Basic  ${btoa(`${email}:${password}`)}`);
        return this;
    }

    authorizeJWT(token) {
        this.addHeader("Authorization", `Bearer ${token}`);
        return this;
    }

    async connect(method) {
        try {

            const connection = await fetch(
                `${this.url}`,
                {
                    mode: "cors", // no-cors, *cors, same-origin
                    method: method,
                    headers: this.headers,
                    body: this.body
                }
            );

            if (!connection.ok) {
                if (connection.status === 401 && !this.isBasicAuthorization) {

                    // eslint-disable-next-line no-console
                    console.log('logout!');
                    // store.dispatch(logout);


                }
                throw new Error('Connection error');
            }

            const result = await connection.json();
            return result;
        } catch (error) {

            return false;
        }
    }

    connectPOST() {
        return this.connect('POST');
    }
    connectGET() {
        return this.connect('GET');
    }
    connectPUT() {
        return this.connect('PUT');
    }
    connectDELETE() {
        return this.connect('DELETE');
    }

}