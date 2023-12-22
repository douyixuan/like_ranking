import {
    Canister,
    ic,
    init,
    Opt,
    Principal,
    Record,
    update,
} from 'azle';

import {Key, Value, zeroValue } from '../like_collector/types';

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
    register: update([Key], Opt(Value), async (key) => {
        return await ic.call(likeCollector.insert, {
            args: [key, zeroValue]
        });
    }),
});

