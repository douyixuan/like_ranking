import {
    bool,
    Canister,
    nat32,
    nat64,
    ic,
    init,
    Opt,
    Principal,
    query,
    Record,
    StableBTreeMap,
    text,
    Tuple,
    update,
    Vec
} from 'azle';

import {Key, Value} from '../like_collector/types';

import LikeCollectorCanister from '../like_collector';
let likeCollector: typeof LikeCollectorCanister;

export default Canister({
    init: init([], () => {
        likeCollector = LikeCollectorCanister(
            Principal.fromText(
                process.env.LIKE_COLLECTOR_PRINCIPAL ??
                    ic.trap('process.env.LIKE_COLLECTOR_PRINCIPAL is undefined')
            )
        );
    }),
    isEmpty: update([], bool, async () => {
        return await ic.call(likeCollector.isEmpty, {
            args: []
        });
    }),
});

