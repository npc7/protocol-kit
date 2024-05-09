import Safe from '../Safe';
import { ContractNetworksConfig, SafeAccountConfig } from '../types';
import { EthAdapter, SafeVersion, TransactionOptions } from '@safe-global/safe-core-sdk-types';
export interface DeploySafeProps {
    safeAccountConfig: SafeAccountConfig;
    saltNonce?: string;
    options?: TransactionOptions;
    callback?: (txHash: string) => void;
}
export interface SafeFactoryConfig {
    /** ethAdapter - Ethereum adapter */
    ethAdapter: EthAdapter;
    /** safeVersion - Versions of the Safe deployed by this Factory contract */
    safeVersion?: SafeVersion;
    /** isL1SafeSingleton - Forces to use the Safe L1 version of the contract instead of the L2 version */
    isL1SafeSingleton?: boolean;
    /** contractNetworks - Contract network configuration */
    contractNetworks?: ContractNetworksConfig;
}
declare class SafeFactory {
    #private;
    static create({ ethAdapter, safeVersion, isL1SafeSingleton, contractNetworks }: SafeFactoryConfig): Promise<SafeFactory>;
    private init;
    getEthAdapter(): EthAdapter;
    getSafeVersion(): SafeVersion;
    getAddress(): Promise<string>;
    getChainId(): Promise<bigint>;
    predictSafeAddress(safeAccountConfig: SafeAccountConfig, saltNonce?: string): Promise<string>;
    deploySafe({ safeAccountConfig, saltNonce, options, callback }: DeploySafeProps): Promise<Safe>;
}
export default SafeFactory;
