import { getCanisterId, runTests } from 'azle/test';
import { createActor as createActorCanister1 } from './dfx_generated/like_collector';
import { createActor as createActorCanister2 } from './dfx_generated/ranker';
import { get_tests } from './tests';

const like_collector = createActorCanister1(getCanisterId('like_collector'), {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

const ranker = createActorCanister2(getCanisterId('ranker'), {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

runTests(get_tests(like_collector, ranker));