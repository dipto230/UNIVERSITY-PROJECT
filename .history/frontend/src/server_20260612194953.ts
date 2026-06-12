

const bootstrap = () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://local ${process.env.PORT}`);
        })
    } catch(error) {
        
    }
}