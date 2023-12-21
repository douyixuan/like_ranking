import {
    bool,
    Canister,
    nat32,
    nat64,
    Opt,
    query,
    Record,
    StableBTreeMap,
    text,
    Tuple,
    update,
    Vec
} from 'azle';

// stable memory for 
const Key = nat32;
type Key = typeof Key.tsType;

const likeAndWish = Record({
    counter: nat64,
    comment: text
});
const Value = likeAndWish;
type Value = typeof Value.tsType;
let map = StableBTreeMap<Key, Value>(0);

export default Canister({
    // map methods
    contains: query([Key], bool, (key) => {
        return map.containsKey(key);
    }),

    get: query([Key], Opt(Value), (key) => {
        return map.get(key);
    }),

    insert: update([Key, Value], Opt(Value), (key, value) => {
        return map.insert(key, value);
    }),

    isEmpty: query([], bool, () => {
        return map.isEmpty();
    }),

    items: query([], Vec(Tuple(Key, Value)), () => {
        return map.items();
    }),

    keys: query([], Vec(Key), () => {
        return Uint32Array.from(map.keys());
    }),

    len: query([], nat64, () => {
        return map.len();
    }),

    remove: update([Key], Opt(Value), (key) => {
        return map.remove(key);
    }),

    values: query([], Vec(Value), () => {
        return map.values();
    })
});

