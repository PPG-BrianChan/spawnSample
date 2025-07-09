module.exports = (srv) => {
    srv.on('test', async (req) => {
        cds.spawn({
            user: cds.context?.user,
            tenant: cds.context?.tenant,
            headers: cds.context?.headers || req?.headers,
        }, test2)
        console.log("Done")
        req.info("Done")
    })

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function test2(req) {
        console.log('Start waiting...');
        await wait(5000); // wait for 2 seconds
        console.log('Finished waiting!');
    }

}