module.exports = {
    pages: {
        admin: {
            entry: 'admin/src/main.js',
            template: 'admin/public/index.html',
            filename: '../public/admin.html'
        },
        client: {
            entry: 'client/src/main.js',
            template: 'client/public/index.html',
            filename: '../public/client.html'
        }
    }
}
