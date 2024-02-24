//task1
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }

}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404


//task2
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url)
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }

}

// 询问用户名，直到 github 返回一个合法的用户
async function demoGithubUser() {
    while (true) {
        try {
            let name = prompt("Enter a name?", "iliakan");
            let user = await loadJson(`https://api.github.com/users/${name}`)
            alert(`Full name: ${user.name}.`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    let m;
    wait().then(x => m = x);
    return m;
}

console.log(f())