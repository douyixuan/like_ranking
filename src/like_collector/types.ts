import {
    nat32,
    nat64,
    Record,
    text,
} from 'azle';

export const Key = nat32;
export type Key = typeof Key.tsType;

const LikeAndWish = Record({
    counter: nat64,
    comment: text
});

export const Value = LikeAndWish;
export type Value = typeof Value.tsType;
