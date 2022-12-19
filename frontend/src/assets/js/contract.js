import FOX from './json/FOX.json'
import FOXFARM from './json/FoxFarm.json'
import WMATIC from './json/WMATIC.json'
import FOXS from './json/FOXS.json'
import SIN from './json/SIN.json'
import GATEWAY from './json/FoxFarmGateway.json'
import address from './json/address.json'

const FOX_CONTRACT_ADDR = address.FOX;
const FOXFARM_CONTRACT_ADDR = address.FoxFarm;
const WMATIC_CONTRACT_ADDR = address.WMATIC;
const FOXS_CONTRACT_ADDR = address.FOXS;
const SIN_CONTRACT_ADDR = address.SIN;
const GATEWAY_CONTRACT_ADDR = address.Gateway;

const FOX_CONTRACT_ABI = FOX.abi;
const FOXFARM_CONTRACT_ABI = FOXFARM.abi;
const WMATIC_CONTRACT_ABI = WMATIC.abi;
const FOXS_CONTRACT_ABI = FOXS.abi;
const SIN_CONTRACT_ABI = SIN.abi;
const GATEWAY_CONTRACT_ABI = GATEWAY.abi;

export { FOX_CONTRACT_ADDR, FOX_CONTRACT_ABI, FOXFARM_CONTRACT_ADDR, FOXFARM_CONTRACT_ABI, WMATIC_CONTRACT_ADDR, FOXS_CONTRACT_ADDR, SIN_CONTRACT_ADDR, GATEWAY_CONTRACT_ADDR, WMATIC_CONTRACT_ABI, FOXS_CONTRACT_ABI, SIN_CONTRACT_ABI, GATEWAY_CONTRACT_ABI };