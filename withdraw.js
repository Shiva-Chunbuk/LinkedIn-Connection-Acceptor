function demo() {
    document
        .querySelector('.invitation-card__action-btn.artdeco-button--tertiary')
        .click();
    return Promise.resolve("Success");
}

function acceptConnection() {
    demo().then(() => {
        document
            .querySelector('.artdeco-button--primary')
            .click();
    });
}

setInterval(acceptConnection, 1000);
