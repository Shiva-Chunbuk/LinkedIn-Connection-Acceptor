(function () {
    var connections = document.querySelectorAll('.invitation-card__action-btn.artdeco-button--secondary');

    connections.forEach(function (connection) {
        connection.click();
        document.body.appendChild(connection);
    });
})();
