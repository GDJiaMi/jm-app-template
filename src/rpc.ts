/**
 * JSON RPC Client
 */
import RPC from '@gdjiami/jsonrpc'

const root = window.JM_ENV.JM_RPC_ROOT || '/jsonrpc'
const rpc = new RPC(root)

export default rpc
