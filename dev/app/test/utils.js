let login = (username, password) => {
    if (username !== 'victor' && password !== 'admin') {
        console.log('login denied!');
    }
    else console.log('logged in successfully!');
};

export {login}

