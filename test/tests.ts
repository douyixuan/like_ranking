import { Test } from 'azle/test';
import { _SERVICE as LIKE_COLLECTOR_SERVICE } from './dfx_generated/like_collector/like_collector.did';
import { _SERVICE as RANKER_SERVICE } from './dfx_generated/ranker/ranker.did';
import { ActorSubclass } from '@dfinity/agent';

export function get_tests(
    like_collector: ActorSubclass<LIKE_COLLECTOR_SERVICE>,
    ranker: ActorSubclass<RANKER_SERVICE>
): Test[] {
    return [
        {
            name: 'like_collector is empty',
            test: async () => {
                const result = await ranker.isEmpty();
                return {
                    Ok: result === true
                };
            }
        },
    ];
}