    fetch('./ajax.json')
    .then(
        (res) => res.json(),
        () => console.error('Unable to fetch!')
    )
    .then((json) => {

        document.body.innerHTML += json