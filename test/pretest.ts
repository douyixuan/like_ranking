import { getCanisterId } from 'azle/test';
import { execSync } from 'child_process';

async function pretest() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    execSync(`dfx canister uninstall-code like_collector || true`, {
        stdio: 'inherit'
    });

    execSync(`dfx canister uninstall-code ranker || true`, {
        stdio: 'inherit'
    });

    execSync(`dfx canister create ranker`, {
        stdio: 'inherit'
    });

    execSync(`LIKE_COLLECTOR_PRINCIPAL=${getCanisterId('like_collector')} dfx deploy`, {
        stdio: 'inherit'
    });

    execSync(`dfx generate`, {
        stdio: 'inherit'
    });
}

pretest();