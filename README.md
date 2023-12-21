# like_ranking

Welcome to Like Ranking project! It is a simple getter/setter-like canister. Base on the data from web3 community, we can build a heat map of different organizations, various tools and so on, which can give directions for the new-to-web3. What's more, we can expand this app to record the real facilities, places or organizations. Every voice will be counted. Everyone will be treated equally.

## get started

`dfx` is the tool you will use to interact with the IC locally and on mainnet.
If you don't already have it installed:

```bash
npm run dfx_install
```

Next you will want to start a replica, which is a local instance of the IC that you can deploy your canisters to:

```bash
npm run replica_start
```

If you ever want to stop the replica:

```bash
npm run replica_stop
```

Now you can deploy your canister locally:

```bash
npm install
LIKE_COLLECTOR_PRINCIPAL=bkyz2-fmaaa-aaaaa-qaaaq-cai && dfx deploy
```

To test the methods on your canister:

```bash
n
```

If you run the above commands and then call `npm run canister_call_get_message` you should see:

```bash
("Hello world!")
```

Assuming you have [created a cycles wallet](https://internetcomputer.org/docs/current/developer-docs/quickstart/network-quickstart) and funded it with cycles, you can deploy to mainnet like this:

```bash
npm run canister_deploy_mainnet
```
